import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const BarChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Items Sold by Price Range",
        backgroundColor: "rgba(108,229,232, 0.7)",
        borderColor: "rgba(108,229,232, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(108,229,10, 0.8)",
        hoverBorderColor: "rgba(108,229,10, 1)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/barChart?month=${selectedMonth}`
        );
        const data = await response.json();

        const labels = data.map((item) => item.range);
        const counts = data.map((item) => item.count);

        setBarChartData((prevData) => ({
          ...prevData,
          labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: counts,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]);

  return (
    <div className="m-5">
      <div className="font-bold text-black text-4xl text-center my-8">
        Bar Chart - {selectedMonth}
      </div>

      <div className="bg-[#f8df8c] p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        {barChartData ? (
          <Bar
            data={barChartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                  labels: {
                    font: {
                      size: 14,
                      weight: "bold",
                      family: "Arial",
                    },
                    color: "#333",
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Price Range",
                    font: {
                      size: 16,
                      weight: "600",
                    },
                    color: "#333",
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                    color: "#555",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Number of Items",
                    font: {
                      size: 16,
                      weight: "600",
                    },
                    color: "#333",
                  },
                  ticks: {
                    font: {
                      size: 12,
                    },
                    color: "#555",
                  },
                },
              },
            }}
          />
        ) : (
          <div className="text-center text-lg font-semibold">
            Loading chart data...
          </div>
        )}
      </div>
    </div>
  );
};

export default BarChart;
