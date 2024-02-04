"use client";

import { ArrowLeft, ArrowRight, MoveLeft } from "lucide-react";
import React, { useRef, useState } from "react";
import ItemCard from "./item-card";

type Props = {
  items: IItemCard[];
};

const Slider = ({ items }: Props) => {
  const leftScroll = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (leftScroll.current) {
      leftScroll.current.scrollLeft -= 500;
    }
  };
  const scrollRight = () => {
    if (leftScroll.current) {
      leftScroll.current.scrollLeft += 500;
    }
  };

  console.log(items);

  return (
    <div className="flex flex-col w-full relative">
      <div className="relative">
        <div
          className="carousel py-2 flex items-center justify-start overflow-x-auto scroll-smooth gap-6 scrollbar-hide"
          ref={leftScroll}
        >
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
        {items.length > 5 && (
          <>
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 flex items-center space-x-3 text-2xl cursor-pointer">
              <div
                onClick={scrollLeft}
                className="border-gray-700 rounded-full border-2 flex items-center justify-center h-8 w-8"
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 -right-5 flex items-center space-x-3 text-2xl cursor-pointer">
              <div
                onClick={scrollRight}
                className="border-gray-700 rounded-full border-2 flex items-center justify-center h-8 w-8"
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
