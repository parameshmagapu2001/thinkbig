"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Eye } from "lucide-react";

export default function HyderabadExtraSections() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Vertical Timeline Section */}
      <div className="relative max-w-6xl w-full px-6 md:px-12 py-16">
        {/* Vertical center line:
            using top:0 and bottom set so the line stops above the horizontal divider area.
            Adjust 'bottom' value if you need different spacing between the end-dot and divider. */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-[#3D3A37]"
          style={{ top: 0, bottom: "96px" }}
        />

        {/* Item 1 - Quality First (left) */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-start mb-24 relative"
        >
          <div className="w-1/2 pr-8 flex justify-end">
            <div
              className="bg-[#3D3A37] text-white rounded-2xl shadow-lg"
              style={{ width: 520, height: 360, padding: 40 }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Quality First</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Rigorous checks, flawless finishes. All-stage inspections &amp;
                    committed experts engaging valued energy from external bureaus to
                    confirm defects identified and rectified before handover. Safety-critical
                    systems like electrical, plumbing, and fire systems are verified to ensure
                    new structures and systems perform reliably from day one.
                  </p>
                </div>

                {/* Centered icon at bottom of card */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                    <ShieldCheck className="w-10 h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot on the timeline for this item */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-6 h-6 z-20" />
        </motion.div>

        {/* Item 2 - Reliability (right) */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-end mb-24 relative"
        >
          <div className="w-1/2 pl-8 flex justify-start">
            <div
              className="bg-[#3D3A37] text-white rounded-2xl shadow-lg"
              style={{ width: 520, height: 360, padding: 40 }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Reliability</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Transparent timelines, dependable delivery. With stringent protocols,
                    recognized practices, and disciplined project controls, our framework
                    ensures dependability from start to finish. If issues arise, structured
                    responses maintain trust through accountability and documented next steps.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                    <BadgeCheck className="w-10 h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-6 h-6 z-20" />
        </motion.div>

        {/* Item 3 - Transparency (left) */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-start relative"
        >
          <div className="w-1/2 pr-8 flex justify-end">
            <div
              className="bg-[#3D3A37] text-white rounded-2xl shadow-lg"
              style={{ width: 520, height: 360, padding: 40 }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">Transparency</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Clarity at every step. Mandatory disclosures and trackers provide verified details
                    on approvals, progress and delivery status — eliminating guesswork and keeping
                    stakeholders informed and confident.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-[#3D3A37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#3D3A37] rounded-full w-6 h-6 z-20" />
        </motion.div>

        {/* === End of cards / timeline === */}
      </div>

      {/* --- End-dot (where vertical line meets horizontal divider) + horizontal divider aligned with page gutters --- */}
      <div className="w-full px-6 md:px-12">
       

          {/* horizontal divider between the same gutters as the timeline above */}
          <div className="w-full h-[2px] bg-gray-300 mt-0" />
        </div>
    </section>
  );
}
