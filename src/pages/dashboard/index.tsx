import AddToPortfolioButton from "./components/AddToPortfolioButton";
import useDashboardViewModel from "./dashboardViewModel";

const Dashboard = () => {
  const { cryptocurrencyList } = useDashboardViewModel();

  return (
    <div>
      <div className="relative overflow-x-auto w-5/6 mx-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Crypto
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Price (฿)
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {cryptocurrencyList.map((crypto, index) => (
              <tr key={index} className="border-b bg-gray-800 border-gray-700">
                <td>
                  <div className="flex flex-row space-x-2 px-4">
                    <img
                      src={crypto.logo}
                      alt={`${crypto.name} logo`}
                      className="bg-white rounded-full w-[40px] h-[40px]"
                    />
                    <div className="my-auto">{crypto.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  {crypto.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">{crypto.market_cap.toFixed(2)}</td>
                <td className="px-6">
                  <AddToPortfolioButton crypto={crypto} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
