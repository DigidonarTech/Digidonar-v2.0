import React from "react";
import { useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const ServiceDetailWrapper = () => {
  const { serviceType } = useParams();
  return <ServiceDetail serviceType={serviceType} />;
};

export default ServiceDetailWrapper;
