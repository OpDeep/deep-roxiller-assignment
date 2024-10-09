import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const PieChart = ({ selectedMonth }) => {
  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Sales Distribution by Category",
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Green
          "#9966FF", // Purple
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "#FF6384AA", // Hover Red
          "#36A2EBAA", // Hover Blue
          "#FFCE56AA", // Hover Yellow
          "#4BC0C0AA", // Hover Green
          "#9966FFAA", // Hover Purple
        ],
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/pieChart?month=${selectedMonth}`
        );
        const data = await response.json();

        const labels = data.map((item) => item.category);
        const percentages = data.map((item) => item.percentage);

        setPieChartData({
          labels,
          datasets: [
            {
              ...pieChartData.datasets[0],
              data: percentages,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchPieChartData();
  }, [selectedMonth]);

  return (
    <div className="m-5">
      <div className="font-bold text-black text-4xl text-center my-8">
        Pie Chart Stats - {selectedMonth}
      </div>

      <div className="bg-[#f8df8c] p-6 rounded-lg shadow-md max-w-lg mx-auto">
        {pieChartData ? (
          <Pie
            data={pieChartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "right",
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
              responsive: true,
              maintainAspectRatio: false,
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

export default PieChart;
