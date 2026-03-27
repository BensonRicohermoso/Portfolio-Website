import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

// This matches the Vercel Serverless Function path at /api/chat.js
const BACKEND_CHAT_API = '/api/chat';

const SYSTEM_PROMPT = `You are a personal AI assistant for Benson Ricohermoso's portfolio website. You only answer questions related to Benson and his work. If asked anything unrelated, politely redirect the conversation back to Benson.

Here is everything you know about Benson:
NAME: Benson Ricohermoso
ROLE: Full-Stack Web Developer & AI Specialist
ABOUT: Benson is a full-stack web developer passionate about building intelligent, scalable applications with JavaScript, TypeScript, and Python.
TECH STACK: Frontend (React, Next.js, Tailwind), Backend (Python, FastAPI, C++), AI (OpenAI, Groq, LLMs), DB (MySQL, MongoDB).
AWARDS: 2nd Runner-up – Glitch Hunt (Hackfest 2026), Dean's Lister.
CONTACT: bensonricohermoso@gmail.com
Always be friendly, concise, and professional. Only answer questions about Benson Ricohermoso.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Benson's AI assistant. Ask me anything about Benson — his skills, projects, or how to get in touch! 👋" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const buildChatHistory = (userText) => {
    return [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.filter(m => m.role === 'user' || m.role === 'bot').map(m => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text
      })),
      { role: 'user', content: userText }
    ];
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch(BACKEND_CHAT_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          messages: buildChatHistory(userText),
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Chat API error');
      }

      // Ensure we extract the 'text' property returned by our api/chat.js
      const botResponse = data.text || "I'm sorry, I'm having trouble connecting right now.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);

    } catch (err) {
      console.error('Frontend Chat Error:', err);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I couldn't process that. Please check your connection or try again later." }]);
    } finally {
      setLoading(false);
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10 hover:bg-neutral-200 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open
            ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="msg"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={22} />
              </motion.div>
            )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-44 right-6 z-50 w-80 sm:w-96 bg-[#111111] border border-[#222222] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ height: '460px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#222222] bg-[#0d0d0d]">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Benson's Assistant</p>
                <p className="text-neutral-500 text-xs">AI-Powered Portfolio Guide</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={`msg-${i}`}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                      msg.role === 'user' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-neutral-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Move the loading indicator inside the same flow */}
              {loading && (
                <div key="loading-indicator" className="flex justify-start">
                  <div className="bg-[#1a1a1a] px-4 py-3 rounded-2xl flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <div className="px-3 py-3 border-t border-[#222222] flex gap-2 bg-[#0d0d0d]">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Benson's projects..."
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 transition-all"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-all duration-200 disabled:opacity-30 flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 