// src/components/ChatIntegration.jsx
import React, { useState } from 'react';
import { MessageCircle, Phone, Video, Paperclip, Send, CheckCircle, Clock, User, HelpCircle } from 'lucide-react';

const ChatIntegration = () => {
  const [message, setMessage] = useState('');

  const chats = [
    { id: 1, user: 'Customer Support', time: '2 min ago', unread: false },
    { id: 2, user: 'Delivery Partner', time: '5 min ago', unread: true },
    { id: 3, user: 'Order #4567', time: '10 min ago', unread: false },
  ];

  const messages = [
    { id: 1, sender: 'support', text: 'Hi! How can I help with your delivery today?', time: '10:30 AM' },
    { id: 2, sender: 'user', text: 'Can you update the delivery address?', time: '10:32 AM' },
    { id: 3, sender: 'support', text: 'Absolutely! Please provide the new address.', time: '10:33 AM' },
  ];

  const ChatCard = ({ children }) => (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl">{children}</div>
  );

  return (
    <section id='communication' className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#F5B45D] to-[#FACC15] rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-time <span className="bg-gradient-to-r from-[#F5B45D] to-[#FACC15] bg-clip-text text-transparent">Communication</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            In-app chat, call, or WhatsApp for instant delivery coordination
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Chat List */}
          <div className="space-y-8">
            <ChatCard>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold">Chat Channels</h3>
                <p className="text-gray-500 text-sm">Connected conversations</p>
              </div>
              <div className="divide-y divide-gray-200">
                {chats.map(c => (
                  <div key={c.id} className="p-4 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F5B45D] to-[#FACC15] rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{c.user}</div>
                        <div className="text-gray-500 text-sm flex items-center space-x-1">
                          <Clock className="w-3 h-3" /><span>{c.time}</span>
                        </div>
                      </div>
                    </div>
                    {c.unread && <div className="w-2 h-2 bg-[#F5B45D] rounded-full"></div>}
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-[#F5B45D] to-[#FACC15] text-white py-3 rounded-xl font-semibold hover:opacity-90">
                  New Conversation
                </button>
              </div>
            </ChatCard>

            {/* WhatsApp Integration */}
            <div className="bg-gradient-to-r from-[#F5B45D] to-[#FACC15] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-lg">WhatsApp Integration</h4>
              </div>
              <p className="mb-4">
                Continue conversations on WhatsApp for instant coordination.
              </p>
              <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600">
                Connect WhatsApp
              </button>
            </div>
          </div>

          {/* Chat Box */}
          <div className="lg:col-span-2">
            <ChatCard>
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F5B45D] to-[#FACC15] rounded-full flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Customer Support</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Online</span>
                      </div>
                      <span>•</span><span>Replies in ~2 min</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-500 p-2 hover:bg-gray-100 rounded-lg" />
                  <Video className="w-5 h-5 text-gray-500 p-2 hover:bg-gray-100 rounded-lg" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.map(m => (
                  <div key={m.id} className={`flex ${m.sender==='user'?'justify-end':'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md p-4 rounded-2xl ${m.sender==='user' ? 'bg-gradient-to-r from-[#F5B45D] to-[#FACC15] text-white rounded-tr-none' : 'bg-gray-100 text-gray-900 border border-gray-200 rounded-tl-none'}`}>
                      <p>{m.text}</p>
                      <div className={`text-xs mt-2 flex items-center ${m.sender==='user'?'text-white/80':'text-gray-500'}`}>
                        {m.time}{m.sender==='user' && <CheckCircle className="w-3 h-3 ml-2" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-gray-200 flex items-center space-x-4">
                <Paperclip className="w-5 h-5 text-gray-500 p-3 hover:bg-gray-100 rounded-xl" />
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5B45D] focus:border-transparent"
                />
                <Send className="w-5 h-5 p-3 bg-gradient-to-r from-[#F5B45D] to-[#FACC15] text-white rounded-xl hover:opacity-90" />
              </div>
            </ChatCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatIntegration;
