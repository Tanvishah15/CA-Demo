import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Calendar, MessageCircle } from 'lucide-react';
import Button from './Button';

const schema = z.object({
  businessType: z.string().min(1, 'Please select a business type'),
  industry: z.string().min(1, 'Please select an industry'),
  service: z.string().min(1, 'Please select a service'),
  businessSize: z.string().min(1, 'Please select business size'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  company: z.string().optional(),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const STEPS = [
  { key: 'businessType', title: 'Business Type', options: ['Startup', 'SME', 'Enterprise', 'Individual / HNI', 'NRI'] },
  { key: 'industry', title: 'Industry', options: ['Technology', 'E-commerce', 'Manufacturing', 'Healthcare', 'Real Estate', 'Export', 'Other'] },
  { key: 'service', title: 'Service Required', options: ['GST Services', 'Income Tax', 'Company Incorporation', 'ROC Compliance', 'Trademark & IP', 'Startup Advisory', 'Legal Documentation', 'Other'] },
  { key: 'businessSize', title: 'Business Size', options: ['Pre-revenue', 'Under ₹1 Cr', '₹1-10 Cr', '₹10-50 Cr', '₹50 Cr+'] },
];

const TIME_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

interface ConsultationFormProps {
  compact?: boolean;
}

export default function ConsultationForm({ compact = false }: ConsultationFormProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const currentValue = watch();

  const onSubmit = () => {
    setSubmitted(true);
  };

  const selectOption = (field: keyof FormData, value: string) => {
    setValue(field, value, { shouldValidate: true });
    if (step < 3) setTimeout(() => setStep(step + 1), 300);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-navy mb-2">Consultation Booked!</h3>
        <p className="text-charcoal mb-6">
          We've sent confirmation to your email and WhatsApp. Our team will reach out shortly.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-charcoal">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gold" /> Email sent</span>
          <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4 text-gold" /> WhatsApp sent</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={compact ? '' : 'bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8'}>
      {!compact && (
        <div className="mb-8">
          <h3 className="text-2xl font-display font-bold text-navy mb-2">Schedule Your Free Consultation</h3>
          <p className="text-charcoal">Tell us about your business and we'll match you with the right advisor.</p>
        </div>
      )}

      <div className="flex items-center gap-2 mb-8">
        {[...STEPS, { key: 'contact', title: 'Contact' }, { key: 'schedule', title: 'Schedule' }].map((s, i) => (
          <div key={s.key} className="flex items-center gap-2 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
              i <= step ? 'bg-gold text-navy' : 'bg-gray-200 text-gray-500'
            }`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < 5 && <div className={`h-0.5 flex-1 ${i < step ? 'bg-gold' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step < 4 && (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-lg font-semibold text-navy mb-4">{STEPS[step].title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STEPS[step].options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => selectOption(STEPS[step].key as keyof FormData, opt)}
                    className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      currentValue[STEPS[step].key as keyof FormData] === opt
                        ? 'border-gold bg-gold/5 text-navy'
                        : 'border-gray-200 hover:border-gold/50 text-charcoal'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors[STEPS[step].key as keyof FormData] && (
                <p className="text-red-500 text-sm mt-2">{errors[STEPS[step].key as keyof FormData]?.message}</p>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h4 className="text-lg font-semibold text-navy mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Full Name *</label>
                  <input {...register('name')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Company</label>
                  <input {...register('company')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Email *</label>
                  <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Phone *</label>
                  <input {...register('phone')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="schedule" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h4 className="text-lg font-semibold text-navy mb-4">Schedule Consultation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Preferred Date *</label>
                  <input {...register('preferredDate')} type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none" />
                  {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Preferred Time *</label>
                  <select {...register('preferredTime')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none">
                    <option value="">Select time</option>
                    {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Additional Message</label>
                <textarea {...register('message')} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          {step > 0 && (
            <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
              <ChevronLeft className="w-4 h-4" /> Back
            </Button>
          )}
          <div className="ml-auto">
            {step < 5 ? (
              <Button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={step < 4 && !currentValue[STEPS[step]?.key as keyof FormData]}
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button type="submit" size="lg">
                Book Consultation <Calendar className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
