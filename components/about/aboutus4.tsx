"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatisticsSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      {/* --- Section Header --- */}
      <h2
        className="text-[#3D3A37] font-clashGrotesk font-semibold text-center text-4xl sm:text-5xl md:text-[72px] leading-tight sm:leading-snug md:leading-[120%] mb-12 sm:mb-16"
      >
        Our Statics · Our Success
      </h2>

      {/* Horizontal Divider */}
      <div className="w-full px-0 sm:px-0 md:px-5">
        <div className="w-full h-[2px] bg-gray-300 mt-0" />
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full">
        {/* Card 1 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-4 sm:p-6 md:p-6 text-left min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
          <h3
            className="text-[#3D3A37] font-clashGrotesk mx-auto text-5xl sm:text-6xl md:text-[120px] font-medium leading-tight sm:leading-tight md:leading-[184px]"
          >
            312
          </h3>
          <p className="mt-2 sm:mt-3 text-base sm:text-base md:text-base font-medium text-[#3D3A37]">
            Private Visits
          </p>
          <p className="mt-1 sm:mt-2 text-sm sm:text-sm md:text-sm text-gray-500">
            Private site visits that are counted &amp; confirmed. Tours improving unique prospect conditions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-4 sm:p-6 md:p-6 text-left min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
          <h3
            className="text-[#3D3A37] font-clashGrotesk mx-auto text-5xl sm:text-6xl md:text-[120px] font-medium leading-tight sm:leading-tight md:leading-[184px]"
          >
            23%
          </h3>
          <p className="mt-2 sm:mt-3 text-base sm:text-base md:text-base font-medium text-[#3D3A37]">
            Booking conversion rate
          </p>
          <p className="mt-1 sm:mt-2 text-sm sm:text-sm md:text-sm text-gray-500">
            Booking conversion rate from qualified leads. Percent of qualified leads that converted to sales in the period.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-4 sm:p-6 md:p-6 text-left min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
          <h3
            className="text-[#3D3A37] font-clashGrotesk mx-auto text-5xl sm:text-6xl md:text-[120px] font-medium leading-tight sm:leading-tight md:leading-[184px]"
          >
            96%
          </h3>
          <p className="mt-2 sm:mt-3 text-base sm:text-base md:text-base font-medium text-[#3D3A37]">
            On-time handover rate
          </p>
          <p className="mt-1 sm:mt-2 text-sm sm:text-sm md:text-sm text-gray-500">
            On-time handover rate across implemented projects (RERA-aligned).
          </p>
        </div>
      </div>

      {/* --- Divider under stats --- */}
      <div className="w-full border-t border-gray-300 my-8 sm:my-12"></div>

      {/* --- Reserve CTA Section --- */}
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-full">
        <div className="flex items-center gap-4 sm:gap-6">
          <h3 className="text-[#3D3A37] font-clashGrotesk text-4xl sm:text-5xl md:text-[126px] font-medium leading-tight sm:leading-snug md:leading-[150px]">
            Reserve
          </h3>
          <div className="bg-[#3D3A37] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
