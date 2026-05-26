import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, Sparkles, X, ChevronUp, AlertCircle } from "lucide-react";
import { ChatMessage } from "../types";

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi! I am PulseAI, Jelsinge Arun's Chief of Staff and agent. Ask me anything about Jelsinge's technical experience, CV, or specific repo details like his YOLOv8 surveillance systems or OpenPulse vLLM orchestration!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "What is Jelsinge's experience with YOLOv8?",
    "Explain OpenPulse's video compiler architecture",
    "Is Jelsinge open to remote YC startup roles?",
    "Review Jelsinge's driver biometrics system"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI server");
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        sender: "bot",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (e: any) {
      const errorMsg: ChatMessage = {
        sender: "bot",
        text: "It looks like my server endpoint is warming up or the GEMINI_API_KEY is not configured yet. Don't worry! You can easily leave a message in the secure Contact Form below, or email Jelsinge directly at jelsingearun.2004@gmail.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chat-toggle-btn"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold px-4 py-3 rounded-full shadow-lg shadow-cyan-950/30 hover:shadow-cyan-400/20 active:scale-95 transition-all cursor-pointer font-display"
          >
            <Bot className="w-5 h-5" />
            <span>Chat Jelsinge's PulseAI</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-out Sidebar or chatbox overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.div
              id="ai-chatbot-window"
              initial={{ x: "100%", opacity: 0 } as any}
              animate={{ x: 0, opacity: 1 } as any}
              exit={{ x: "100%", opacity: 0 } as any}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-white text-sm flex items-center gap-1.5">
                      PulseAI Chief-of-Staff
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    </h3>
                    <p className="text-zinc-500 text-xs font-mono">Status: Neural Engine Live</p>
                  </div>
                </div>
                <button
                  id="chat-close-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Warnings Panel */}
              <div className="bg-zinc-900/30 p-3 border-b border-zinc-800/80 flex items-start gap-2 text-[11px] text-zinc-400 font-mono">
                <AlertCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Provides immediate, evidence-backed answers about Jelsinge's authentic projects. No simulated data.</span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`p-2 rounded-md ${
                        msg.sender === "user"
                          ? "bg-zinc-800 text-white"
                          : "bg-cyan-950/20 text-zinc-200 border border-cyan-950/60"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <User className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Bot className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <div className="max-w-[75%]">
                      <div
                        className={`p-3 rounded-2xl text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-zinc-900 border border-zinc-800 text-white rounded-tr-none"
                            : "bg-zinc-900/50 border border-zinc-850 text-zinc-100 rounded-tl-none"
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono mt-1 block">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-cyan-950/20 text-cyan-400 border border-cyan-950/60">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-zinc-900/50 p-3 rounded-2xl rounded-tl-none border border-zinc-850 flex items-center gap-1.5 py-4">
                      <span className="block h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="block h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="block h-2 w-2 rounded-full bg-cyan-400 animate-bounce"></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-zinc-850 bg-zinc-950">
                  <span className="text-[11px] text-zinc-500 font-mono uppercase block mb-2 tracking-wider">Suggested Questions</span>
                  <div className="grid grid-cols-1 gap-2">
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(sug)}
                        className="text-left py-2 px-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-xs leading-tight transition-all cursor-pointer font-mono"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Input */}
              <form
                id="chatbot-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="p-4 border-t border-zinc-800 bg-zinc-900/30"
              >
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-805 rounded-xl p-2 focus-within:border-cyan-500/70 transition-all">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask standard or custom questions..."
                    className="flex-1 bg-transparent border-0 outline-none p-1.5 text-sm text-white placeholder-zinc-500 focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 cursor-pointer active:scale-95 transition-all shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
