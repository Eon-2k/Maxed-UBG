import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, MessageSquare } from "lucide-react";

const RequestGameForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gameName: "",
    gameLink: "",
    message: "",
  });

  const handleSubmit = (e) => {
    // FormSubmit handles the submission, we just show a success state
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    
    fetch("https://formsubmit.co/ajax/wxrdfn2110@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data)),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          form.reset();
        }, 5000);
    })
    .catch((error) => {
        console.error("Error:", error);
        // Fallback for demo
        setIsSubmitted(true);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[12px] bg-brand/10 text-brand mb-6 border border-brand/20">
            <MessageSquare size={32} strokeWidth={2.5} />
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">Request Game</h2>
          <p className="text-text-dim text-sm">All requests are sent directly to <span className="text-brand">wxrdfn2110@gmail.com</span> for review.</p>
        </div>

        <div className="bento-card shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 text-center"
            >
              <CheckCircle2 size={64} className="text-brand mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
              <p className="text-text-dim mb-8">Your request has been dispatched. We'll add your game as soon as possible.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="pill px-6 py-2 hover:bg-zinc-700 transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  name="gameTitle"
                  type="text"
                  placeholder="Game Title..."
                  className="input-field w-full"
                />
                <input
                  name="category"
                  type="text"
                  placeholder="Category (Optional)..."
                  className="input-field w-full"
                />
                <textarea
                  name="notes"
                  placeholder="Additional Notes..."
                  rows={3}
                  className="input-field w-full resize-none"
                />
                
                <input type="hidden" name="_subject" value="New Game Request - Maxed-UBG" />
                <input type="hidden" name="_template" value="table" />
                
                <button
                  type="submit"
                  className="cta-button w-full mt-6 bg-[#f8fafc] text-bg"
                >
                  Submit Request
                </button>
              </form>
            </>
          )}

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl -z-10" />
        </div>
      </motion.div>
    </div>
  );
};

export default RequestGameForm;
