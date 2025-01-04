export default function filterFinance(financeData, filterDate, desc) {
  const month = new Date(filterDate).getMonth();
  const year = new Date(filterDate).getFullYear();

  const filterFinanceData = financeData.filter(entry => {
    return (
      new Date(entry.created_at).getFullYear() == year &&
      new Date(entry.created_at).getMonth() == month
    );
  });

  if (desc == '') return filterFinanceData;

  const filterFinanceDataWithDesc = filterFinanceData.filter(entry => {
    return entry.description.toLowerCase().includes(desc.toLowerCase());
  });

  return filterFinanceDataWithDesc;
}
