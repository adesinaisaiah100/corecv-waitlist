"use client";

import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, Send } from "lucide-react";
import gsap from "gsap";
import { submitFeedback } from "@/app/actions/submit-feedback";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export function FeedbackModal({ isOpen, onClose, onDownload }: FeedbackModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const starsRef = useRef<(SVGSVGElement | null)[]>([]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      // Wrap in timeout to prevent synchronous state update cascading error
      const timer = setTimeout(() => {
        setRating(0);
        setMessage("");
        setIsSubmitting(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Micro-animation for stars
  const animateStar = (index: number) => {
    if (starsRef.current[index]) {
      gsap.fromTo(
        starsRef.current[index],
        { scale: 1.2, rotate: 15 },
        { scale: 1, rotate: 0, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  };

  const handleRating = (value: number) => {
    setRating(value);
    animateStar(value - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Submit feedback in background (don't block the user too long if possible, 
    // but here we wait to ensure it's logged)
    if (rating > 0) {
        await submitFeedback(rating, message);
    }

    // Trigger download immediately after
    onDownload();
    onClose();
    setIsSubmitting(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-[#FAFAF9] border-[#D1D5DB]">
        <DialogHeader>
          <DialogTitle className="text-[#1E3A5F] text-center text-xl font-bold">
            How was your experience?
          </DialogTitle>
          <DialogDescription className="text-center text-[#1E3A5F]/70">
            Rate your experience building your resume.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          {/* Star Rating */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                ref={(el) => { starsRef.current[star - 1] = el; }} // Correctly assigning void return to void
                size={32}
                className={`cursor-pointer transition-colors duration-200 ${
                  star <= (hoverRating || rating)
                    ? "fill-[#FFD700] text-[#FFD700]" // Gold for active
                    : "fill-transparent text-[#D1D5DB]" // Mist Gray for inactive
                }`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRating(star)}
              />
            ))}
          </div>

          {/* Feedback Textarea */}
          <div className="w-full relative">
            <textarea
              className="w-full h-32 p-3 rounded-lg border border-[#D1D5DB] bg-white text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 resize-none transition-all placeholder:text-gray-400"
              placeholder="Tell us what you liked or how we can improve..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === 0}
            className={`w-full gap-2 text-white font-bold py-6 rounded-xl shadow-lg transform transition-all active:scale-95 ${
              rating === 0 
                ? "bg-[#D1D5DB] cursor-not-allowed" 
                : "bg-[#10B981] hover:bg-[#059669] shadow-[#10B981]/20"
            }`}
          >
            {isSubmitting ? (
              "Processing..."
            ) : (
              <>
                Submit Feedback
                <Send size={18} />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
