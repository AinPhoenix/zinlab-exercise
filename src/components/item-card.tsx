import Image from "next/image";
import React from "react";

type Props = {
  item: IItemCard;
};

const ItemCard = ({ item }: Props) => {
  return (
    <div className="p-6 min-w-[240px] max-w-[240px] h-[211px] cursor-pointer border-border border rounded-lg hover:shadow-lg transition-all duration-500 ease-in-out">
      <Image src={item.image} alt="" width={65} height={65} />
      <h2 className="text-xl font-bold mt-4 text-[#121212]">{item.title}</h2>
      <p className="text-sm mt-3 text-[#3C3C4399]">{item.description}</p>
    </div>
  );
};

export default ItemCard;
