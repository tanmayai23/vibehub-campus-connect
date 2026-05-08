import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotButtonProps {
  className?: string;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: "user" | "bot"; content: string }[]>([
    { type: "bot", content: "Hi! I'm your VibeHub assistant. Ask me about deadlines, complaints, or campus resources." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { type: "user", content: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = trimmed.toLowerCase();
      let reply: string;
      if (lower.includes("deadline") || lower.includes("due date")) {
        reply = "The next important deadline is the semester registration by April 13, 2025.";
      } else if (lower.includes("complaint") || lower.includes("report")) {
        reply = "You can file a complaint through our complaint system. Would you like me to guide you through the process?";
      } else if (lower.includes("resource") || lower.includes("help")) {
        reply = "We have resources available — the library, tutoring center, and online materials. What are you looking for?";
      } else {
        reply = "I'm here to help with deadlines, complaints, and campus resources. How can I assist you?";
      }
      setMessages((prev) => [...prev, { type: "bot", content: reply }]);
    }, 900);
  };

  return (
    <div className={cn("fixed bottom-6 right-6 z-40", className)}>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[22rem] sm:w-96 card-elevated overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="relative bg-brand-mesh px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-brand-700" />
                </div>
                <div className="leading-tight">
                  <h3 className="font-semibold text-sm">VibeHub Assistant</h3>
                  <p className="text-[11px] text-white/70">Online · Replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/15 rounded-lg p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-3 bg-background/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex animate-fade-in",
                  message.type === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                    message.type === "user"
                      ? "bg-brand-gradient text-white rounded-br-sm shadow-glow-brand"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-2.5">
                  <div className="flex space-x-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-pulse-light" />
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-pulse-light" style={{ animationDelay: "0.15s" }} />
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-pulse-light" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-border bg-card p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 bg-muted/60 rounded-xl py-2.5 px-3.5 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-brand-500/30 placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-10 w-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-glow-brand disabled:opacity-50 disabled:shadow-none transition-all hover:opacity-90"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-glow-brand transition-all duration-300 ease-out-expo",
          "hover:scale-105 hover:shadow-pop active:scale-95",
          isOpen && "rotate-90"
        )}
        aria-label="Open chat"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500 ring-2 ring-background" />
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatbotButton;
