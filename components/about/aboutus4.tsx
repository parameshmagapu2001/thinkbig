"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatisticsSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center px-6 md:px-12 py-16">
      {/* --- Section Header --- */}
      <h2
        className="text-[#3D3A37] font-clashGrotesk font-semibold text-center"
        style={{
          fontSize: "72px",
          lineHeight: "120%",
          marginBottom: "51px",
        }}
      >
        Our Statics · Our Success
      </h2>

      <div className="w-full px-6 md:px-05">
        {/* horizontal divider */}
        <div className="w-full h-[2px] bg-gray-300 mt-0" />
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
        {/* Card 1 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-6 text-left min-h-[280px]">
          <h3
            className="text-[#3D3A37] font-clashGrotesk mx-auto"
            style={{
              width: "231px",
              height: "151px",
              fontSize: "120px",
              fontWeight: 500,
              lineHeight: "184px",
            }}
          >
            312
          </h3>
          <p className="mt-3 text-base font-medium text-[#3D3A37]">Private Visits</p>
          <p className="mt-2 text-sm text-gray-500">
            Private site visits that are counted &amp; confirmed. Tours improving unique
            prospect conditions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-6 text-left min-h-[280px]">
          <h3
            className="text-[#3D3A37] font-clashGrotesk mx-auto"
            style={{
              width: "231px",
              height: "151px",
              fontSize: "120px",
              fontWeight: 500,
              lineHeight: "184px",
            }}
          >
            23%
          </h3>
          <p className="mt-3 text-base font-medium text-[#3D3A37]">
            Booking conversion rate
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Booking conversion rate from qualified leads. Percent of qualified leads that
            converted to sales in the period.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between border border-gray-400 rounded-xl p-6 text-left min-h-[280px]">
          <h3
            className="text-[#3D3A37]  font-clashGrotesk mx-auto"
            style={{
              width: "231px",
              height: "151px",
              fontSize: "120px",
              fontWeight: 500,
              lineHeight: "184px",
            }}
          >
            96%
          </h3>
          <p className="mt-3 text-base font-medium text-[#3D3A37]">
            On-time handover rate
          </p>
          <p className="mt-2 text-sm text-gray-500">
            On-time handover rate across implemented projects (RERA-aligned).
          </p>
        </div>
      </div>

      {/* --- Divider under stats --- */}
      <div className="w-full border-t border-gray-300 my-12"></div>

      {/* --- Reserve CTA Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div>
          <div className="flex items-center gap-6">
            <h3
              className="text-[#3D3A37] font-clashGrotesk"
              style={{
                fontSize: "126px",
                fontWeight: 500,
                lineHeight: "150px",
              }}
            >
              Reserve
            </h3>
            <div className="bg-[#3D3A37] rounded-full w-16 h-16 flex items-center justify-center">
              <ArrowUpRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
