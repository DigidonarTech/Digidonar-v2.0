import React, { useEffect, useRef, useState } from 'react';
import api, { API_URL } from '../../api';
import { SERVICES, SERVICE_SECTIONS } from './formConfig';
import { submitToGoogleSheet } from './submitToSheet';

const SERVICE_ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  rcs: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7V9h10v2zm-4 4H7v-2h6v2zm4-8H7V5h10v2z" />
    </svg>
  ),
  dlt: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-5 11.5v-3H9v3l-4-4 4-4v3h6v-3l4 4-4 4z" />
    </svg>
  ),
};

const SAMPLE_DOCUMENTS = {
  rcs: [
    { key: 'rcs-sample-business-proof', label: 'RCS Sample Business Proof' },
    { key: 'rcs-consent-letter', label: 'RCS Website Pages Sample' },
    { key: 'rcs-brand-information-sample', label: 'RCS Brand Information Sample' },
  ],
  dlt: [
    { key: 'dlt-entity-registration', label: 'DLT Entity Registration LOA Sample' },
    { key: 'dlt-authorization-letter', label: 'DLT Authorization Letter' },
    { key: 'dlt-header-registration-sample', label: 'DLT GST Sample' },
  ],
};

const validateField = (field, value) => {
  const isFileField = field.type === 'file';
  const emptyValue = isFileField
    ? !value || (Array.isArray(value) && value.length === 0)
    : !String(value || '').trim();

  if (field.required && emptyValue) return 'This field is required.';
  if (emptyValue) return '';

  if (field.name === 'businessName' && String(value).trim().length < 3) {
    return 'Company name must be at least 3 characters.';
  }

  if (field.name === 'websiteUrl') {
    const websitePattern = /^(https:\/\/[a-z0-9.-]+\.[a-z]{2,}|www\.[a-z0-9.-]+\.[a-z]{2,})(\/.*)?$/i;
    if (!websitePattern.test(String(value).trim())) return 'Please enter a valid website URL.';
  }

  if (field.name === 'companyEmail') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(String(value).trim())) return 'Please enter a valid email address.';
  }

  if (field.name === 'mobileNumber') {
    if (!/^\d+$/.test(String(value).trim())) return 'Mobile number should contain only numbers.';
    if (!/^\d{10}$/.test(String(value).trim())) return 'Mobile number must be 10 digits.';
  }

  return '';
};

const validateSection = (section, data) => {
  const nextErrors = {};
  section?.fields.forEach(field => {
    const message = validateField(field, data[field.name]);
    if (message) nextErrors[field.name] = message;
  });
  return nextErrors;
};

const FieldInput = ({ field, value, onChange, error }) => {
  const base =
    'w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-medium text-slate-800 ' +
    'focus:outline-none focus:ring-2 focus:border-[#0D66BA] transition-all placeholder-slate-400';
  const stateClass = error ? ' border-red-300 focus:ring-red-100' : ' border-slate-200';

  if (field.type === 'textarea') {
    return (
      <textarea
        className={base + stateClass + ' resize-none h-24'}
        placeholder={field.placeholder || 'Enter ' + field.label.toLowerCase()}
        value={value || ''}
        onChange={e => onChange(field.name, e.target.value)}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <select className={base + stateClass} value={value || ''} onChange={e => onChange(field.name, e.target.value)}>
        <option value="">Select...</option>
        {field.options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  }

  if (field.type === 'file') {
    return (
      <div className="relative">
        <input
          type="file"
          multiple={field.multiple}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          onChange={e => onChange(field.name, field.multiple ? Array.from(e.target.files) : e.target.files[0])}
        />
        <div className={'flex items-center gap-3 px-4 py-3 bg-slate-50 border border-dashed rounded-xl cursor-pointer hover:border-[#0D66BA] transition-all ' + (error ? 'border-red-300' : 'border-slate-300')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" className="text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span className="text-sm text-slate-500 font-medium">
            {Array.isArray(value) && value.length > 0
              ? value.map(file => file.name).join(', ')
              : value
                ? value.name
                : 'Click to upload file'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <input
      type={field.type}
      className={base + stateClass}
      placeholder={field.placeholder || 'Enter ' + field.label.toLowerCase()}
      value={value || ''}
      onChange={e => onChange(field.name, e.target.value)}
    />
  );
};

const OnboardingForm = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const firstErrorRef = useRef(null);

  const sections = selectedService ? SERVICE_SECTIONS[selectedService] : [];
  const totalSteps = sections.length;
  const isLastStep = currentStep === totalSteps - 1;
  const progress = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;
  const svc = SERVICES.find(service => service.id === selectedService);
  const firstErrorName = Object.keys(fieldErrors)[0];

  useEffect(() => {
    const fetchUploadedDocs = async () => {
      try {
        const res = await api.get('/documents/all');
        setUploadedDocs(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Sample documents fetch error:', err);
        setUploadedDocs([]);
      }
    };

    fetchUploadedDocs();
  }, []);

  const getSampleDocumentUrl = key => {
    const doc = uploadedDocs.find(item => item.servicekey === key);
    if (!doc?.pdfUrl) return '';
    return `${API_URL.replace(/\/$/, '')}/pdf-proxy?url=${encodeURIComponent(doc.pdfUrl)}`;
  };

  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const scrollToFirstError = () => {
    window.requestAnimationFrame(() => {
      firstErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const validateCurrentStep = () => {
    const nextErrors = validateSection(sections[currentStep], formData);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      scrollToFirstError();
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (currentStep < totalSteps - 1) setCurrentStep(step => step + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(step => step - 1);
  };

  const handleServiceSelect = id => {
    setSelectedService(id);
    setCurrentStep(0);
    setFormData({});
    setFieldErrors({});
    setSubmitted(false);
    setSubmitError('');
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setSubmitting(true);
    setSubmitError('');

    const result = await submitToGoogleSheet(selectedService, formData);
    setSubmitting(false);

    if (result.success) {
      setReferenceId(result.referenceId || '');
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Submission failed. Please try again or contact support.');
    }
  };

  const resetAll = () => {
    setSelectedService(null);
    setSubmitted(false);
    setFormData({});
    setFieldErrors({});
    setCurrentStep(0);
    setSubmitError('');
    setReferenceId('');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" width="36" height="36">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Service Activation Request Submitted</h2>
          <p className="text-slate-500 font-medium mb-2">Thank you for choosing Digidonar.</p>
          <p className="text-slate-400 text-sm mb-3">Our onboarding team will review your application and contact you shortly.</p>
          {referenceId && <p className="text-slate-600 text-sm font-bold mb-8">Reference ID: {referenceId}</p>}
          <div className="space-y-3">
            <button onClick={() => window.print()} className="w-full bg-[#0D66BA] text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition-all">
              Download Acknowledgement
            </button>
            <button onClick={resetAll} className="w-full border border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-30 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 text-[#0D66BA] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'rgba(13, 102, 186, 0.10)' }}
          >
            DIGIDONAR Onboarding
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Service Activation Form</h1>
          <p className="text-slate-500 font-medium">Fill in your details to get started with your selected service.</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-400 font-medium">
            <span>Phone: 90909-20202</span>
            <span>www.digidonar.net</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {SERVICES.map(service => (
            <button
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={
                'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all font-bold text-xs text-center ' +
                (selectedService === service.id
                  ? 'border-[#0D66BA] text-[#0D66BA]'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300')
              }
              style={selectedService === service.id ? { backgroundColor: 'rgba(13, 102, 186, 0.05)' } : {}}
            >
              <span style={{ color: selectedService === service.id ? service.color : '#94a3b8' }}>
                {SERVICE_ICONS[service.id]}
              </span>
              {service.label}
            </button>
          ))}
        </div>

        {selectedService && (
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-6 items-start">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="h-1.5 bg-slate-100">
                <div className="h-full bg-[#0D66BA] transition-all duration-500 rounded-full" style={{ width: progress + '%' }} />
              </div>

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

              <div className="px-8 pt-4 pb-6 space-y-5">
                {sections[currentStep]?.fields.map(field => (
                  <div key={field.name} ref={field.name === firstErrorName ? firstErrorRef : null}>
                    <label className="block text-xs font-black text-slate-600 uppercase tracking-wider mb-1.5">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <FieldInput field={field} value={formData[field.name]} onChange={handleFieldChange} error={fieldErrors[field.name]} />
                    {fieldErrors[field.name] && (
                      <p className="text-red-500 text-xs font-bold mt-1.5">{fieldErrors[field.name]}</p>
                    )}
                  </div>
                ))}

                {isLastStep && submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-medium px-4 py-3 rounded-xl">
                    {submitError}
                  </div>
                )}
              </div>

              <div className="px-8 pb-8 flex items-center justify-between gap-4 border-t border-slate-50 pt-6">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Back
                </button>

                <div className="flex gap-1.5">
                  {sections.map((_, index) => (
                    <div
                      key={index}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: index === currentStep ? '24px' : '12px',
                        backgroundColor:
                          index === currentStep
                            ? '#0D66BA'
                            : index < currentStep
                              ? 'rgba(13, 102, 186, 0.40)'
                              : '#e2e8f0',
                      }}
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Request'}
                  </button>
                ) : (
                  <button onClick={handleNext} className="px-8 py-3 rounded-xl bg-[#0D66BA] text-white text-sm font-bold hover:bg-slate-900 transition-all shadow-lg">
                    Next
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6">
              <h3 className="text-sm font-black text-slate-900 mb-1">Download Sample Documents</h3>
              <p className="text-xs text-slate-400 font-medium mb-5">Review the required formats before submission.</p>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">For RCS Registration</h4>
                  <div className="space-y-2">
                    {SAMPLE_DOCUMENTS.rcs.map(doc => {
                      const sampleUrl = getSampleDocumentUrl(doc.key);

                      return sampleUrl ? (
                        <a key={doc.key} href={sampleUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-3 py-2 rounded-xl bg-[#0D66BA] text-white text-xs font-bold hover:bg-slate-900 transition-all">
                          <span className="block text-[11px] leading-4 text-white/85 mb-0.5">{doc.label}</span>
                          <span>View Sample</span>
                        </a>
                      ) : (
                        <button key={doc.key} type="button" disabled className="block w-full text-left px-3 py-2 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed">
                          <span className="block text-[11px] leading-4 text-slate-400 mb-0.5">{doc.label}</span>
                          <span>Not Uploaded</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">For DLT Registration</h4>
                  <div className="space-y-2">
                    {SAMPLE_DOCUMENTS.dlt.map(doc => {
                      const sampleUrl = getSampleDocumentUrl(doc.key);

                      return sampleUrl ? (
                        <a key={doc.key} href={sampleUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-3 py-2 rounded-xl border border-slate-200 text-[#0D66BA] text-xs font-bold hover:bg-slate-50 transition-all">
                          <span className="block text-[11px] leading-4 text-slate-500 mb-0.5">{doc.label}</span>
                          <span>View Sample</span>
                        </a>
                      ) : (
                        <button key={doc.key} type="button" disabled className="block w-full text-left px-3 py-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed">
                          <span className="block text-[11px] leading-4 text-slate-400 mb-0.5">{doc.label}</span>
                          <span>Not Uploaded</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
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
