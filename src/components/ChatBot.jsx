import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const SYSTEM_PROMPT = `You are a personal AI assistant for Benson Ricohermoso's portfolio website. You only answer questions related to Benson and his work. If asked anything unrelated, politely redirect the conversation back to Benson.

Here is everything you know about Benson:

NAME: Benson Ricohermoso

ROLE: Full-Stack Web Developer & AI Specialist

ABOUT:
Benson is a full-stack web developer passionate about building intelligent, scalable applications with JavaScript, TypeScript, and Python. His projects span from clinical management systems and financial chatbots to AI-powered platforms, focusing on enhancing user experience, data accessibility, and system reliability.
He has contributed to organizations by streamlining workflows and improving efficiency — through data management at a veterinary clinic or developing full-stack solutions that cut errors and boost performance. His work has delivered measurable impact such as reducing response latency by 45% and improving reporting efficiency by 30%.
He has been diving deeper into artificial intelligence, integrating NLP and LLMs into modern applications, creating AI-driven chat platforms and finance tools.

TECH STACK:
- Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS
- Backend: Python (FastAPI, Flask), C++
- AI & APIs: OpenAI, NLP, LLMs, RESTful APIs
- Database & Cloud: MySQL, MongoDB, SQLite, Vercel, Firebase, Railway

CERTIFICATIONS:
- AWS Cloud Support Associate (Coursera)
- English for Media Literacy MOOC (OPEN)

AWARDS:
- 2nd Runner-up – Glitch Hunt, Google Developer Groups Community (Hackfest 2026)
- Dean's Lister – First Year College and Second Year 1st Semester

SEMINARS & WORKSHOPS:
- Mastering Programming & Data Analytics Event (LMS & Power BI)

CONTACT:
- Email: bensonricohermoso@gmail.com
- Location: Philippines
- GitHub: github.com/your-username
- LinkedIn: linkedin.com/in/your-profile

PROJECTS:
- AI Chat Assistant (Python, PyTorch, React, FastAPI)
- E-Commerce Platform (Next.js, Node.js, PostgreSQL, Stripe)
- Image Classifier (Python, TensorFlow, OpenCV, Flask)
- Portfolio Dashboard (React, TypeScript, D3.js, REST API)
- Task Manager App (React, Express, MongoDB, Socket.io)
- NLP Sentiment Analyzer (Python, HuggingFace, Scikit-learn, Pandas)

Always be friendly, concise, and professional. Only answer questions about Benson Ricohermoso.`

const genAI = new GoogleGenerativeAI(API_KEY)

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Benson's AI assistant. Ask me anything about Benson — his skills, projects, or how to get in touch! 👋" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const chatRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && !chatRef.current) {
      chatRef.current = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }).startChat({
        history: [],
        generationConfig: { maxOutputTokens: 500 },
      })
    }
  }, [open])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userText = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setLoading(true)

    try {
      if (!chatRef.current) {
        chatRef.current = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }).startChat({
          history: [],
          generationConfig: { maxOutputTokens: 500 },
        })
      }
      const result = await chatRef.current.sendMessage(`${SYSTEM_PROMPT}\n\nUser: ${userText}`)
      const text = result.response.text()
      setMessages(prev => [...prev, { role: 'bot', text }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I couldn't process that. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
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
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
            : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle size={22} /></motion.div>
          }
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
                <p className="text-neutral-500 text-xs">Ask me about Benson</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-white text-black rounded-br-sm'
                        : 'bg-[#1a1a1a] text-neutral-300 border border-[#2a2a2a] rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-[#222222] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Benson..."
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-colors duration-200 disabled:opacity-40 flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
