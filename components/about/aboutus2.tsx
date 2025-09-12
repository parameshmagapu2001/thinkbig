"use client";

import { useRef, useEffect } from "react";

export default function PropertyManagement() {
  const dragRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!dragRef.current || !textRef.current || !wrapperRef.current) return;

    const lineRect = dragRef.current.parentElement!.getBoundingClientRect();
    // clamp x within the line
    let newX = clientX - lineRect.left;
    newX = Math.max(0, Math.min(newX, lineRect.width));

    dragRef.current.style.left = `${newX}px`;

    // percentage from right
    const percent = 1 - newX / lineRect.width;
    const hiddenWidth = textRef.current.scrollWidth - wrapperRef.current.offsetWidth;
    textRef.current.style.transform = `translateX(${-percent * hiddenWidth}px)`;
  };

  useEffect(() => {
    // initialize at the right
    const lineWidth = dragRef.current?.parentElement?.offsetWidth || 0;
    if (dragRef.current) dragRef.current.style.left = `${lineWidth}px`;

    let isDown = false;
    let offsetX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      offsetX = e.clientX - (dragRef.current?.offsetLeft || 0);
      if (dragRef.current) dragRef.current.style.cursor = "grabbing";
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      updatePosition(e.clientX - offsetX);
    };
    const handleMouseUp = () => {
      isDown = false;
      if (dragRef.current) dragRef.current.style.cursor = "grab";
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      offsetX = e.touches[0].clientX - (dragRef.current?.offsetLeft || 0);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      updatePosition(e.touches[0].clientX - offsetX);
    };
    const handleTouchEnd = () => {
      isDown = false;
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <main className="w-full bg-white text-[#3D3A37] px-6 md:px-12 py-12 font-sans overflow-hidden">
      {/* Headline Section */}
      <section className="w-full text-left">
        <h1
          style={{
            color: "#3D3A37",
            fontFamily: "Clash Grotesk, sans-serif",
            fontSize: "75px",
            fontWeight: 500,
            lineHeight: "102px",
          }}
        >
          Everything for discovering Hyderabad&apos;s finest addresses.
        </h1>
        <p
          style={{
            color: "#3D3A37",
            fontFamily: "Clash Grotesk, sans-serif",
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: "47px",
          }}
        >
          Think Big specializes in premium real estate, spanning curated luxury
          villas and residences, guided site visits, financing and legal
          facilitation, and post-handover concierge care.
        </p>
      </section>

      {/* Drag Section */}
      <section className="w-full relative mt-12">
    
        {/* Drag Line */}
        <div className="relative h-[2px] bg-gray-300 my-6">
          <div
            ref={dragRef}
            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xs cursor-grab select-none"
            style={{ left: 0 }} // JS will update left inline
          >
            Drag
          </div>
        </div>

        {/* Image + Sliding Text */}
        <div className="flex items-start overflow-hidden mt-4">
          <div className="flex-shrink-0 w-[287px] h-[201px] rounded-full overflow-hidden relative">
            <img
              src="/images/Rectangle 1025.png"
              alt="Think Big"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={wrapperRef}
            className="overflow-hidden relative flex-1 ml-6"
            style={{ height: "180px" }}
          >
            <div
              ref={textRef}
              className="whitespace-nowrap text-[100px] font-[500] font-ClashGrotesk text-[#3D3A37]"
              style={{ transform: "translateX(5.3641px)" }}
            >
              Think Big focuses on high-end residences, offering expert curation,
              advisory and negotiations, loan and legal support, and ongoing
              community onboarding.
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="relative h-[2px] bg-gray-300 my-6"></div>
      </section>

      {/* About Us Section (Figma specs applied) */}
      <section className="w-full mt-6">
        <h3 className="text-base font-semibold text-[#3D3A37] mb-4">About Us</h3>
        <p
          style={{
            width: "1222px",
            height: "270px",
            flexShrink: 0,
            color: "#3D3A37",
            fontFamily: "Clash Grotesk, sans-serif",
            fontSize: "44px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "107%", // ~63.84px
          }}
        >
          We are a leading company in the real estate sector, specializing in
          providing a wide range of services and solutions to meet the needs of
          buying, renting, and managing real estate assets.
        </p>
      </section>

      {/* Timeline Section — exactly like second image: line spans between left/right padding,
          three dots centered on the line, labels above each dot */}
      <section className="w-full mt-8">
        <div className="relative w-full h-12 px-6"> {/* px-6 provides the left/right gutters */}
          {/* Horizontal line (spans from left gutter to right gutter) */}
          <div className="absolute left-6 right-6 top-1/2 h-[2px] bg-[#3D3A37] transform -translate-y-1/2" />

          {/* Left marker (near left gutter) */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-[#3D3A37]">
              Meaning
            </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>

          {/* Center marker */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-[#3D3A37]">
              Symbolism
            </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>

          {/* Right marker (near right gutter) */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-[#3D3A37] whitespace-nowrap">
    360 Approach
  </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>
        </div>
      </section>


    <section className="w-full mt-12">
        <p
          style={{
            width: "1222px",
            color: "#3D3A37",
            fontFamily: "Clash Grotesk, sans-serif",
            fontSize: "60px",
            fontWeight: 600,
            lineHeight: "148%", // 96px
          }}
        >
          We are a leading company in the real estate sector, specializing in
          providing a wide range of services and solutions to meet the needs of
          buying, renting, and managing real estate assets.
        </p>
      </section>
    </main>
  );
}
