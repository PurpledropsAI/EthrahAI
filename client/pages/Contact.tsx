import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    businessSize: "",
    budgetRange: "",
    projectDescription: "",
    hearAbout: "",
    services: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      
      {/* Hero Section */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-10">
          <div className="w-full max-w-[322px]">
            <img 
              src="contact-logo.png" 
              alt="AI Visualization" 
              className="w-[50rem]"
            />
          </div>
          
          <div className="space-y-8 flex-1 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-[32px] sm:text-[48px] sm:leading-[60px] font-black text-[#141414] tracking-[-2px]">
                Let's Start Your AI Journey
              </h1>
              <p className="text-base leading-6 text-[#141414]">
                Free consultation • No obligations • Same-day response
              </p>
            </div>
            <button className="w-full max-w-[400px] h-12 bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] rounded-lg hover:bg-[#2a2a2a] transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Location</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              DIFC Innovation Hub, Dubai, UAE
            </p>
          </div>
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Email</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              ethrah.ai@gmail.com
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Phone</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              +971 4 528 978549
            </p>
          </div>
          <div className="border-t border-[#E5E8EB] pt-5 space-y-2">
            <p className="text-sm leading-[21px] text-[#757575]">Hours</p>
            <p className="text-sm leading-[21px] text-[#141414]">
              Sun-Thu: 9AM-6PM GST
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8">
        <div className="rounded-lg overflow-hidden h-[522px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/54496f4e193481c7bdbfebf26b87e8328f7b999b?width=1856" 
            alt="Location Map" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Contact Form */}
  <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#141414] mb-6">
          Tell Us About Your Project
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Business Size
              </label>
              <select
                value={formData.businessSize}
                onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select business size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select budget range</option>
                <option value="<10k">Less than $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              {[
                "Process Automation",
                "AI Chatbots",
                "Analytics & Insights",
                "Custom AI Solutions",
                "Algo Trading",
                "AI Strategy Consulting",
                "Other"
              ].map((service) => (
                <label key={service} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 rounded border-2 border-[#E0E0E0] text-[#141414] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-base text-[#141414] leading-6">
                    {service}
                  </span>
                </label>
              ))}
            </div>

            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                Project Description
              </label>
              <textarea
                placeholder="Tell us about your project..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full min-h-[144px] px-4 py-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:border-[#141414] resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div></div>
            <div>
              <label className="block text-base font-medium text-[#141414] leading-6 mb-2">
                How Did You Hear About Us?
              </label>
              <select
                value={formData.hearAbout}
                onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                className="w-full h-14 px-4 rounded-lg border border-[#E0E0E0] bg-white text-base text-[#141414] focus:outline-none focus:border-[#141414] appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full max-w-md h-12 bg-[#141414] text-white text-base font-bold leading-6 rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              Schedule Free Consultation
            </button>
          </div>

          <p className="text-sm text-[#757575] text-center leading-[21px]">
            We typically respond within 2 hours during business hours
          </p>
        </form>
      </section>

      <Footer />
    </div>
  );
}
