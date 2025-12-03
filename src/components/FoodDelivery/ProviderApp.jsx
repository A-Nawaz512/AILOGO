// src/components/ProviderApp.jsx
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Shield, CreditCard, Zap, Bell, 
  Navigation, Package, Clock, DollarSign, Star,
  BarChart, Users, MapPin, CheckCircle, Lock,
  Battery, Wifi, Signal, ChevronRight, Settings,
  Camera, MessageSquare, Home, User, TrendingUp,
  Download, Menu, X
} from 'lucide-react';

const ProviderApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [batteryLevel, setBatteryLevel] = useState(78);
  const [connectionStatus, setConnectionStatus] = useState('excellent');
  const [deliveryStatus, setDeliveryStatus] = useState('available');
  const [newDeliveries, setNewDeliveries] = useState(12);
  const [earningsToday, setEarningsToday] = useState(245.50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNewDeliveries(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(5, Math.min(prev + change, 20));
      });
      
      setEarningsToday(prev => {
        const change = Math.random() * 15;
        return parseFloat((prev + change).toFixed(2));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const appScreens = {
    dashboard: {
      title: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-[#755023]/10 to-[#E2CF7D]/10 rounded-lg p-4 border border-[#755023]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E2CF7D] font-medium">Today's Earnings</p>
                  <p className="text-xl font-bold text-gray-100">${earningsToday.toFixed(2)}</p>
                </div>
                <DollarSign className="w-8 h-8 text-[#E2CF7D] opacity-80" />
              </div>
              <div className="mt-2 text-xs text-[#E2CF7D]/80">
                +${(earningsToday * 0.05).toFixed(2)} commission
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#755023]/10 to-[#E2CF7D]/10 rounded-lg p-4 border border-[#755023]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E2CF7D] font-medium">Available</p>
                  <p className="text-xl font-bold text-gray-100">{newDeliveries}</p>
                </div>
                <Package className="w-8 h-8 text-[#E2CF7D] opacity-80" />
              </div>
              <div className="mt-2 text-xs text-[#E2CF7D]/80">
                New deliveries in your zone
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#755023]/10 to-[#E2CF7D]/10 rounded-lg p-4 border border-[#755023]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E2CF7D] font-medium">Rating</p>
                  <p className="text-xl font-bold text-gray-100">4.92</p>
                </div>
                <Star className="w-8 h-8 text-[#E2CF7D] opacity-80" />
              </div>
              <div className="mt-2 text-xs text-[#E2CF7D]/80">
                98% satisfaction
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#755023]/10 to-[#E2CF7D]/10 rounded-lg p-4 border border-[#755023]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#E2CF7D] font-medium">Online Time</p>
                  <p className="text-xl font-bold text-gray-100">5h 42m</p>
                </div>
                <Clock className="w-8 h-8 text-[#E2CF7D] opacity-80" />
              </div>
              <div className="mt-2 text-xs text-[#E2CF7D]/80">
                Active today
              </div>
            </div>
          </div>

          {/* Active Delivery Card */}
          <div className="bg-[#202020] rounded-lg p-4 border border-[#755023]/30">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-100">Active Delivery</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">In Progress</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100">Order #DL-7890</p>
                    <p className="text-sm text-gray-400">Food Delivery</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#E2CF7D]" />
                  <span className="text-gray-300">2.3 km to destination</span>
                </div>
                <div className="text-[#E2CF7D] font-medium">ETA: 12 min</div>
              </div>
              
              <div className="pt-3 border-t border-[#755023]/20">
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:scale-105">
                    Navigate
                  </button>
                  <button className="px-4 py-2 border border-[#755023] text-gray-300 rounded-lg text-sm font-medium hover:bg-[#755023]/20 transition-colors">
                    Chat Customer
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: <CreditCard className="w-5 h-5" />, label: 'Payments', color: 'text-[#E2CF7D] bg-[#755023]/20' },
              { icon: <BarChart className="w-5 h-5" />, label: 'Stats', color: 'text-[#E2CF7D] bg-[#755023]/20' },
              { icon: <Users className="w-5 h-5" />, label: 'Support', color: 'text-[#E2CF7D] bg-[#755023]/20' },
              { icon: <Settings className="w-5 h-5" />, label: 'Settings', color: 'text-[#E2CF7D] bg-[#755023]/20' }
            ].map((action, idx) => (
              <button key={idx} className="flex flex-col items-center p-3 rounded-lg hover:bg-[#755023]/20 transition-colors">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  {action.icon}
                </div>
                <span className="text-xs mt-2 text-gray-300">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )
    },
    deliveries: {
      title: 'Deliveries',
      icon: <Package className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {/* Card Verification Banner */}
          <div className="bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 rounded-lg p-4 border border-[#755023]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg">
                  <CreditCard className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Card Verification Required</h4>
                  <p className="text-sm text-gray-400">Unlock new delivery opportunities</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:scale-105">
                Verify Now
              </button>
            </div>
          </div>

          {/* Available Deliveries List */}
          <div className="space-y-3">
            {[
              { id: 1, type: 'Food', distance: '1.2 km', price: '$8.50', zone: 'Within City', priority: true },
              { id: 2, type: 'Pharmacy', distance: '3.5 km', price: '$12.00', zone: 'Between Cities', priority: false },
              { id: 3, type: 'Package', distance: '0.8 km', price: '$6.75', zone: 'Within City', priority: true },
              { id: 4, type: 'Products', distance: '5.2 km', price: '$18.25', zone: 'Multi-Zone', priority: false },
              { id: 5, type: 'Food', distance: '2.1 km', price: '$9.80', zone: 'Within City', priority: false }
            ].map((delivery) => (
              <div key={delivery.id} className="bg-[#202020] rounded-lg p-4 border border-[#755023]/30 hover:border-[#E2CF7D]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg flex items-center justify-center">
                      {delivery.type === 'Food' && <Package className="w-5 h-5 text-gray-900" />}
                      {delivery.type === 'Pharmacy' && <Shield className="w-5 h-5 text-gray-900" />}
                      {delivery.type === 'Package' && <Package className="w-5 h-5 text-gray-900" />}
                      {delivery.type === 'Products' && <Package className="w-5 h-5 text-gray-900" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-100">{delivery.type} Delivery</h4>
                        {delivery.priority && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 text-xs rounded-full font-medium">
                            Priority
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Navigation className="w-3 h-3" />
                          <span>{delivery.distance}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{delivery.zone}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-100">{delivery.price}</div>
                    <div className="text-xs text-[#E2CF7D]">+5% commission</div>
                    <button className="mt-2 px-4 py-1.5 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:scale-105">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    wallet: {
      title: 'Wallet',
      icon: <DollarSign className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {/* Wallet Balance */}
          <div className="bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg p-6 text-gray-900">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-800 text-sm">Total Balance</p>
                <p className="text-3xl font-bold">$1,245.80</p>
              </div>
              <CreditCard className="w-8 h-8 opacity-90" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-800 text-xs">Available</p>
                <p className="text-lg font-semibold">$856.30</p>
              </div>
              <div>
                <p className="text-gray-800 text-xs">In Transit</p>
                <p className="text-lg font-semibold">$389.50</p>
              </div>
            </div>
          </div>

          {/* Commission Breakdown */}
          <div className="bg-[#202020] rounded-lg p-4 border border-[#755023]/30">
            <h3 className="font-semibold text-gray-100 mb-3">Commission Breakdown</h3>
            <div className="space-y-3">
              {[
                { type: 'Food Delivery', amount: '$245.50', commission: '$12.28', percentage: '5%' },
                { type: 'Pharmacy', amount: '$189.75', commission: '$9.49', percentage: '5%' },
                { type: 'Packages', amount: '$567.20', commission: '$28.36', percentage: '5%' },
                { type: 'Products', amount: '$243.35', commission: '$12.17', percentage: '5%' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-[#755023]/20 last:border-0">
                  <div>
                    <p className="font-medium text-gray-100">{item.type}</p>
                    <p className="text-sm text-gray-400">Total: {item.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-100">{item.commission}</p>
                    <p className="text-sm text-[#E2CF7D]">{item.percentage} commission</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payout Options */}
          <div className="bg-gradient-to-br from-[#755023]/10 to-[#E2CF7D]/5 rounded-lg p-4 border border-[#755023]/30">
            <h3 className="font-semibold text-gray-100 mb-3">Payout Methods</h3>
            <div className="space-y-3">
              {[
                { method: 'Bank Transfer', status: 'Active', icon: <CreditCard /> },
                { method: 'Digital Wallet', status: 'Active', icon: <Smartphone /> },
                { method: 'Instant Cash', status: 'Available', icon: <DollarSign /> }
              ].map((method, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[#202020] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg">
                      <div className="text-gray-900">{method.icon}</div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-100">{method.method}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#E2CF7D] rounded-full"></div>
                        <span className="text-sm text-[#E2CF7D]">{method.status}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105">
              Withdraw Earnings
            </button>
          </div>
        </div>
      )
    },
    profile: {
      title: 'Profile',
      icon: <User className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-lg p-6 text-gray-900 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-gray-700">Premium Delivery Partner</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">4.92</p>
                <p className="text-sm text-gray-700">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-gray-700">Deliveries</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-gray-700">Success</p>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-[#202020] rounded-lg p-4 border border-[#755023]/30">
            <h3 className="font-semibold text-gray-100 mb-3">Performance Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: 'On-time Delivery', value: '96%', color: 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]' },
                { metric: 'Customer Rating', value: '4.9/5', color: 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]' },
                { metric: 'Acceptance Rate', value: '89%', color: 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]' },
                { metric: 'Earnings Trend', value: '+24%', color: 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.metric}</span>
                    <span className="font-medium text-gray-100">{item.value}</span>
                  </div>
                  <div className="h-2 bg-[#202020] rounded-full overflow-hidden border border-[#755023]/30">
                    <div 
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: item.metric === 'On-time Delivery' ? '96%' :
                               item.metric === 'Customer Rating' ? '98%' :
                               item.metric === 'Acceptance Rate' ? '89%' :
                               '76%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Status */}
          <div className="bg-gradient-to-br from-[#202020] to-[#151515] rounded-lg p-4 border border-[#755023]/30">
            <h3 className="font-semibold text-gray-100 mb-3">Verification Status</h3>
            <div className="space-y-3">
              {[
                { label: 'Identity Verified', status: true },
                { label: 'Vehicle Verified', status: true },
                { label: 'Payment Card', status: true },
                { label: 'Background Check', status: true },
                { label: 'Insurance Active', status: false }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.status ? (
                      <CheckCircle className="w-5 h-5 text-[#E2CF7D]" />
                    ) : (
                      <Lock className="w-5 h-5 text-[#755023]" />
                    )}
                    <span className={`${item.status ? 'text-gray-100' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                  </div>
                  {item.status ? (
                    <span className="px-2 py-1 bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 text-[#E2CF7D] text-xs rounded-full border border-[#755023]/30">
                      Verified
                    </span>
                  ) : (
                    <button className="px-3 py-1 bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 text-[#E2CF7D] text-xs rounded-full hover:bg-[#755023]/30 transition-colors border border-[#755023]/30">
                      Verify Now
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'Protected transactions with 5% flat commission',
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: 'Smart Routing',
      description: 'AI-powered routes for maximum efficiency',
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Real-time Alerts',
      description: 'Instant notifications for new deliveries',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Unlock',
      description: 'Card verification for premium deliveries',
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-gray-100">
      {/* Mobile Navigation Header */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/ailogo.png"
              alt="Logo"
              className="h-10 w-auto bg-black/20 shadow-sm shadow-[#755023] rounded-lg"
            />
            <span className="text-xl font-bold text-[#E2CF7D]">Provider App</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-100 hover:text-[#E2CF7D]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 bg-[#202020] rounded-lg border border-[#755023]/30 p-4 animate-fadeIn">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {Object.entries(appScreens).map(([key, screen]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex flex-col items-center p-3 rounded-lg ${
                    activeTab === key 
                      ? 'bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 border border-[#755023]/30' 
                      : 'hover:bg-[#755023]/10'
                  }`}
                >
                  <div className={`mb-1 ${activeTab === key ? 'text-[#E2CF7D]' : 'text-gray-400'}`}>
                    {screen.icon}
                  </div>
                  <span className="text-xs font-medium">{screen.title}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-2">
              <button className="w-full py-3 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all">
                Download App
              </button>
              <button className="w-full py-3 border border-[#755023] text-gray-100 rounded-lg hover:bg-[#755023]/20 transition-colors">
                Partner Login
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-full mb-4">
            <Smartphone className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E2CF7D]">Provider</span> Mobile Application
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful tools for delivery partners with real-time tracking, instant payments, 
            and smart assignment systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Mobile App Simulation */}
          <div className="relative">
            {/* Mobile Device Frame */}
            <div className="sticky top-8">
              <div className="relative w-80 mx-auto">
                {/* Mobile Frame */}
                <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl border-4 border-[#755023]">
                  {/* Status Bar */}
                  <div className="bg-[#202020] rounded-t-3xl px-6 py-2 flex items-center justify-between">
                    <div className="text-gray-300 text-xs font-medium">9:41</div>
                    <div className="flex items-center space-x-1">
                      <Signal className="w-3 h-3 text-[#E2CF7D]" />
                      <Wifi className="w-3 h-3 text-[#E2CF7D]" />
                      <Battery className="w-4 h-3 text-[#E2CF7D]" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-to-r from-[#755023] to-[#E2CF7D] px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-900/20 rounded-lg flex items-center justify-center">
                            <Package className="w-4 h-4 text-gray-900" />
                          </div>
                          <span className="text-gray-900 font-bold text-lg">ALLOGO</span>
                        </div>
                        <p className="text-gray-800 text-sm">Provider App</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-gray-900" />
                        <div className="relative">
                          <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-0.5 -right-0.5"></div>
                          <User className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="bg-[#151515] h-[580px] overflow-y-auto">
                    {/* Network Status */}
                    <div className="p-4">
                      <div className={`flex items-center justify-between p-3 rounded-lg ${
                        connectionStatus === 'excellent' 
                          ? 'bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 border border-[#755023]/30' 
                          : 'bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 border border-[#755023]/30'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            connectionStatus === 'excellent' 
                              ? 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]' 
                              : 'bg-gradient-to-r from-[#755023] to-[#E2CF7D]'
                          }`}>
                            <Zap className="w-4 h-4 text-gray-900" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-100">Network Status</p>
                            <p className={`text-sm ${
                              connectionStatus === 'excellent' ? 'text-[#E2CF7D]' : 'text-[#E2CF7D]'
                            }`}>
                              {connectionStatus === 'excellent' ? 'Excellent Connection' : 'Moderate Connection'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${
                              batteryLevel > 50 ? 'bg-[#E2CF7D]' : 
                              batteryLevel > 20 ? 'bg-[#755023]' : 'bg-red-500'
                            }`}></div>
                            <span className="text-sm text-gray-400">{batteryLevel}%</span>
                          </div>
                          <Battery className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* App Navigation Tabs */}
                    <div className="px-4">
                      <div className="flex items-center justify-between bg-[#202020] rounded-lg p-1 border border-[#755023]/30">
                        {Object.entries(appScreens).map(([key, screen]) => (
                          <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex-1 py-3 rounded-md flex flex-col items-center justify-center transition-all ${
                              activeTab === key 
                                ? 'bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900' 
                                : 'text-gray-400 hover:text-gray-300'
                            }`}
                          >
                            <div className={`mb-1 ${activeTab === key ? 'text-gray-900' : 'text-gray-400'}`}>
                              {screen.icon}
                            </div>
                            <span className="text-xs font-medium">{screen.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Active Screen Content */}
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-100">
                          {appScreens[activeTab].title}
                        </h3>
                      </div>
                      {appScreens[activeTab].content}
                    </div>

                    {/* Delivery Status Toggle */}
                    <div className="px-4 py-4 border-t border-[#755023]/30">
                      <div className="bg-[#202020] rounded-lg p-4 border border-[#755023]/30">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-semibold text-gray-100">Delivery Status</p>
                            <p className="text-sm text-gray-400">Go online to receive deliveries</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            deliveryStatus === 'available' 
                              ? 'bg-gradient-to-r from-[#755023]/20 to-[#E2CF7D]/10 text-[#E2CF7D] border border-[#755023]/30' 
                              : 'bg-[#202020] text-gray-400 border border-gray-700'
                          }`}>
                            {deliveryStatus === 'available' ? 'Online' : 'Offline'}
                          </div>
                        </div>
                        <button 
                          onClick={() => setDeliveryStatus(
                            deliveryStatus === 'available' ? 'offline' : 'available'
                          )}
                          className={`w-full py-3 rounded-lg font-medium transition-all hover:scale-105 ${
                            deliveryStatus === 'available'
                              ? 'bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 hover:shadow-lg'
                              : 'bg-[#202020] text-gray-100 border border-gray-700 hover:bg-[#202020]/80'
                          }`}
                        >
                          {deliveryStatus === 'available' ? 'Go Offline' : 'Go Online'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="bg-[#202020] border-t border-[#755023]/30 px-6 py-3 rounded-b-3xl">
                    <div className="flex items-center justify-between">
                      <button className="p-2 text-gray-400 hover:text-[#E2CF7D] transition-colors">
                        <Home className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#E2CF7D] transition-colors">
                        <Navigation className="w-5 h-5" />
                      </button>
                      <button className="text-[#E2CF7D]">
                        <div className="p-3 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-full -mt-8 shadow-lg">
                          <Camera className="w-5 h-5 text-gray-900" />
                        </div>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#E2CF7D] transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#E2CF7D] transition-colors">
                        <User className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Benefits */}
          <div className="space-y-12">
            {/* Key Features */}
            <div>
              <h3 className="text-3xl font-bold text-gray-100 mb-8">
                Everything Providers Need
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-[#202020] rounded-lg p-6 border border-[#755023]/30 hover:border-[#E2CF7D]/50 transition-colors group">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-[#755023] to-[#E2CF7D] mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-gray-900">{feature.icon}</div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commission Structure */}
            <div className="bg-gradient-to-br from-[#202020] to-[#151515] rounded-2xl p-8 border border-[#755023]/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-xl">
                  <DollarSign className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Transparent Commission</h3>
                  <p className="text-gray-400">Clear pricing with no hidden fees</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#151515] rounded-lg p-6 border border-[#755023]/30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-400">Base Commission Rate</p>
                      <p className="text-4xl font-bold text-[#E2CF7D]">5%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">Avg. Provider Earnings</p>
                      <p className="text-2xl font-bold text-[#E2CF7D]">$2,850/mo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: 'Food Delivery', rate: '5%', avgEarning: '$12.50/hr' },
                      { label: 'Pharmacy', rate: '5%', avgEarning: '$15.80/hr' },
                      { label: 'Packages', rate: '5%', avgEarning: '$14.20/hr' },
                      { label: 'Products', rate: '5%', avgEarning: '$18.50/hr' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 border-t border-[#755023]/20">
                        <span className="font-medium text-gray-100">{item.label}</span>
                        <div className="text-right">
                          <span className="font-semibold text-gray-100">{item.rate}</span>
                          <span className="text-sm text-gray-400 ml-2">• {item.avgEarning}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* App Download CTA */}
            <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-2xl p-8 border border-[#755023]/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Ready to Start Earning?</h3>
                  <p className="text-gray-400">Download the ALLOGO Provider App today</p>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#755023] to-[#E2CF7D] rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-gray-900" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#202020] rounded-lg border border-[#755023]/30">
                  <div>
                    <p className="font-medium text-gray-100">Card Verification Required</p>
                    <p className="text-sm text-gray-400">Unlock premium delivery opportunities</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-[#E2CF7D]" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-[#755023] to-[#E2CF7D] text-gray-900 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download for iOS</span>
                  </button>
                  <button className="flex-1 bg-[#202020] border border-[#755023] text-gray-100 py-4 rounded-lg font-semibold hover:bg-[#755023]/20 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download for Android</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#202020] p-4 rounded-lg border border-[#755023]/30 text-center">
                <div className="text-2xl font-bold text-[#E2CF7D] mb-1">15k+</div>
                <div className="text-sm text-gray-400">Active Providers</div>
              </div>
              <div className="bg-[#202020] p-4 rounded-lg border border-[#755023]/30 text-center">
                <div className="text-2xl font-bold text-[#E2CF7D] mb-1">4.8★</div>
                <div className="text-sm text-gray-400">Avg. Rating</div>
              </div>
              <div className="bg-[#202020] p-4 rounded-lg border border-[#755023]/30 text-center">
                <div className="text-2xl font-bold text-[#E2CF7D] mb-1">$5M+</div>
                <div className="text-sm text-gray-400">Paid to Providers</div>
              </div>
              <div className="bg-[#202020] p-4 rounded-lg border border-[#755023]/30 text-center">
                <div className="text-2xl font-bold text-[#E2CF7D] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderApp;