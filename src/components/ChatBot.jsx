import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

// Relative path for Vercel/Vite deployment
const GEMINI_API_URL = '/api/chat';

const SYSTEM_PROMPT = `
You are a personal AI assistant for the portfolio website of Benson Ricohermoso.

Your role is to answer questions ONLY related to Benson Ricohermoso, his skills, experience, projects, and background.

If a user asks something unrelated, politely redirect the conversation back to Benson.

----------------------
ABOUT BENSON
----------------------
Name: Benson Ricohermoso  
Role: Full-Stack Web Developer & AI Specialist  

Description:  
Benson is a full-stack web developer passionate about building intelligent, scalable applications using modern technologies. He specializes in combining web development with AI solutions.

----------------------
TECH STACK
----------------------
Frontend: React, Next.js, Tailwind CSS  
Backend: Python (FastAPI), C++  
AI & APIs: OpenAI, Groq, LLMs, REST APIs  
Database: MySQL, MongoDB  

----------------------
ACHIEVEMENTS
----------------------
- 2nd Runner-up – Glitch Hunt (Hackfest 2026)  
- Dean's Lister  

----------------------
CONTACT
----------------------
Email: bensonricohermoso@gmail.com  

----------------------
BEHAVIOR RULES
----------------------
- Be friendly, concise, and professional  
- Keep answers short and relevant  
- Do NOT make up information  
- Do NOT answer unrelated questions  
- Always redirect politely if the question is outside scope  

Example redirect:
"I'm here to help with questions about Benson Ricohermoso. Let me know what you'd like to know about his work or experience!"

----------------------
GOAL
----------------------
Help visitors quickly understand Benson’s skills, experience, and value as a developer.
`;

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

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    try {
      const history = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(m => ({
          role: m.role === 'bot' ? 'assistant' : 'user',
          content: m.text
        })),
        { role: 'user', content: userText }
      ];

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `Error: ${response.status}`);

      setMessages(prev => [...prev, { role: 'bot', text: data.text || "I'm sorry, I couldn't get a response." }]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating Button and Tooltip */}
      <AnimatePresence>
        {!open && (
          <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 sm:bottom-10">
            
            {/* Desktop Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-white text-black px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-neutral-200 mb-2 hidden sm:block relative"
            >
              <p className="text-[11px] font-bold uppercase tracking-tight">
                Assistant Online ✨
              </p>
            </motion.div>

            {/* The Main Button with Green Glow */}
            <motion.button
              onClick={() => setOpen(true)}
              className="relative w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] group transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* Pulsing Green Halo */}
              <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping pointer-events-none" />
              
              <MessageCircle size={24} className="relative z-10" />
              
              {/* Small Green Status Dot */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#111]"></span>
              </span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-[110] w-full bottom-0 left-0 right-0 h-[80vh] rounded-t-3xl border border-[#222222] bg-[#111111] shadow-2xl flex flex-col overflow-hidden sm:w-96 sm:h-[550px] sm:bottom-24 sm:right-6 sm:left-auto sm:rounded-2xl"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ maxHeight: '100dvh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#222222] bg-[#0d0d0d]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">Benson's AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                    <p className="text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-neutral-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-hidden p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-white text-black font-medium' : 'bg-[#1a1a1a] text-neutral-200 border border-[#222222]'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] px-4 py-3 rounded-2xl border border-[#222222]">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-[#0d0d0d] border-t border-[#222222]">
              <div className="relative flex items-center max-w-full">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about Benson's projects..."
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-full pl-5 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-neutral-600"
                  autoComplete="off"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="absolute right-1.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center disabled:opacity-20 hover:scale-105 active:scale-95 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              {/* Safe area spacing for mobile browsers */}
              <div className="h-[env(safe-area-inset-bottom,0px)] sm:hidden" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}