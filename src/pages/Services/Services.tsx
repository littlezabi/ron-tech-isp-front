import React from "react";
import { Icon } from "@iconify-icon/react";

const services = [
  {
    id: 1,
    title: "High-Speed Internet",
    description: "Experience seamless browsing, gaming, and streaming with our blazing fast internet plans.",
    icon: "mdi:speedometer-slow",
    bgColor: "from-blue-600",
    textColor: "text-white",
    gradient: 'linear-gradient(34deg, #000000d9, #0000001a)'
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "Our expert support team is available round the clock to assist with any technical issues.",
    icon: "mdi:headset",
    bgColor: "bg-green-600",
    textColor: "text-white",
    gradient: 'linear-gradient(34deg, #000000d9, #0000001a)'
  },
  {
    id: 3,
    title: "Reliable Connections",
    description: "Stay connected with our consistent and dependable internet connections designed to keep you online at all times.",
    icon: "mdi:wifi",
    bgColor: "bg-purple-600",
    textColor: "text-white",
    gradient: 'linear-gradient(34deg, #000000d9, #0000001a)'
  },
  {
    id: 4,
    title: "Affordable Plans",
    description: "Choose from a variety of budget-friendly plans that suit both individuals and businesses.",
    icon: "mdi:cash-multiple",
    bgColor: "bg-orange-600",
    textColor: "text-white",
    gradient: 'linear-gradient(34deg, #000000d9, #0000001a)'
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r py-20"
        style={{background: 'linear-gradient(45deg, #007eff, #a100ff, #ff00bc, #ff9900)'}}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover the services that make us a leading Internet Service Provider. We offer top-notch performance, customer
          support, and the best internet experience you can have.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-lg p-6 ${service.textColor} shadow-lg text-center`}
            style={{
                background: service.gradient
            }}
          >
            <div className="flex justify-center items-center mb-6">
              <Icon icon={service.icon} style={{ fontSize: "3rem" }} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
