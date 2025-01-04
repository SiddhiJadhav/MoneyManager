import { useContext, useEffect, useState } from 'react';
import BarChart from './BarChart';
import { FinanceContext } from '../pages/Dashboard';
import DoughnutChart from './DoughnutChart';
import filterFinanceForChart from '../features/financeData/filterFinanceForChart';
import DatePicker from 'react-datepicker';

export default function Stats() {
  const { setShowStat, isLoading, finance, showYear, setshowYear } =
    useContext(FinanceContext);
  debugger;
  const [filterYear, setfilterYear] = useState(new Date().getFullYear());
  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseArray, setExpenseArray] = useState([]);
  const [totalIncomeAmount, settotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, settotalExpenseAmount] = useState(0);

  useEffect(() => {
    const [totalIncome, incomeData, totalExpense, expenseData] =
      filterFinanceForChart(finance, filterYear);
    debugger;
    settotalIncomeAmount(totalIncome);
    settotalExpenseAmount(totalExpense);
    setIncomeArray(incomeData);
    setExpenseArray(expenseData);
  }, [filterYear, finance]);

  useEffect(() => {
    setfilterYear(new Date(new Date(showYear?.toString())).getFullYear());
  }, [showYear]);

  function handleCloseModal(e) {
    if (e.target.id == 'modal') setShowStat(false);
  }

  const renderYearContent = year => {
    return <span>{year}</span>;
  };

  return (
    <div
      className="z-50 bg-slate-500/50 tran fixed w-full h-full top-0 left-0"
      id="modal"
      onClick={e => handleCloseModal(e)}
    >
      <div className="m-auto w-3/4 bg-slate-100 py-4 flex flex-col items-center my-12 rounded-xl">
        <div className="bg-slate-300 p-3 flex flex-col grow w-full justify-center items-center gap-2 ">
          <div className="text-4xl font-bold text-slate-700">
            Finance Statistics {showYear}
          </div>
          <DatePicker
            selected={new Date(showYear?.toString())}
            renderYearContent={renderYearContent}
            showYearPicker
            dateFormat="yyyy"
            onChange={newDate => {
              setshowYear(new Date(newDate).getFullYear());
            }}
            className="border py-2 px-3  rounded-lg font-semibold w-24 text-center"
          />
        </div>
        <div className="m-auto w-full bg-slate-100 flex flex-row items-center my-8 rounded-xl">
          <div className="basis-3/4 p-10">
            <BarChart income={incomeArray} expense={expenseArray} />
          </div>
          <div className="basis-1/4 p-10">
            <DoughnutChart
              income={totalIncomeAmount}
              expense={totalExpenseAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
