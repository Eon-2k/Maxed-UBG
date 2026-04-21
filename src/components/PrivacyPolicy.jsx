import { motion } from "motion/react";
import { ShieldAlert } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card p-8 md:p-12 border-border/50"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-brand/10 p-3 rounded-xl text-brand">
            <ShieldAlert size={32} />
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy & Disclaimer</h1>
        </div>

        <div className="space-y-6 text-text-dim leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3 underline decoration-brand/30">User Responsibility</h2>
            <p>
              By using Maxed-UBG, you acknowledge and agree that your use of this website is at your own sole risk. 
              The creators and administrators of Maxed-UBG are not responsible for any repercussions, consequences, 
              disciplinary actions, or legal issues that may arise from your use of this site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3 underline decoration-brand/30">Usage Restrictions</h2>
            <p>
              This site is intended for entertainment purposes only. You are solely responsible for ensuring that your 
              access to and use of this site complies with all local laws, school policies, and workplace regulations 
              that may apply to you. If you are using this site in an environment where such use is restricted or 
              prohibited (e.g., during class, at work), you accept full responsibility for any disciplinary measures 
              taken against you.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3 underline decoration-brand/30">No Warranty</h2>
            <p>
              The content provided on this site is "as is" and without warranties of any kind. We do not guarantee 
              uninterrupted access or that the games provided will function perfectly in all environments.
            </p>
          </section>

          <div className="mt-12 p-4 bg-brand/5 border border-brand/20 rounded-lg">
            <p className="text-sm font-bold text-brand uppercase tracking-widest text-center">
              Safe Browsing • Access at your own risk
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
