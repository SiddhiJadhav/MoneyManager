export default function filterFinanceForChart(financeData, filterDate) {
  const incomeArray = Array(12).fill(0);
  const expenseArray = Array(12).fill(0);

  const filterFinanceData = financeData.filter(entry => {
    return new Date(entry.created_at).getFullYear() == filterDate;
  });

  console.log(filterFinanceData);
  let totalIncome = 0;
  const incomeData = filterFinanceData.filter(entry => {
    return entry.isIncome;
  });

  let totalExpense = 0;
  const expenseData = filterFinanceData.filter(entry => {
    return !entry.isIncome;
  });

  incomeData.forEach(element => {
    if (incomeArray[new Date(element.created_at).getMonth()] == 0) {
      incomeArray[new Date(element.created_at).getMonth()] = element.amount;
    } else {
      incomeArray[new Date(element.created_at).getMonth()] += element.amount;
    }
    totalIncome += element.amount;
  });
  expenseData.forEach(element => {
    if (expenseArray[new Date(element.created_at).getMonth()] == 0) {
      expenseArray[new Date(element.created_at).getMonth()] = element.amount;
    } else {
      expenseArray[new Date(element.created_at).getMonth()] += element.amount;
    }
    totalExpense += element.amount;
  });
  return [totalIncome, incomeArray, totalExpense, expenseArray];
}
