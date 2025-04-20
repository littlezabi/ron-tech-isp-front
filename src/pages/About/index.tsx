import React from "react";
import { Icon } from "@iconify-icon/react";

const About = () => {
  return (
    <div className="py-20"

        style={{background: 'linear-gradient(45deg, #007eff, #a100ff, #ff00bc, #ff9900)'}}
    >
      {/* Page Header */}
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto">
          We are dedicated to providing the best internet services to individuals and businesses around the globe. Our mission is to deliver fast, reliable, and affordable internet solutions.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-white">
          <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            At RonISP, we believe that the internet is the backbone of modern society, and we strive to provide seamless, high-speed connectivity to individuals and businesses. Our team is dedicated to offering customer-centric solutions with a focus on affordability and reliability.
          </p>
          <p className="text-lg">
            Our goal is to create a robust and scalable network infrastructure that ensures you stay connected at all times. Whether you're working, streaming, gaming, or browsing, we've got you covered.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/bearded-man-checking-portable-devices_23-2148264111.jpg?t=st=1745152368~exp=1745155968~hmac=96a07c959bdfdf4ec6a912503d9d968a8d4e18fc5ef5c14627589a40ba2add57&w=996"
            alt="About Us Image"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-semibold text-white mb-6">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:facebook" style={{ fontSize: "2rem", color: "white" }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:twitter" style={{ fontSize: "2rem", color: "white" }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:instagram" style={{ fontSize: "2rem", color: "white" }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" style={{ fontSize: "2rem", color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
