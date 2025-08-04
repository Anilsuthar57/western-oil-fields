import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us for your oil and gas field service requirements. We're here to help with your projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 italic">
                <span className="text-red-600">WESTERN </span>
                <span className="text-blue-600">Oil Field Services</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      3rd Floor 306, Ganesh Plaza,<br />
                      Ajit Mill Cross Road,<br />
                      Rakhial, Ahmedabad-380024,<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-green-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">westernoilfield@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">ISO 14001</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">ISO 9001</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">OHSMS 45001</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Required</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange("service", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="workover-rig">Workover Rig</option>
                  <option value="mobile-pumping">Mobile Pumping Unit</option>
                  <option value="air-compressor">Mobile Air Compressor</option>
                  <option value="steaming-unit">Mobile Steaming Unit</option>
                  <option value="hot-oil">Hot Oil Circulation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
