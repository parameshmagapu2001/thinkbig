"use client";

import { useRef, useEffect } from "react";

export default function PropertyManagement() {
  const dragRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!dragRef.current || !textRef.current || !wrapperRef.current) return;

    const lineRect = dragRef.current.parentElement!.getBoundingClientRect();
    let newX = clientX - lineRect.left;
    newX = Math.max(0, Math.min(newX, lineRect.width));

    dragRef.current.style.left = `${newX}px`;

    const percent = 1 - newX / lineRect.width;
    const hiddenWidth = textRef.current.scrollWidth - wrapperRef.current.offsetWidth;
    textRef.current.style.transform = `translateX(${-percent * hiddenWidth}px)`;
  };

  useEffect(() => {
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
    <main className="w-full bg-white text-[#3D3A37] px-4 md:px-12 py-8 md:py-12 font-sans overflow-hidden">
      {/* Headline Section */}
      <section className="w-full text-left mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-[75px] font-medium leading-snug sm:leading-snug md:leading-[102px] mb-4 md:mb-6">
          Everything for discovering Hyderabad&apos;s finest addresses.
        </h1>
        <p className="text-sm sm:text-base md:text-[32px] font-light leading-snug sm:leading-snug md:leading-[47px]">
          Think Big specializes in premium real estate, spanning curated luxury
          villas and residences, guided site visits, financing and legal
          facilitation, and post-handover concierge care.
        </p>
      </section>

      {/* Drag Section */}
      <section className="w-full relative mt-8 md:mt-12">
        {/* Drag Line */}
        <div className="relative h-[2px] bg-gray-300 my-6">
          <div
            ref={dragRef}
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center text-xs cursor-grab select-none"
            style={{ left: 0 }}
          >
            Drag
          </div>
        </div>

        {/* Image + Sliding Text */}
        <div className="flex flex-col sm:flex-row items-start overflow-hidden mt-4">
          <div className="flex-shrink-0 w-[180px] sm:w-[287px] h-[130px] sm:h-[201px] rounded-full overflow-hidden relative">
            <img
              src="/images/rectangle_1025.png"
              alt="Think Big"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={wrapperRef}
            className="overflow-hidden relative flex-1 mt-4 sm:mt-0 sm:ml-6"
            style={{ height: "120px" }}
          >
            <div
              ref={textRef}
              className="whitespace-nowrap text-[40px] sm:text-[100px] font-medium font-ClashGrotesk text-[#3D3A37]"
              style={{ transform: "translateX(0px)" }}
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

      {/* About Us Section */}
      <section className="w-full mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-[#3D3A37] mb-4">About Us</h3>
        <p className="text-sm sm:text-base md:text-[44px] font-normal leading-relaxed sm:leading-relaxed md:leading-[63.84px]">
          We are a leading company in the real estate sector, specializing in
          providing a wide range of services and solutions to meet the needs of
          buying, renting, and managing real estate assets.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="w-full mt-8">
        <div className="relative w-full h-12 px-2 sm:px-6">
          {/* Horizontal line */}
          <div className="absolute left-2 sm:left-6 right-2 sm:right-6 top-1/2 h-[2px] bg-[#3D3A37] transform -translate-y-1/2" />

          {/* Left marker */}
          <div className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-medium text-[#3D3A37]">
              Meaning
            </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>

          {/* Center marker */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-medium text-[#3D3A37]">
              Symbolism
            </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>

          {/* Right marker */}
          <div className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-medium text-[#3D3A37] whitespace-nowrap">
              360 Approach
            </div>
            <div className="w-3 h-3 rounded-full bg-[#3D3A37]" />
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="w-full mt-12">
        <p className="text-xl sm:text-2xl md:text-[60px] font-semibold leading-relaxed sm:leading-relaxed md:leading-[96px]">
          We are a leading company in the real estate sector, specializing in
          providing a wide range of services and solutions to meet the needs of
          buying, renting, and managing real estate assets.
        </p>
      </section>
    </main>
  );
}
