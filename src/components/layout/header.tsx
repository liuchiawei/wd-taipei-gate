import data from "@/data/content.json";

export default function Header() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-12">
      <h1 className="text-5xl md:text-[96px] font-title mb-12">{data.header.title}</h1>
      <h2 className="text-lg font-maru">{data.header.subtitle}</h2>
      <p className="w-full mt-4 max-w-lg text-sm text-justify font-maru">{data.header.description}</p>
    </div>
  );
}