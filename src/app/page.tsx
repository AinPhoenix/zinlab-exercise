import Bookmarks from "@/components/bookmarks";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SliderSection from "@/components/slider-section";
import {
  ConvertFromPDFList,
  ConvertToPDFList,
  ImagetoolsList,
  OrganizePDFList,
  ProtectPDFList,
} from "@/constants/pdf-slider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="my-10">
        <Bookmarks />
        <SliderSection title="Convert To PDF" items={ConvertToPDFList} />
        <SliderSection title="Convert from PDF" items={ConvertFromPDFList} />
        <SliderSection title="Organize PDF" items={OrganizePDFList} />
        <SliderSection title="Protect PDF" items={ProtectPDFList} />
        <SliderSection title="Image Tools" items={ImagetoolsList} />
      </div>
      <Footer />
    </main>
  );
}
