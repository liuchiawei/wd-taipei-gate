import MainItem from "../common/mainItem";
import data from "@/data/content.json";

export default function Main() {
  return (
    <main className="flex flex-col gap-4 items-center w-full max-w-6xl mx-auto">
      {data.gates.map((gate) => (
        <MainItem key={gate.name} data={gate} />
      ))}
    </main>
  );
}