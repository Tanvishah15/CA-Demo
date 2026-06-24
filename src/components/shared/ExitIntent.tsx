import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import Button from './Button';

interface ExitIntentProps {
  show: boolean;
  onDismiss: () => void;
}

export default function ExitIntent({ show, onDismiss }: ExitIntentProps) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(onDismiss, 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onDismiss}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button onClick={onDismiss} className="absolute top-4 right-4 text-gray-400 hover:text-navy cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-7 h-7 text-gold" />
            </div>
            {done ? (
              <p className="text-lg font-semibold text-navy">Thank you! Check your email for the free consultation offer.</p>
            ) : (
              <>
                <h3 className="text-2xl font-display font-bold text-navy mb-2">Wait! Before You Go...</h3>
                <p className="text-charcoal mb-6">
                  Get a <strong>free 30-minute consultation</strong> with our senior advisors. Limited slots available this week.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                  />
                  <Button type="submit" className="w-full">Claim Free Consultation</Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
