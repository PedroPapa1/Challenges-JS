export function salesSummaryByVendor() {
  const sales = [
    {
      vendor: "Pedro",
      value: 400,
    },
    {
      vendor: "Jorge",
      value: 200,
    },
    {
      vendor: "Lucas",
      value: 500,
    },
    {
      vendor: "Pedro",
      value: 600,
    },
    {
      vendor: "Jorge",
      value: 200,
    },
    {
      vendor: "Lucas",
      value: 100,
    },
  ];
  const totalSales = {};

  sales.forEach(({ vendor, value }) => {
    totalSales[vendor] = totalSales[vendor] ? totalSales[vendor] + value : value;
  });
  console.log(JSON.stringify(totalSales));
}
salesSummaryByVendor();
