import React, { useState } from 'react';
import Hero from '../../sections/LP-01/Hero';
import LogoBar from '../../sections/LP-01/LogoBar';
import FAQ from '../../sections/LP-01/FAQ';
// import CTA from '../../sections/LP-01/CTA'
import Metrics from '../../sections/LP-01/WhatsappFeatures'
import WhatsAppTouchpoint from '../../sections/LP-01/WhatsapptouchPoint';
import Business from '../../sections/LP-01/BusinessTrasform'

const LP01 = () => {

  return (
    <>
      <Hero />
      <LogoBar />
      <Metrics />
      <WhatsAppTouchpoint />
      <Business />
      <FAQ />
      {/* <CTA /> */}
    </>
  );
};

export default LP01;