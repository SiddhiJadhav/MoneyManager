import { useContext } from 'react';
import { FinanceContext } from '../pages/Dashboard';
import Spinner from './Spinner';

export default function Card({ type }) {
  const { finance, isLoading, setShowForm, setFormtype } =
    useContext(FinanceContext);
  console.log(finance);

  let displayAmount = 0;
  let checkIsIncome = true;
  if (type == 'Income') {
    checkIsIncome = true;
  } else if (type == 'Expence') {
    checkIsIncome = false;
  }
  if (type == 'Total') {
    var totalIncome = finance
      ?.filter(entry => entry.isIncome == true)
      .reduce((acc, data) => (acc += data.amount), 0);

    var totalExpences = finance
      ?.filter(entry => entry.isIncome == false)
      .reduce((acc, data) => (acc += data.amount), 0);

    displayAmount = totalIncome - totalExpences;
  } else {
    displayAmount = finance
      ?.filter(entry => entry.isIncome == checkIsIncome)
      .reduce((acc, data) => (acc += data.amount), 0);
  }

  console.log(displayAmount);

  function handleClick() {
    setFormtype(type);
    setShowForm(true);
  }

  return (
    <>
      <div className="w-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {type}
        </h5>
        <p className="mb-3 text-5xl font-normal text-gray-700 dark:text-gray-400">
          {isLoading ? (
            <Spinner />
          ) : type == 'Total' ? (
            displayAmount
          ) : (
            `${checkIsIncome ? '+' : '-'}${displayAmount}`
          )}
        </p>
        {type != 'Total' && (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleClick()}
          >
            {`Add ${type}`}
          </button>
        )}
      </div>
    </>
  );
}
