import MainItem from "../common/mainItem";
import data from "@/data/content.json";

export default function Main() {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      {data.gates.map((gate) => (
        <MainItem key={gate.name} data={gate} />
      ))}
    </div>
  );
}