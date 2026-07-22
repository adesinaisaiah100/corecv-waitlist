'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface UpgradeButtonProps {
  productId: string;
  buttonText: string;
  className?: string;
}

export default function UpgradeButton({ productId, buttonText, className }: UpgradeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          productId,
          // If they cancel or succeed, return them to exactly where they were
          returnUrl: pathname 
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Dodo Checkout
        window.location.href = data.url;
      } else {
        console.error('Checkout failed:', data.error);
        alert('Could not initiate checkout. Please try again or log in.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Network error during checkout', error);
      alert('Network error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group ${className || ''}`}
    >
      {/* Background shine effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
      
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Redirecting...</span>
        </>
      ) : (
        <span>{buttonText}</span>
      )}
    </button>
  );
}
