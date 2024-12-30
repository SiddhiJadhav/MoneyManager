import { useContext } from 'react';
import { FinanceContext } from '../pages/Dashboard';
import Spinner from './Spinner';
import Button from './Button';
import AmountDiv from './AmountDiv';

export default function Card({ type }) {
  const { finance, isLoading, setShowForm, setFormtype } =
    useContext(FinanceContext);
  console.log(finance);

  let displayAmount = 0;
  let checkIsIncome = true;
  if (type == 'Income') {
    checkIsIncome = true;
  } else if (type == 'Expense') {
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
      <div className="w-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
          {type}
        </h5>

        <AmountDiv
          isLoading={isLoading}
          type={type}
          displayAmount={displayAmount}
          checkIsIncome={checkIsIncome}
        />
        {type != 'Total' && (
          <Button text={`Add ${type}`} onClick={() => handleClick()} />
        )}
      </div>
    </>
  );
}
