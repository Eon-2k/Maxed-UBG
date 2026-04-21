import { motion } from "motion/react";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [copied, setCopied] = useState(false);
  const email = "shox_tx@proton.me";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bento-card p-12 text-center relative overflow-hidden"
      >
        <div className="bg-brand/10 w-20 h-20 rounded-full flex items-center justify-center text-brand mx-auto mb-8 border border-brand/20">
          <Mail size={40} />
        </div>
        
        <h1 className="font-display text-4xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-text-dim mb-10 max-w-sm mx-auto">
          Have a question, feedback, or want to report a broken link? Reach out directly via the email below.
        </p>

        <div className="group relative">
          <div className="bg-black/40 border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-brand/50 transition-colors">
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand/60 block mb-1">Direct Support</span>
              <span className="text-xl font-mono text-white font-bold">{email}</span>
            </div>
            
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-5 py-3 bg-brand text-bg rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all w-full md:w-auto justify-center"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-12 text-xs text-text-dim font-bold uppercase tracking-widest">
            Average Response Time: 24-48 Hours
        </div>

        <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand/5 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};

export default ContactUs;
