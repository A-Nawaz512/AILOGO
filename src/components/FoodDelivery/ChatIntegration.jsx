// src/components/ChatIntegration.jsx
import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Video, Paperclip, Send, 
  CheckCircle, Clock, User, HelpCircle 
} from 'lucide-react';

const ChatIntegration = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('in-app');

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-time <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Communication</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless in-app chat with WhatsApp integration for instant delivery coordination
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Channels */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Chat Channels</h3>
                <p className="text-gray-600 text-sm">Connected conversations</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {chats.map((chat) => (
                  <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{chat.user}</div>
                          <div className="text-sm text-gray-500 flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{chat.time}</span>
                          </div>
                        </div>
                      </div>
                      {chat.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow">
                  New Conversation
                </button>
              </div>
            </div>

            {/* Integration Options */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg">WhatsApp Integration</h4>
              </div>
              <p className="text-green-100 mb-4">
                Continue conversations on WhatsApp for seamless communication with delivery partners
              </p>
              <button className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Connect WhatsApp
              </button>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Customer Support</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Online</span>
                        </div>
                        <span>•</span>
                        <span>Typically replies in 2 minutes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Video className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-6">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md rounded-2xl p-4 ${
                        msg.sender === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-tr-none' 
                          : 'bg-gray-100 text-gray-900 rounded-tl-none'
                      }`}>
                        <p>{msg.text}</p>
                        <div className={`text-xs mt-2 flex items-center ${
                          msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                          {msg.sender === 'user' && (
                            <CheckCircle className="w-3 h-3 ml-2" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="p-3 hover:bg-gray-100 rounded-xl">
                    <Paperclip className="w-5 h-5 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-shadow">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatIntegration;