import React, { useState } from 'react';
import { SERVICES, SERVICE_SECTIONS } from './formConfig';
import { submitToGoogleSheet } from './submitToSheet';

// ─── Icons ───────────────────────────────────────────────────────────────────

const SERVICE_ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  rcs: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7V9h10v2zm-4 4H7v-2h6v2zm4-8H7V5h10v2z"/>
    </svg>
  ),
  dlt: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-5 11.5v-3H9v3l-4-4 4-4v3h6v-3l4 4-4 4z"/>
    </svg>
  ),
};

// ─── Field Renderer ───────────────────────────────────────────────────────────

const FieldInput = ({ field, value, onChange }) => {
  const base =
    'w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 ' +
    'focus:outline-none focus:ring-2 focus:ring-[#0D66BA]/40 focus:border-[#0D66BA] transition-all placeholder-slate-400';

  if (field.type === 'textarea')
    return (
      <textarea
        className={base + ' resize-none h-24'}
        placeholder={field.placeholder || 'Enter ' + field.label.toLowerCase()}
        value={value || ''}
        onChange={e => onChange(field.name, e.target.value)}
      />
    );

  if (field.type === 'select')
    return (
      <select className={base} value={value || ''} onChange={e => onChange(field.name, e.target.value)}>
        <option value="">Select...</option>
        {field.options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    );

  if (field.type === 'file')
    return (
      <div className="relative">
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          onChange={e => onChange(field.name, e.target.files[0])}
        />
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#0D66BA] hover:bg-blue-50/30 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" className="text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
          </svg>
          <span className="text-sm text-slate-500 font-medium">
            {value ? value.name : 'Click to upload file'}
          </span>
        </div>
      </div>
    );

  return (
    <input
      type={field.type}
      className={base}
      placeholder={field.placeholder || 'Enter ' + field.label.toLowerCase()}
      value={value || ''}
      onChange={e => onChange(field.name, e.target.value)}
    />
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const OnboardingForm = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep]         = useState(0);
  const [formData, setFormData]               = useState({});
  const [submitted, setSubmitted]             = useState(false);
  const [submitting, setSubmitting]           = useState(false);
  const [submitError, setSubmitError]         = useState('');

  const sections   = selectedService ? SERVICE_SECTIONS[selectedService] : [];
  const totalSteps = sections.length;
  const isLastStep = currentStep === totalSteps - 1;
  const progress   = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;
  const svc        = SERVICES.find(s => s.id === selectedService);

  const handleFieldChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleNext = () => { if (currentStep < totalSteps - 1) setCurrentStep(s => s + 1); };
  const handleBack = () => { if (currentStep > 0) setCurrentStep(s => s - 1); };

  const handleServiceSelect = id => {
    setSelectedService(id);
    setCurrentStep(0);
    setFormData({});
    setSubmitted(false);
    setSubmitError('');
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError('');
    const result = await submitToGoogleSheet(selectedService, formData);
    setSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError('Submission failed: ' + result.error + '. Please try again or contact support.');
    }
  };

  const resetAll = () => {
    setSelectedService(null);
    setSubmitted(false);
    setFormData({});
    setCurrentStep(0);
    setSubmitError('');
  };

  // ── Success screen
  if (submitted)
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" width="36" height="36">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Request Submitted!</h2>
          <p className="text-slate-500 font-medium mb-2">
            Your <span className="text-[#0D66BA] font-bold">{svc?.label}</span> onboarding request has been received.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Our team will contact you within 24 hours on your registered mobile number.
          </p>
          <button onClick={resetAll} className="w-full bg-[#0D66BA] text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition-all">
            Submit Another Request
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0D66BA]/10 text-[#0D66BA] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            DIGIDONAR Onboarding
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Service Activation Form</h1>
          <p className="text-slate-500 font-medium">Fill in your details to get started with your selected service.</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-400 font-medium">
            <span>📞 90909-20202</span>
            <span>🌐 www.digidonar.com</span>
          </div>
        </div>

        {/* Service Selector */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {SERVICES.map(s => (
            <button
              key={s.id}
              onClick={() => handleServiceSelect(s.id)}
              className={
                'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all font-bold text-xs text-center ' +
                (selectedService === s.id
                  ? 'border-[#0D66BA] bg-[#0D66BA]/5 text-[#0D66BA]'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300')
              }
            >
              <span style={{ color: selectedService === s.id ? s.color : '#94a3b8' }}>
                {SERVICE_ICONS[s.id]}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Form Card */}
        {selectedService && (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">

            {/* Progress Bar */}
            <div className="h-1.5 bg-slate-100">
              <div className="h-full bg-[#0D66BA] transition-all duration-500 rounded-full" style={{ width: progress + '%' }} />
            </div>

            {/* Step Header */}
            <div className="px-8 pt-6 pb-2 flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Step {currentStep + 1} of {totalSteps}
                </span>
                <h2 className="text-xl font-black text-slate-900 mt-0.5">{sections[currentStep]?.section}</h2>
                <p className="text-sm text-slate-400 font-medium mt-0.5">{sections[currentStep]?.desc}</p>
              </div>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: svc?.bg, color: svc?.color }}
              >
                {SERVICE_ICONS[selectedService]}
              </div>
            </div>

            {/* Fields */}
            <div className="px-8 pt-4 pb-6 space-y-5">
              {sections[currentStep]?.fields.map(field => (
                <div key={field.name}>
                  <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-1.5">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <FieldInput field={field} value={formData[field.name]} onChange={handleFieldChange} />
                </div>
              ))}

              {/* Error message */}
              {isLastStep && submitError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-3 rounded-xl">
                  {submitError}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="px-8 pb-8 flex items-center justify-between gap-4 border-t border-slate-50 pt-6">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Back
              </button>

              {/* Step dots */}
              <div className="flex gap-1.5">
                {sections.map((_, i) => (
                  <div
                    key={i}
                    className={
                      'h-1.5 rounded-full transition-all ' +
                      (i === currentStep ? 'w-6 bg-[#0D66BA]' : i < currentStep ? 'w-3 bg-[#0D66BA]/40' : 'w-3 bg-slate-200')
                    }
                  />
                ))}
              </div>

              {isLastStep ? (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-8 py-3 rounded-xl bg-[#0D66BA] text-white text-sm font-bold hover:bg-slate-900 transition-all shadow-lg disabled:opacity-60 flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3"/>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit Request'}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 rounded-xl bg-[#0D66BA] text-white text-sm font-bold hover:bg-slate-900 transition-all shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}

        {!selectedService && (
          <div className="text-center text-slate-400 font-medium mt-4 text-sm">
            Select a service above to begin your onboarding.
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingForm;