import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
  <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-[#141414] mb-4">Case Studies</h1>
          <p className="text-lg text-[#737373] mb-8">
            This page is currently under development. Please continue exploring or contact us for more information.
          </p>
          <button className="px-6 py-3 bg-[#141414] text-[#FAFAFA] font-bold rounded-lg hover:bg-[#2a2a2a] transition-colors">
            Contact Us
          </button>
        </div> */}
        
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:leading-[64px] text-[#141414] sm:mb-10 md:mb-16">
          Case Studies
        </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="case-logo.png"
                alt="AI Brain Illustration"
                className="w-[400px]"
              />
            </div>

            <div className="ospace-y-8">
              <div className="space-y-2">
                <h1 className="text-[32px] sm:text-[48px] font-black sm:leading-[60px] tracking-[-2px] text-[#000]">
                  AI Solutions That Grow With You
                </h1>
              </div>

              <p className="text-[14px] sm:text-base leading-6 text-[#000] mb-2">
                Ethrah AI delivers end-to-end AI solutions tailored to your
                industry—from strategy to deployment. We handle the complexity
                so you can focus on growth.
              </p>

              <button className="h-10 px-4 rounded-lg bg-[#141414] text-[#FAFAFA] text-sm font-bold leading-[21px] hover:bg-[#2a2a2a] transition-colors">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
        <CaseStudiesSection />
        <HowWeWorkSection />
        <CTASection />

      </main>
      <Footer />
    </div>
  );
}
