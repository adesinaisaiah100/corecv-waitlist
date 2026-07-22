'use client';

import { useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import UpgradeButton from './UpgradeButton';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function UpgradeModal({ isOpen, onClose, title, description }: UpgradeModalProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'sprint'>('monthly');

  if (!isOpen) return null;

  // These should be configured in your .env.local file after creating them in the Dodo Dashboard
  const monthlyProductId = process.env.NEXT_PUBLIC_DODO_PRO_MONTHLY_ID || '';
  const sprintProductId = process.env.NEXT_PUBLIC_DODO_PRO_SPRINT_ID || '';

  const activeProductId = billingCycle === 'monthly' ? monthlyProductId : sprintProductId;

  const features = [
    'Unlimited Resume Tailoring',
    'Unlimited Cover Letters',
    'Full STAR Stories Vault',
    'No Watermarks on PDFs',
    'Full ATS Score Breakdown',
    'Smart Post Generator (All Platforms)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Graphic */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <Sparkles className="w-12 h-12 text-blue-200 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-blue-100 text-sm max-w-sm mx-auto">{description}</p>
        </div>

        {/* Pricing Toggle */}
        <div className="p-6 pb-2">
          <div className="flex bg-gray-100 p-1 rounded-xl w-full max-w-xs mx-auto mb-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('sprint')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                billingCycle === 'sprint' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sprint (3-Mos)
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                {billingCycle === 'monthly' ? '$9' : '$19'}
              </span>
              <span className="text-gray-500 font-medium">
                {billingCycle === 'monthly' ? '/month' : '/3-months'}
              </span>
            </div>
            <p className="text-xs text-blue-600 font-medium mt-2 bg-blue-50 py-1 px-3 rounded-full inline-block">
              Price automatically adjusted to your local currency
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="px-8 pb-6">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / CTA */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
          <UpgradeButton 
            productId={activeProductId} 
            buttonText={billingCycle === 'monthly' ? "Upgrade to Pro" : "Get 3-Month Sprint"}
            className="w-full shadow-lg shadow-blue-200"
          />
          <button 
            onClick={onClose}
            className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors py-2"
          >
            Cancel and stay on Free
          </button>
        </div>

      </div>
    </div>
  );
}
