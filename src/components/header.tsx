import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const categories = [
  "Stock Video",
  "Video Templates",
  "Music",
  "Sound Effects",
  "Graphic Templates",
  "Graphics",
  "Presentation Templates",
  "Photos",
  "Fonts",
  "Add-ons",
  "Web Templates",
];

const Header = (props: Props) => {
  return (
    <header className="border-b pt-4 border-border w-full flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-1">
            <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-blue-600">
              <Settings className="text-white" />
            </div>
            <h1 className="font-extrabold text-xl">ZinTools</h1>
          </div>
          <div>
            <div className="bg-gray-100 flex items-center justify-between py-2 rounded-full px-5 w-[500px] h-12">
              <input
                className="bg-transparent p-1 focus:outline-none border-r border-border w-full"
                placeholder="Search for Movies, TV Show, Themes & Cast"
              ></input>
              <Image
                src="/search-icon.svg"
                alt=""
                className="ml-8 mr-1"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 font-bold">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-400">
              Sign up
            </button>
          </div>
        </div>
        <div className="mt-2 flex gap-8">
          {categories.map((cat: string) => {
            return (
              <Link
                className="text-xs font-bold py-5 border-b border-b-transparent hover:border-blue-600"
                href="/"
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
