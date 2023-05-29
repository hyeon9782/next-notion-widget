import HeatMapChart from "@/components/charts/HeatMapChart";

export default function Home() {
  const heatmapData = [
    { x: "Category 1", y: "January", value: 10 },
    { x: "Category 1", y: "February", value: 15 },
    // Add more data objects as needed
  ];
  return (
    <section>
      <HeatMapChart data={heatmapData} />
    </section>
  );
}
