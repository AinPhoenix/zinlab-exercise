import React from "react";
import Slider from "./slider";

type Props = {
  title: string;
  items: IItemCard[];
};

const SliderSection = ({ title, items }: Props) => {
  return (
    <div className="container">
      <div className="mt-10">
        <div>
          <h2 className="font-bold text-3xl mb-6">{title}</h2>

          <Slider items={items} />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
