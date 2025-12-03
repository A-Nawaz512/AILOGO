// src/components/ProviderApp.jsx
import React, { useState, useEffect } from 'react';
import {
  Smartphone, Shield, CreditCard, Zap, Bell,
  Navigation, Package, Clock, DollarSign, Star,
  MapPin, CheckCircle, Lock, Battery, Wifi, Signal,
  ChevronRight, Settings, Camera, MessageSquare, Home, User, Download, Menu, X
} from 'lucide-react';

const COLORS = {
  primary: '#755023',
  secondary: '#E2CF7D',
  bg: '#202020',
  border: '#755023',
  text: '#E2CF7D',
};

// ===== Reusable Components =====

const TabButton = ({ active, icon, title, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-3 rounded-md flex flex-col items-center justify-center transition-all ${
      active ? `bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-gray-900` : 'text-gray-400 hover:text-gray-300'
    }`}
  >
    <div className={`mb-1 ${active ? 'text-gray-900' : 'text-gray-400'}`}>{icon}</div>
    <span className="text-xs font-medium">{title}</span>
  </button>
);

const StatsCard = ({ title, value, icon, sub }) => (
  <div className={`bg-gradient-to-r from-[${COLORS.primary}]/10 to-[${COLORS.secondary}]/10 rounded-lg p-4 border border-[${COLORS.primary}]/20`}>
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-xs font-medium text-[${COLORS.secondary}]`}>{title}</p>
        <p className="text-xl font-bold text-gray-100">{value}</p>
      </div>
      <div className={`w-8 h-8 text-[${COLORS.secondary}] opacity-80`}>{icon}</div>
    </div>
    {sub && <div className={`mt-2 text-xs text-[${COLORS.secondary}]/80`}>{sub}</div>}
  </div>
);

const DeliveryCard = ({ delivery }) => (
  <div className={`bg-[${COLORS.bg}] rounded-lg p-4 border border-[${COLORS.primary}]/30 hover:border-[${COLORS.secondary}]/50 transition-colors`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] rounded-lg flex items-center justify-center`}>
          <Package className="w-5 h-5 text-gray-900" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-gray-100">{delivery.type} Delivery</h4>
            {delivery.priority && (
              <span className={`px-2 py-0.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-gray-900 text-xs rounded-full font-medium`}>Priority</span>
            )}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center space-x-1"><Navigation className="w-3 h-3" />{delivery.distance}</span>
            <span className="flex items-center space-x-1"><MapPin className="w-3 h-3" />{delivery.zone}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-gray-100">{delivery.price}</div>
        <div className={`text-xs text-[${COLORS.secondary}]`}>+5% commission</div>
        <button className={`mt-2 px-4 py-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-all hover:scale-105`}>Accept</button>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className={`bg-[${COLORS.bg}] rounded-lg p-6 border border-[${COLORS.primary}]/30 hover:border-[${COLORS.secondary}]/50 transition-colors group`}>
    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-gray-100 mb-2">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </div>
);

// ===== Main App =====

const ProviderApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newDeliveries, setNewDeliveries] = useState(12);
  const [earningsToday, setEarningsToday] = useState(245.5);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDeliveries(prev => Math.max(5, Math.min(prev + Math.floor(Math.random() * 3 - 1), 20)));
      setEarningsToday(prev => parseFloat((prev + Math.random() * 15).toFixed(2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const appScreens = {
    dashboard: {
      title: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <StatsCard title="Today's Earnings" value={`$${earningsToday.toFixed(2)}`} icon={<DollarSign />} sub={`+${(earningsToday*0.05).toFixed(2)} commission`} />
            <StatsCard title="Available" value={newDeliveries} icon={<Package />} sub="New deliveries in your zone" />
            <StatsCard title="Rating" value="4.92" icon={<Star />} sub="98% satisfaction" />
            <StatsCard title="Online Time" value="5h 42m" icon={<Clock />} sub="Active today" />
          </div>
          <div className={`bg-[${COLORS.bg}] rounded-lg p-4 border border-[${COLORS.primary}]/30`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-100">Active Delivery</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">In Progress</span>
              </div>
            </div>
            <DeliveryCard delivery={{ type: 'Food', distance: '2.3 km', price: '$8.50', zone: 'Within City', priority: true }} />
          </div>
        </div>
      )
    },
    deliveries: {
      title: 'Deliveries',
      icon: <Package className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className={`bg-gradient-to-r from-[${COLORS.primary}]/20 to-[${COLORS.secondary}]/10 rounded-lg p-4 border border-[${COLORS.primary}]/30 flex justify-between items-center`}>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-gray-900" />
              <div>
                <h4 className="font-semibold text-gray-100">Card Verification Required</h4>
                <p className="text-sm text-gray-400">Unlock new delivery opportunities</p>
              </div>
            </div>
            <button className={`px-4 py-2 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-gray-900 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105`}>Verify Now</button>
          </div>
          {[{id:1,type:'Food',distance:'1.2 km',price:'$8.50',zone:'Within City',priority:true},{id:2,type:'Pharmacy',distance:'3.5 km',price:'$12.00',zone:'Between Cities',priority:false}].map(delivery => <DeliveryCard key={delivery.id} delivery={delivery} />)}
        </div>
      )
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/ailogo.png" alt="Logo" className="h-10 w-auto bg-black/20 shadow-sm shadow-[${COLORS.primary}] rounded-lg" />
          <span className="text-xl font-bold text-[${COLORS.secondary}]">Provider App</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-100 hover:text-[${COLORS.secondary}]">
          {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[${COLORS.bg}] rounded-lg border border-[${COLORS.primary}]/30 p-4">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Object.entries(appScreens).map(([key, screen]) => (
              <button key={key} onClick={() => {setActiveTab(key); setMobileMenuOpen(false)}} className={`flex flex-col items-center p-3 rounded-lg ${activeTab===key?'bg-gradient-to-r from-[${COLORS.primary}]/20 to-[${COLORS.secondary}]/10 border border-[${COLORS.primary}]/30':'hover:bg-[${COLORS.primary}]/10'}`}>
                <div className={`mb-1 ${activeTab===key?'text-[${COLORS.secondary}]':'text-gray-400'}`}>{screen.icon}</div>
                <span className="text-xs font-medium">{screen.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* App Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#151515] rounded-[40px] p-4 shadow-2xl border-4 border-[${COLORS.primary}] h-[580px] overflow-y-auto">
            {/* Tabs */}
            <div className="flex items-center justify-between bg-[${COLORS.bg}] rounded-lg p-1 border border-[${COLORS.primary}]/30 mb-4">
              {Object.entries(appScreens).map(([key, screen]) => <TabButton key={key} active={activeTab===key} icon={screen.icon} title={screen.title} onClick={()=>setActiveTab(key)} />)}
            </div>
            {appScreens[activeTab].content}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-[#86632C] mb-8">Everything Providers Need</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {icon:<Shield className="w-6 h-6"/>,title:'Secure Payments',description:'Protected transactions with 5% flat commission'},
                {icon:<Navigation className="w-6 h-6"/>,title:'Smart Routing',description:'AI-powered routes for maximum efficiency'},
                {icon:<Bell className="w-6 h-6"/>,title:'Real-time Alerts',description:'Instant notifications for new deliveries'},
                {icon:<Zap className="w-6 h-6"/>,title:'Quick Unlock',description:'Card verification for premium deliveries'}
              ].map((f,i)=> <FeatureCard key={i} {...f} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderApp;
