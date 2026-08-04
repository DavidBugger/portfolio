"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: React.ReactNode;
};

const QA_DATA = [
  {
    id: "who-is-david",
    question: "Who is David?",
    answer: "David is a Python Software Engineer specializing in backend infrastructure, REST APIs, and microservices. He has over 5 years of experience building scalable systems and AI integrations!",
  },
  {
    id: "core-skills",
    question: "What are your core skills?",
    answer: "My core stack includes Python (FastAPI, Django), TypeScript, Docker, and CI/CD pipelines. I'm also a power user of AI coding assistants like Cursor and GitHub Copilot.",
  },
  {
    id: "target-roles",
    question: "What roles are you looking for?",
    answer: "I am currently looking for roles as a Python Docker Engineer, Backend Integration Engineer, or AI Infrastructure Specialist, particularly in remote, distributed teams.",
  },
  {
    id: "contact",
    question: "How can I contact you?",
    answer: (
      <>
        You can reach out directly via email at davidakanang@gmail.com or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/david-akanang-0789771a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 font-semibold hover:underline"
        >
          LinkedIn
        </a>!
      </>
    ),
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! 👋 I'm David's AI Assistant. Ask me anything about his experience!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleQuestionClick = (qa: typeof QA_DATA[0]) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: qa.question };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate bot thinking delay
    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: qa.answer };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col"
            style={{ height: "500px", maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-orange-500 p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">David's Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {msg.sender === "bot" && (
                    <div className="mt-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20">
                      <Bot size={12} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${msg.sender === "user"
                      ? "bg-orange-500 text-white rounded-br-none"
                      : "bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-bl-none"
                      }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div className="mt-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      <User size={12} />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input / Suggestion Area */}
            <div className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <p className="text-xs text-slate-500 mb-3 font-medium">Ask a question:</p>
              <div className="flex flex-wrap gap-2">
                {QA_DATA.map((qa) => (
                  <button
                    key={qa.id}
                    onClick={() => handleQuestionClick(qa)}
                    className="text-xs bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 px-3 py-1.5 rounded-full transition-colors text-left"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors z-50 relative"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge indicator (Optional nice touch) */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-orange-500"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
