import React from "react";
import "./App.css";
import PerPage from "./perPage";

const TransactionTable = ({
  transactions,
  onNextPage,
  onPrevPage,
  page,
  selectedPerPage,
  onChange,
}) => {
  return (
    <div className="m-5">
      <div className="overflow-x-auto flex flex-col container max-w-full bg-[#f8df8c] rounded-xl shadow-lg my-10">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#ffda79]">
                <tr>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    ID
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Title
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Description
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Price
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Category
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Sold
                  </th>
                  <th className="text-sm font-semibold text-gray-900 px-6 py-4">
                    Image
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-[#fceabb] transition ease-in-out duration-150"
                  >
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {transaction._id}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal">
                      {transaction.title}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal">
                      {transaction.description}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {transaction.price}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      NA
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      YES
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      Not Available
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center font-bold mx-5 my-10 space-y-5 sm:space-y-0">
        <div>Page No: {page}</div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onPrevPage}
            className="px-4 py-2 bg-[#ff9f43] rounded-lg shadow-md hover:bg-[#ff793f] text-white transition duration-300"
          >
            Previous
          </button>
          <span>-</span>
          <button
            onClick={onNextPage}
            className="px-4 py-2 bg-[#ff9f43] rounded-lg shadow-md hover:bg-[#ff793f] text-white transition duration-300"
          >
            Next
          </button>
        </div>
        <div>
          <PerPage selectedPerPage={selectedPerPage} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
