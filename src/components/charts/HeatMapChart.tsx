"use client";

import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

type Props = {
  data: [];
};

const HeatMapChart = ({ data }: Props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const options = {
        chart: {
          type: "heatmap",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],
        title: {
          text: "HeatMap Chart",
        },
        xaxis: {
          type: "category",
        },
        yaxis: {
          opposite: true,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      console.log(chart);

      if (!data) {
        return null; // 또는 로딩 상태를 렌더링할 수 있습니다.
      }
      chart.render();

      // Update chart data when props change
      chart.updateSeries([{ data }]);

      // Destroy chart instance on unmount
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={chartRef} />;
};

export default HeatMapChart;
