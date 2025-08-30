"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
  showNames = false,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forward"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "250s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller group relative z-20 max-w-7xl overflow-hidden px-4", // Added horizontal padding
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 sm:gap-8 md:gap-10 py-4", // Increased gap for large screens
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-[90px] sm:w-[130px] md:w-[200px] flex flex-col items-center justify-center group"
          >
            <div className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
              <img
                src={item.logo}
                alt={item.name}
                className="h-16 w-20 md:h-20 md:w-24 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* {showNames && (
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center justify-baseline leading-tight">
                  {item.name}
                </p>
              )} */}
            </div>
            {showNames && (
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center justify-baseline leading-tight min-h-[2.5rem]">
                {item.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
