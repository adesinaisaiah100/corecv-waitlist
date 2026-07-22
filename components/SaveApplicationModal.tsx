"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send, Building2, Briefcase } from "lucide-react";
import { saveApplication } from "@/app/actions/save-application";
import { useResumeGenerationStore } from "@/app/stores/resumegeneration";

interface SaveApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export function SaveApplicationModal({ isOpen, onClose, onDownload }: SaveApplicationModalProps) {
  const [companyName, setCompanyName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { generatedResume, coverLetter } = useResumeGenerationStore();

  // Reset and pre-fill state when modal opens
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (isOpen && generatedResume) {
      setCompanyName("");
      setRoleTitle(generatedResume.tailored_resume.header.job_title || "");
      setIsSubmitting(false);
    }
  }, [isOpen, generatedResume]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSubmit = async () => {
    if (!companyName || !roleTitle || !generatedResume) return;
    
    setIsSubmitting(true);
    
    // Calculate a mock match score based on analysis if available
    const matchScore = generatedResume.tailoring_analysis?.matched_keywords?.length 
      ? Math.min(100, 60 + generatedResume.tailoring_analysis.matched_keywords.length * 5) 
      : 75;

    await saveApplication(
      companyName,
      roleTitle,
      generatedResume.generated_for, // The JD
      matchScore,
      generatedResume.tailored_resume,
      coverLetter
    );

    // Trigger download immediately after saving
    onDownload();
    onClose();
    setIsSubmitting(false);
  };

  const handleSkip = () => {
    onDownload();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-[#FAFAF9] border-[#D1D5DB]">
        <DialogHeader>
          <DialogTitle className="text-[#1E3A5F] text-center text-xl font-bold">
            Save to Application Tracker?
          </DialogTitle>
          <DialogDescription className="text-center text-[#1E3A5F]/70">
            Keep track of this job application in your command center.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1E3A5F] flex items-center gap-2">
              <Building2 size={16} className="text-[#10B981]" />
              Company Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-[#D1D5DB] bg-white text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 transition-all placeholder:text-gray-400"
              placeholder="e.g. Stripe, Google, Acme Corp"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1E3A5F] flex items-center gap-2">
              <Briefcase size={16} className="text-[#10B981]" />
              Role Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-[#D1D5DB] bg-white text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 transition-all placeholder:text-gray-400"
              placeholder="e.g. Senior Frontend Engineer"
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !companyName || !roleTitle}
              className={`w-full gap-2 text-white font-bold py-6 rounded-xl shadow-lg transform transition-all active:scale-95 ${
                !companyName || !roleTitle 
                  ? "bg-[#D1D5DB] cursor-not-allowed" 
                  : "bg-[#10B981] hover:bg-[#059669] shadow-[#10B981]/20"
              }`}
            >
              {isSubmitting ? "Saving..." : "Save & Download PDF"}
              {!isSubmitting && <Send size={18} />}
            </Button>
            
            <Button
              onClick={handleSkip}
              variant="ghost"
              className="w-full text-[#1E3A5F]/60 hover:text-[#1E3A5F] hover:bg-slate-200/50"
            >
              Skip and just download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
