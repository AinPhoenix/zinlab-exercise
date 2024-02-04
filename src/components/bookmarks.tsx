import { Bookmarks as BookmarksData } from "@/constants/bookmarks";
import Image from "next/image";
import React from "react";
import ItemCard from "./item-card";

type Props = {};

const Bookmarks = (props: Props) => {
  return (
    <div className="container">
      <div className="mt-10">
        <div>
          <h2 className="font-bold text-3xl mb-6">Your Bookmarks</h2>
          <div className="flex gap-6">
            {BookmarksData.map((bookmark) => {
              return <ItemCard item={bookmark} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
