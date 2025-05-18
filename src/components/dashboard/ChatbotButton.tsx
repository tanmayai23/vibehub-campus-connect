
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ChatbotButtonProps {
  className?: string;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot', content: string }[]>([
    { type: 'bot', content: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { type: 'user', content: input }]);
      setInput('');
      
      // Simulate bot typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        
        // Bot responses based on keywords
        if (input.toLowerCase().includes('deadline') || input.toLowerCase().includes('due date')) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'The next important deadline is the semester registration by April 13, 2025.' 
          }]);
        } else if (input.toLowerCase().includes('complaint') || input.toLowerCase().includes('report')) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'You can file a complaint through our complaint system. Would you like me to guide you through the process?' 
          }]);
        } else if (input.toLowerCase().includes('resource') || input.toLowerCase().includes('help')) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'We have various resources available including the library, tutoring center, and online course materials. What specific resources are you looking for?' 
          }]);
        } else {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'I\'m here to help with information about deadlines, complaints, and campus resources. How can I assist you?' 
          }]);
        }
      }, 1000);
    }
  };

  return (
    <div className={cn("fixed bottom-6 right-6 z-40", className)}>
      {/* Chatbot Interface */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-vibe-dark-background-secondary rounded-xl shadow-lg border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between bg-vibe-accent-blue text-white dark:bg-vibe-dark-accent dark:text-vibe-dark-background-primary px-4 py-3">
            <h3 className="font-medium">VibeHub Assistant</h3>
            <button 
              onClick={handleToggleChatbot}
              className="hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="h-72 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.type === 'user' 
                    ? "bg-vibe-accent-blue/10 dark:bg-vibe-dark-accent/10 ml-auto" 
                    : "bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary"
                )}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary max-w-[80%] rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse-light"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse-light" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse-light" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg py-2 px-3 text-sm border-none focus:outline-none focus:ring-2 focus:ring-vibe-accent-blue dark:focus:ring-vibe-dark-accent"
            />
            <Button 
              type="submit" 
              size="sm"
              className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
            >
              Send
            </Button>
          </form>
        </div>
      )}
      
      {/* Chatbot Button */}
      <button
        onClick={handleToggleChatbot}
        className={cn(
          "w-12 h-12 rounded-full bg-vibe-accent-blue hover:bg-vibe-accent-purple text-white flex items-center justify-center shadow-lg transition-all",
          "hover:scale-105 active:scale-95 hover:rotate-12",
          "dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90 dark:text-vibe-dark-background-primary"
        )}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatbotButton;
