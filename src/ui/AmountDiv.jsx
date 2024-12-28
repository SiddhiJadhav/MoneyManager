import Spinner from './Spinner';

export default function AmountDiv({ isLoading, displayAmount, type }) {
  let amountColor = 'bg-slate-300';
  if (type) {
    if (type == 'Income') {
      amountColor = 'bg-green-300';
    } else if (type == 'Expence') {
      amountColor = 'bg-red-300';
    }
  }
  return (
    <div
      className={`mb-3 p-2 text-5xl text-gray-700 font-extrabold text-center rounded-md ${amountColor}`}
    >
      {isLoading ? (
        <Spinner />
      ) : type == 'Total' ? (
        displayAmount
      ) : (
        `${displayAmount}`
      )}
    </div>
  );
}
