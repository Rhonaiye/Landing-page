'use client'
import React, { useState } from 'react';
import { Check } from 'lucide-react';


const Payplan = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const prices = {
    monthly: {
      amount: 5000,
      savings: 0
    },
    quarterly: {
      amount: 13500, // 4500 per month (10% discount)
      savings: 1500
    },
    annually: {
      amount: 48000, // 4000 per month (20% discount)
      savings: 12000
    }
  };

  const getBillingText = () => {
    switch (billingCycle) {
      case 'quarterly':
        return 'every 3 months';
      case 'annually':
        return 'per year';
      default:
        return 'per month';
    }
  };

  const getMonthlyEquivalent = () => {
    switch (billingCycle) {
      case 'quarterly':
        return '₦4,500/mo';
      case 'annually':
        return '₦4,000/mo';
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl relative mx-auto px-4 py-24 text-center max-sm:mb-6">

      {/* Hidden Results Notice */}
      <div className="absolute -top-6 max-sm:-top-10 flex left-1/2 transform -translate-x-1/2 max-sm:px-1  px-8 py-3   bg-white  rounded-md border ">
        <p className="text-gray-700 text-center">
          2,421 search results are hidden 🤔
        </p>
      </div>

      {/* Upgrade Header */}
      <h2 className="text-3xl font-bold mb-2">
        Upgrade to <span className="text-purple-600">Pro Plan</span> to
      </h2>
      <p className="text-3xl font-bold mb-8">access all result</p>

      {/* Billing Toggle */}
      <div className="flex justify-center gap-4 mb-12 ">
        <button 
          className={`px-4 py-2 rounded-lg border transition-all ${
            billingCycle === 'monthly' 
              ? 'text-purple-600 bg-purple-50 border-purple-100' 
              : 'text-gray-600 hover:bg-gray-50 border-transparent'
          }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Pay monthly
        </button>
        <button 
          className={`px-4 py-2 rounded-lg border transition-all ${
            billingCycle === 'quarterly' 
              ? 'text-purple-600 bg-purple-50 border-purple-100' 
              : 'text-gray-600 hover:bg-gray-50 border-transparent'
          }`}
          onClick={() => setBillingCycle('quarterly')}
        >
          Pay Quarterly
        </button>
        <button 
          className={`px-4 py-2 rounded-lg border transition-all ${
            billingCycle === 'annually' 
              ? 'text-purple-600 bg-purple-50 border-purple-100' 
              : 'text-gray-600 hover:bg-gray-50 border-transparent'
          }`}
          onClick={() => setBillingCycle('annually')}
        >
          Pay Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

        {/* Free Plan */}
        <div className="bg-gray-50 rounded-2xl p-6 pt-16 text-left">
          <h3 className="font-medium mb-4">Free plan</h3>
          <div className="flex items-baseline mb-2">
            <span className="text-2xl font-bold">₦0</span>
            <span className="text-gray-600 ml-1">{getBillingText()}</span>
          </div>
          <p className="text-gray-600 mb-6">
            For anyone who wants to try making their first demos.
          </p>

          <div className="mb-6">
            <h4 className="font-medium mb-3">FEATURES</h4>
            <ul className="space-y-3">
              {[
                'Limited search result',
                'Limited access to Job posts',
                'Limited access to UI Components',
                'Limited access to Inspiration library',
                'Limited access to Design Knowledge'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 mr-2 text-gray-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 bg-gray-200 text-gray-700 rounded-full font-medium">
            Current plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-2xl p-6 pt-16 text-left border border-[#9333EA] relative">
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
              Popular
            </span>
          </div>

          <h3 className="font-medium mb-4">Pro Plan</h3>
          <div className="flex flex-col mb-2">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">₦{prices[billingCycle].amount.toLocaleString()}</span>
              <span className="text-gray-600 ml-1">{getBillingText()}</span>
            </div>
            {getMonthlyEquivalent() && (
              <div className="flex items-center mt-1 text-sm">
                <span className="text-green-600 font-medium">{getMonthlyEquivalent()}</span>
                {prices[billingCycle].savings > 0 && (
                  <span className="ml-2 text-green-600">
                    (Save ₦{prices[billingCycle].savings.toLocaleString()})
                  </span>
                )}
              </div>
            )}
          </div>
          <p className="text-gray-600 mb-6">
            Find unlimited inspirations, UI components, Jobs, Design Knowledge
          </p>

          <div className="mb-6">
            <h4 className="font-medium mb-3">FEATURES</h4>
            <ul className="space-y-3">
              {[
                'Unlimited search result',
                'Full access to Job posts',
                'Full access to UI Components',
                'Full access to Inspiration library',
                'Full access to Design Knowledge'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 mr-2 text-purple-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payplan;