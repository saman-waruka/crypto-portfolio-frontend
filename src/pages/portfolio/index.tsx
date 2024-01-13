import usePortfolioViewModel from "./portfolioViewModel";

const Portfolio = () => {
  const { portfolioList } = usePortfolioViewModel();

  return (
    <div>
      <div className="text-2xl px-2 py-10 text-center">Portfolio</div>
      <div className="relative overflow-x-auto w-5/6 mx-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Crypto
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Total buy price
              </th>

              <th scope="col" className="px-6 py-3">
                Profit/loss
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioList.map((portfolio, index) => (
              <tr key={index} className="border-b bg-gray-800 border-gray-700">
                <td>
                  <div className="flex flex-row space-x-2 px-4">
                    <img
                      src={portfolio.logo}
                      alt={`${portfolio.name} logo`}
                      className="bg-white rounded-full w-[40px] h-[40px]"
                    />
                    <div className="my-auto">{portfolio.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">{portfolio.amount}</td>
                <td className="px-6 py-4">{portfolio.total_price}</td>
                <td
                  className={`px-6 py-4 ${
                    portfolio.profit > 0 ? " text-green-600" : "text-red-600"
                  }`}
                >
                  {portfolio.profit?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
