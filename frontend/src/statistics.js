import React, { useEffect, useState } from "react";

const Statistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/statistics?month=${selectedMonth}`
        );
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="pb-5">
      <div className="font-bold text-black text-4xl text-center m-5">
        Statistics - {selectedMonth}
      </div>

      <div className="flex justify-center m-5">
        <div className="container max-w-full md:max-w-2xl p-4 bg-[#f8df8c] rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Total Sale Amount</h3>
              <p className="text-xl font-bold">{statistics.totalSaleAmount}</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Total Sold Items</h3>
              <p className="text-xl font-bold">{statistics.totalSoldItems}</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Total Not Sold Items
              </h3>
              <p className="text-xl font-bold">
                {statistics.totalNotSoldItems}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
