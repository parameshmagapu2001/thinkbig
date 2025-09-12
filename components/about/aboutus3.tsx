"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Eye } from "lucide-react";

export default function HyderabadExtraSections() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Vertical Timeline Section */}
      <div className="relative max-w-6xl w-full px-4 sm:px-6 md:px-12 py-12 sm:py-16">
     
       {/* Vertical center line (only on md and above) */}
<div
  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-[#3D3A37]"
  style={{ top: 0, bottom: "96px" }}
/>


        {/* Item 1 - Quality First */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center sm:justify-start mb-12 relative"
        >
          <div className="sm:w-1/2 w-full sm:pr-6 flex justify-center sm:justify-end mb-6 sm:mb-0">
            <div className="bg-[#3D3A37] text-white rounded-2xl shadow-lg p-6 sm:p-10 sm:w-[520px] sm:h-[360px] w-full h-auto">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold mb-4">Quality First</h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    Rigorous checks, flawless finishes. All-stage inspections & committed experts
                    engage external bureaus to confirm defects identified and rectified before handover.
                    Safety-critical systems like electrical, plumbing, and fire systems are verified to
                    ensure new structures perform reliably from day one.
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-0">
                  <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot on timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-5 h-5 sm:w-6 sm:h-6 z-20" />
        </motion.div>

        {/* Item 2 - Reliability */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center sm:justify-end mb-12 relative"
        >
          <div className="sm:w-1/2 w-full sm:pl-6 flex justify-center sm:justify-start mb-6 sm:mb-0">
            <div className="bg-[#3D3A37] text-white rounded-2xl shadow-lg p-6 sm:p-10 sm:w-[520px] sm:h-[360px] w-full h-auto">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold mb-4">Reliability</h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    Transparent timelines, dependable delivery. Stringent protocols and disciplined
                    project controls ensure dependability. Structured responses maintain trust
                    through accountability and documented next steps.
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-0">
                  <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-5 h-5 sm:w-6 sm:h-6 z-20" />
        </motion.div>

        {/* Item 3 - Transparency */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center sm:justify-start mb-12 relative"
        >
          <div className="sm:w-1/2 w-full sm:pr-6 flex justify-center sm:justify-end mb-6 sm:mb-0">
            <div className="bg-[#3D3A37] text-white rounded-2xl shadow-lg p-6 sm:p-10 sm:w-[520px] sm:h-[360px] w-full h-auto">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold mb-4">Transparency</h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">
                    Clarity at every step. Mandatory disclosures and trackers provide verified details
                    on approvals, progress and delivery status — eliminating guesswork and keeping
                    stakeholders informed and confident.
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-0">
                  <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-5 h-5 sm:w-6 sm:h-6 z-20" />
        </motion.div>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full px-4 sm:px-6 md:px-12">
        <div className="w-full h-[2px] bg-gray-300 mt-0" />
      </div>
    </section>
  );
}
