import { MoonIcon, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#f1f3f4]">
      <div className="container flex gap-8 py-8">
        <div className="font-semibold">Follow us</div>
        <Image src="/youtube.svg" alt="" width={24} height={24} />
        <Image src="/twitter.svg" alt="" width={24} height={24} />
        <Image src="/facebook.svg" alt="" width={24} height={24} />
      </div>

      <div className="flex flex-wrap container items-start gap-2 py-10 border-t gap-y-8 border-t-border">
        <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
          <h3 className="pb-6 text-base font-semibold text-black">
            Internal Links
          </h3>
          <ul className="flex flex-col">
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Documentaries
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Themes
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome casts
              </div>
            </li>
          </ul>
        </div>
        <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
          <h3 className="pb-6 text-base font-semibold text-black">
            Enterprise
          </h3>
          <ul className="flex flex-col">
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Download Chrome Browser
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome Browser for Enterprise
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome Browser Devices
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                ChromeOS
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Google Cloud
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Google Workspace
              </div>
            </li>
          </ul>
        </div>

        <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
          <h3 className="pb-6 text-base font-semibold text-black">
            Internal Links
          </h3>
          <ul className="flex flex-col">
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Documentaries
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Themes
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome casts
              </div>
            </li>
          </ul>
        </div>
        <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
          <h3 className="pb-6 text-base font-semibold text-black">
            Enterprise
          </h3>
          <ul className="flex flex-col">
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Download Chrome Browser
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome Browser for Enterprise
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome Browser Devices
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                ChromeOS
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Google Cloud
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Google Workspace
              </div>
            </li>
          </ul>
        </div>

        <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
          <h3 className="pb-6 text-base font-semibold text-black">
            Internal Links
          </h3>
          <ul className="flex flex-col">
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Documentaries
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Themes
              </div>
            </li>
            <li>
              <div className="block py-2 leading-6 text-[#4B4B4B] hover:text-black">
                Chrome casts
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between container py-6 border-t-border border-t">
        <div className="flex gap-8 items-center">
          <div className="flex items-center justify-center gap-1">
            <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-blue-600">
              <Settings className="text-white" />
            </div>
            <h1 className="font-extrabold text-xl">ZinTools</h1>
          </div>

          <div className="flex gap-8 text-sm">
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              Privacy
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              Policy Terms and conditions
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              Cookies
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              Policy
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              About us
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              EULA
            </div>
            <div className="text-sm cursor-pointer text-[#4B4B4B] hover:text-black hover:underline underline-offset-4">
              Contact
            </div>
          </div>
        </div>

        <div>
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#DEDEDE]">
            <MoonIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
