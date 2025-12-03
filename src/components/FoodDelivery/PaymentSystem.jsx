// src/components/PaymentSystem.jsx
import React, { useState } from 'react';
import { 
  CreditCard, DollarSign, Smartphone, Shield, 
  Lock, QrCode, Wallet 
} from 'lucide-react';

const PaymentSystem = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <section id="payment" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Payment System</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple payment options with secure transaction processing and provider unlock system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customer Payment Options */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Payment</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { id: 'card', icon: <CreditCard />, title: 'Credit/Debit Card', desc: 'Secure online payments' },
                  { id: 'cash', icon: <DollarSign />, title: 'Cash on Delivery', desc: 'Pay when you receive' },
                  { id: 'wallet', icon: <Wallet />, title: 'Digital Wallet', desc: 'UPI, PayPal, etc.' },
                  { id: 'qr', icon: <QrCode />, title: 'QR Code', desc: 'Scan to pay instantly' }
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center space-x-4 ${
                      paymentMethod === method.id 
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      paymentMethod === method.id 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{method.title}</div>
                      <div className="text-sm text-gray-600">{method.desc}</div>
                    </div>
                    {paymentMethod === method.id && (
                      <div className="ml-auto w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">
                    All payments are encrypted and PCI-DSS compliant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Requirements */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Provider Requirements</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Card Verification Required</h4>
                      <p className="text-sm text-gray-600">For new delivery unlocks</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Delivery providers must have a verified payment card on file to unlock 
                    new delivery opportunities and receive priority assignments.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure Payouts</h4>
                      <p className="text-sm text-gray-600">Daily settlements</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Earnings are securely deposited to your verified account every 24 hours. 
                    No delays, no hidden fees.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Commission Summary</h4>
                    <div className="text-2xl font-bold">5%</div>
                  </div>
                  <ul className="space-y-2 text-indigo-100">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Transparent fee structure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>No subscription fees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Volume-based discounts available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSystem;