import React from 'react';

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <table className="w-full flex flex-row text-sm md:text-base flex-no-wrap sm:bg-white sm:shadow-lg my-5 text-slate-800 overflow-hidden">
      <thead className="text-white rounded-lg">
        <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-bl-lg rounded-tl-lg mb-2 sm:mb-0">
          <th className="p-2 md:p-3 text-center">Logo</th>
          <th className="p-2 md:p-3 text-center">Name</th>
          <th className="p-2 md:p-3 text-center">Symbol</th>
          <th className="p-2 md:p-3 text-center">Price</th>
          <th className="p-2 md:p-3 text-center text-[0.72rem] md:text-base">
            Price Change
          </th>
          <th className="p-2 md:p-3 text-center text-[0.72rem] md:text-base">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap bg-white rounded-tr-lg rounded-br-lg sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light flex justify-center rounded-tr-lg md:rounded-none items-center border hover:bg-gray-100 p-2 md:p-3">
            <img src={image} alt={name} className="w-5 h-5 md:w-10 md:h-10" />
          </td>
          <td className="border-grey-light text-center border hover:bg-gray-100 p-2 md:p-3 truncate">
            <span className="text-sky-500">{name}</span>
          </td>
          <td className="border-grey-light text-center border hover:bg-gray-100 p-2 md:p-3">
            <span>{symbol.toUpperCase()}</span>
          </td>
          <td className="border-grey-light text-center border hover:bg-gray-100 p-2 md:p-3 truncate hover:font-medium cursor-pointer">
            <span>$ {price.toLocaleString()}</span>
          </td>
          <td className="border-grey-light text-center cursor-pointer border hover:bg-gray-100 p-2 md:p-3 truncate">
            <span
              className={
                priceChange > 0
                  ? "text-green-400 hover:text-green-600"
                  : "text-red-500 hover:text-red-600"
              }
            >
              {priceChange.toFixed(2)}
            </span>
          </td>
          <td className="border-grey-light text-center rounded-br-lg md:rounded-none border hover:bg-gray-100 p-2 md:p-3 truncate">
            <span>$ {marketCap.toLocaleString()}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Coin;