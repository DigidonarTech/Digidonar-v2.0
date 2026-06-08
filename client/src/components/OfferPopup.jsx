import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import api from '../api';

const isAdminRoute = (pathname) =>
  pathname.startsWith('/admin') || pathname === '/admin-login';

const normalizeLink = (link) => {
  if (!link) return '';
  if (/^(https?:)?\/\//i.test(link) || link.startsWith('/') || link.startsWith('#')) {
    return link;
  }
  return `https://${link}`;
};

const OfferPopup = () => {
  const [offer, setOffer] = useState(null);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isAdminRoute(location.pathname) || location.pathname !== '/') {
      return;
    }

    let isMounted = true;

    const fetchOffer = async () => {
      try {
        const res = await api.get('/offer-popup/active');
        if (!isMounted || !res.data?.isActive) return;

        setOffer(res.data);
        setVisible(true);
      } catch (error) {
        console.error('Offer popup fetch failed:', error);
      }
    };

    fetchOffer();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  const closePopup = () => {
    setVisible(false);
  };

  if (isAdminRoute(location.pathname) || !visible || !offer) return null;

  const buttonLink = normalizeLink(offer.buttonLink);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/10 px-3 py-5 backdrop-blur-[1px] sm:px-5">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-popup-title"
        className="relative grid w-full max-w-3xl scale-[0.88] overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.28)] md:grid-cols-[0.9fr_1.1fr] sm:scale-[0.9] lg:scale-[0.85]"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close offer popup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-900 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="relative min-h-44 overflow-hidden bg-gradient-to-br from-[#0D66BA] via-slate-900 to-emerald-600 md:min-h-[315px]">
          {offer.imageUrl ? (
            <img
              src={offer.imageUrl}
              alt={offer.title || 'Offer banner'}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-44 flex-col justify-end p-5 text-white md:min-h-[315px] md:p-6">
              <div className="absolute left-8 top-8 h-20 w-20 rounded-3xl bg-white/15" />
              <div className="absolute right-8 top-16 h-28 w-28 rounded-full bg-emerald-300/20" />
              <div className="absolute bottom-24 right-10 h-16 w-32 rounded-2xl bg-white/10" />
              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-100">
                  Business Growth
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight">
                  WhatsApp automation for faster lead conversion
                </h3>
                <div className="mt-5 space-y-2">
                  <div className="h-3 w-4/5 rounded-full bg-white/35" />
                  <div className="h-3 w-2/3 rounded-full bg-white/25" />
                  <div className="h-3 w-3/4 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center px-5 py-6 text-left sm:px-7 md:px-7 md:py-7">
          <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D66BA]">
            Special Offer
          </div>

          {offer.title && (
            <h2
              id="offer-popup-title"
              className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl"
            >
              {offer.title}
            </h2>
          )}

          {offer.description && (
            <p className="mt-3 whitespace-pre-line text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              {offer.description}
            </p>
          )}

          {offer.buttonText && buttonLink && (
            <a
              href={buttonLink}
              onClick={closePopup}
              className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-2xl bg-[#0D66BA] px-6 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-500/20 transition hover:bg-slate-950"
            >
              {offer.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
