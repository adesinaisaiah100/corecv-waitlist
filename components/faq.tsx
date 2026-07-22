import React from "react";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is this just ChatGPT with a nice interface?",
      answer: "No — and this is the most important difference. ChatGPT generates content from its training data and your prompt. CoreCV generates content exclusively from the structured career data you put into your vault. Nothing is invented. If a metric is in your output, it is because you put it in your vault first. That is the difference between sounding good and being defensible in an interview."
    },
    {
      question: "What is the Master Vault, exactly?",
      answer: "Your vault is a structured, private database of your career history. Experiences, projects, education, certifications, skills, achievements — all stored as structured data, not as a PDF or a static document. Every output CoreCV generates — resumes, cover letters, STAR stories, content — is generated from this data. The more complete your vault, the better every output."
    },
    {
      question: "Do I have to redo this for every job application?",
      answer: "No. That is the point. You build your vault once. When you apply for a role, you paste the job description. CoreCV restructures your existing vault data to match that role. You do not rewrite anything. You approve, adjust if needed, download."
    },
    {
      question: "I am not a TikTok person. Is the content stuff still useful for me?",
      answer: "Yes. The content engine generates for LinkedIn, Instagram, and Twitter/X as well. If you never post on TikTok, you still get LinkedIn posts, Instagram carousels, and a content calendar built from your career data. Post on the platforms you use. The vault powers all of them."
    },
    {
      question: "Is my career data safe and private?",
      answer: "Your vault data is stored securely with row-level security — meaning only you can access your data. We do not sell your information, share it with employers, or use it to train AI models. Your career history is yours."
    },
    {
      question: "Can CoreCV guarantee I will get a job?",
      answer: "No. And we will not pretend otherwise — that would be dishonest. What we can say: a better-tailored resume gets more responses. Vault-grounded STAR stories land better in interviews. A consistent content presence generates inbound recruiter interest. CoreCV gives you a measurable edge. What you do with it is up to you."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Questions people actually ask
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300 shrink-0">
                  <ChevronDown size={24} />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed pt-0 border-t border-transparent group-open:border-gray-100 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
