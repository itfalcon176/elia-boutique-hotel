import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Mail, User, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "itfalcon_176_gmail";
const TEMPLATE_ID = "template_y5ui8k8";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "XE3dav_hl8LOo-0kt";

export default function EnquiryModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      to_email: 'info@eliaphuket.com',
      reply_to: email.trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('success');
      setName('');
      setEmail('');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || err?.message || 'Unable to send your enquiry right now. Please try again or reach out to info@eliaphuket.com'
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#0d0d10]/95 border border-gold/30 rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.15)] text-white z-10 overflow-hidden"
          >
            {/* Ambient gold glow highlight inside modal */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/60 hover:text-gold hover:rotate-90 transition-all duration-300 p-2 rounded-full hover:bg-white/5 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {status === 'success' ? (
              /* Success State */
              <div className="text-center py-6 sm:py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-5 border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <CheckCircle2 size={32} />
                </motion.div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-gold mb-2 tracking-wide">
                  Enquiry Received
                </h3>

                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed max-w-xs mx-auto mb-6">
                  Thank you for reaching out. Our concierge team will connect with you shortly at{' '}
                  <span className="text-gold font-medium">info@eliaphuket.com</span>.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-7 py-2.5 rounded-full bg-gold/20 hover:bg-gold text-gold hover:text-black border border-gold/50 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Form State */
              <div>
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/90 font-medium block mb-1">
                    Elia Boutique Hotel
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide">
                    Enquire Now
                  </h3>
                  <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3 mb-2" />
                  <p className="text-[11px] sm:text-xs text-white/60 font-light">
                    Be among the first to experience Elia Phuket. Send us your details below.
                  </p>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-400" />
                    <div className="flex-1">
                      <p>{errorMessage}</p>
                      <a
                        href="mailto:info@eliaphuket.com"
                        className="underline text-gold hover:text-white mt-1 inline-block text-[11px]"
                      >
                        Click here to email info@eliaphuket.com directly
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium block mb-1.5 text-left">
                      Your Name
                    </label>
                    <div className="relative flex items-center">
                      <User size={16} className="absolute left-3.5 text-gold/70 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-gold/30 hover:border-gold/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 text-white placeholder-white/30 text-xs sm:text-sm transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium block mb-1.5 text-left">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <Mail size={16} className="absolute left-3.5 text-gold/70 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-gold/30 hover:border-gold/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 text-white placeholder-white/30 text-xs sm:text-sm transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Info Notice */}
                  <p className="text-[10px] text-white/50 text-left pt-1">
                    Enquiries will be directed to <span className="text-gold/80">info@eliaphuket.com</span>
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-gold/90 via-gold to-gold/90 hover:from-gold hover:to-gold text-black font-semibold text-[11px] sm:text-xs uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-black" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} className="text-black" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
