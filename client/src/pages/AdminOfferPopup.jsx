import React, { useEffect, useState } from 'react';
import { ArrowLeft, ImageUp, Loader2, Save, ToggleLeft, ToggleRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const emptyForm = {
  title: '',
  description: '',
  imageUrl: '',
  buttonText: '',
  buttonLink: '',
  isActive: false,
};

const AdminOfferPopup = () => {
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');
  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      navigate('/admin-login', { replace: true });
      return;
    }

    const fetchPopup = async () => {
      try {
        setLoading(true);
        const res = await api.get('/offer-popup/admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({ ...emptyForm, ...res.data });
      } catch (error) {
        console.error('Offer popup admin fetch failed:', error);
        alert('Unable to load offer popup settings.');
      } finally {
        setLoading(false);
      }
    };

    fetchPopup();
  }, [navigate, token]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      const res = await api.put('/offer-popup/admin', form, authConfig);
      setForm({ ...emptyForm, ...res.data });
      alert('Offer popup saved successfully.');
    } catch (error) {
      console.error('Offer popup save failed:', error);
      alert('Save failed. Please check backend logs.');
    } finally {
      setSaving(false);
    }
  };

  const toggleStatus = async () => {
    try {
      const nextStatus = !form.isActive;
      setForm((prev) => ({ ...prev, isActive: nextStatus }));
      const res = await api.patch('/offer-popup/admin/status', { isActive: nextStatus }, authConfig);
      setForm({ ...emptyForm, ...res.data });
    } catch (error) {
      console.error('Offer popup status update failed:', error);
      setForm((prev) => ({ ...prev, isActive: !prev.isActive }));
      alert('Status update failed.');
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      setUploading(true);
      const res = await api.post('/offer-popup/admin/upload', formData, authConfig);
      setForm({ ...emptyForm, ...res.data });
      setImageFile(null);
      alert('Offer image uploaded.');
    } catch (error) {
      console.error('Offer image upload failed:', error);
      alert('Image upload failed. Please check backend logs.');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 pt-24">
        <Loader2 className="animate-spin text-[#0D66BA]" size={42} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 pb-12 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <Link
              to="/admin-dashboard"
              className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0D66BA]"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black uppercase italic leading-none text-slate-900">
              Offer Popup Management
            </h1>
            <p className="mt-2 font-medium text-slate-500">
              Manage the website popup content shown to first-time visitors.
            </p>
          </div>

          <button
            type="button"
            onClick={toggleStatus}
            className={`inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-black transition ${
              form.isActive
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white'
                : 'bg-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white'
            }`}
          >
            {form.isActive ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
            {form.isActive ? 'Popup Enabled' : 'Popup Disabled'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSave}
            className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                  Offer Title
                </span>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-[#0D66BA] focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Limited time offer"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                  Offer Description
                </span>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-[#0D66BA] focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Add details visitors should see in the popup."
                />
              </label>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    CTA Button Text
                  </span>
                  <input
                    name="buttonText"
                    value={form.buttonText}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-[#0D66BA] focus:bg-white focus:ring-2 focus:ring-blue-100"
                    placeholder="Claim Offer"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    CTA Button Link
                  </span>
                  <input
                    name="buttonLink"
                    value={form.buttonLink}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 outline-none transition focus:border-[#0D66BA] focus:bg-white focus:ring-2 focus:ring-blue-100"
                    placeholder="/contact or https://example.com"
                  />
                </label>
              </div>

              <label className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span>
                  <span className="block text-sm font-black text-slate-900">Enable popup</span>
                  <span className="block text-sm font-medium text-slate-500">
                    Disabled popups are hidden from the public website.
                  </span>
                </span>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={form.isActive}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#0D66BA]"
                />
              </label>

              <button
                type="submit"
                disabled={saving}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#0D66BA] px-6 py-3 font-black text-white shadow-lg shadow-blue-500/20 transition hover:bg-slate-950 disabled:opacity-60"
              >
                {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                {saving ? 'Saving...' : 'Save Popup Content'}
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
              <h2 className="mb-4 text-xl font-black text-slate-900">Offer Image</h2>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                {form.imageUrl ? (
                  <img
                    src={form.imageUrl}
                    alt="Current offer"
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center text-sm font-bold text-slate-400">
                    No image uploaded
                  </div>
                )}
              </div>

              <div className="mt-5 space-y-4">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={(event) => setImageFile(event.target.files?.[0] || null)}
                  className="block w-full cursor-pointer text-sm file:mr-4 file:rounded-xl file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-bold file:text-slate-700 hover:file:bg-slate-200"
                />

                <button
                  type="button"
                  onClick={handleImageUpload}
                  disabled={uploading}
                  className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-black text-white transition hover:bg-slate-700 disabled:opacity-60"
                >
                  {uploading ? <Loader2 className="animate-spin" size={20} /> : <ImageUp size={20} />}
                  {uploading ? 'Uploading...' : 'Upload / Change Image'}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
              <h2 className="mb-4 text-xl font-black text-slate-900">Popup Preview</h2>

              <div className="rounded-3xl bg-slate-950/10 p-3 backdrop-blur-[1px]">
                <div className="relative grid overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] sm:grid-cols-[0.9fr_1.1fr]">
                  <button
                    type="button"
                    aria-label="Preview close button"
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md ring-1 ring-slate-200"
                  >
                    ×
                  </button>

                  <div className="relative min-h-36 overflow-hidden bg-gradient-to-br from-[#0D66BA] via-slate-900 to-emerald-600 sm:min-h-[210px]">
                    {form.imageUrl ? (
                      <img
                        src={form.imageUrl}
                        alt="Offer preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-36 flex-col justify-end p-4 text-white sm:min-h-[210px]">
                        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-100">
                            Business Growth
                          </p>
                          <p className="mt-2 text-sm font-black leading-tight">
                            WhatsApp automation for leads
                          </p>
                          <div className="mt-3 space-y-1.5">
                            <div className="h-2 w-4/5 rounded-full bg-white/35" />
                            <div className="h-2 w-2/3 rounded-full bg-white/25" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center px-4 py-5 text-left sm:px-5">
                    <div className="mb-2 inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#0D66BA]">
                      Special Offer
                    </div>
                    <h3 className="text-lg font-black leading-tight text-slate-950">
                      {form.title || 'Offer title preview'}
                    </h3>
                    <p className="mt-2 line-clamp-5 whitespace-pre-line text-xs font-medium leading-relaxed text-slate-600">
                      {form.description || 'Offer description preview will appear here.'}
                    </p>
                    <span className="mt-4 inline-flex w-fit rounded-xl bg-[#0D66BA] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-blue-500/20">
                      {form.buttonText || 'CTA Button'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOfferPopup;
