import useDashboardViewModel from "./dashboardViewModel";

const Dashboard = () => {
  const { cryptocurrencyList } = useDashboardViewModel();

  console.log("cryptocurrencyList ", cryptocurrencyList);
  return (
    <div>
      <div className="relative overflow-x-auto w-5/6 mx-auto rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Coin
              </th>

              <th scope="col" className="px-6 py-3">
                Price (฿)
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptocurrencyList.map((crypto, index) => (
              <tr key={index} className="border-b bg-gray-800 border-gray-700">
                <td className="text-center flex flex-row justify-start py-2 space-x-2 px-4">
                  <img
                    src={crypto.logo}
                    alt={`${crypto.name} logo`}
                    className="bg-white rounded-full w-[40px] h-[40px]"
                  />
                  <div className="my-auto">{crypto.name}</div>
                </td>
                <td className="px-6 py-4">{crypto.price}</td>
                <td className="px-6 py-4">{crypto.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
