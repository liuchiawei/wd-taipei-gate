import data from "@/data/content.json";
import ScrollDown from "@/components/common/scrollDown";
import Avatar from "@/components/common/avatar";

export default function Header() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-12 relative">
      <h1 className="text-5xl md:text-[96px] font-title mb-12">{data.header.title}</h1>
      <Avatar text={data.header.subtitle} />
      <p className="w-full mt-6 max-w-lg text-sm text-justify font-maru">{data.header.description}</p>
      <ScrollDown />
    </div>
  );
}