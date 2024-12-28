/* eslint-disable react/prop-types */
import { useContext } from 'react';
import getDate from '../utils/Date';
import Spinner from './Spinner';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FinanceContext } from '../pages/Dashboard';

export default function Tables({ show = 'total', data, isLoading }) {
  const { setShowForm, setFormtype, setisEditForm, setEditFormData } =
    useContext(FinanceContext);

  if (isLoading) return <Spinner />;
  return (
    <table className="border-separate border-spacing-1 border border-slate-500 ...">
      <thead>
        <tr>
          <th className="border border-slate-600 ...">Date</th>
          <th className="border border-slate-600 ...">Amount</th>
          <th className="border border-slate-600 ...">Account</th>
          <th className="border border-slate-600 ...">Category</th>
          <th className="border border-slate-600 ...">Description</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(entry => {
          return (
            <tr key={entry.id}>
              <td className="border border-slate-700 ...">
                {getDate(entry.created_at)}
              </td>
              <td className="border border-slate-700 ...">{entry.amount}</td>
              <td className="border border-slate-700 ...">{entry.account}</td>
              <td className="border border-slate-700 ...">{entry.category}</td>
              <td className="border border-slate-700 ...">
                {entry.description}
              </td>
              <td className=" flex gap-2 border border-slate-700 ...">
                <button
                  onClick={() => {
                    setEditFormData({
                      ...entry,
                      created_at: new Date(entry.created_at)
                        .toISOString()
                        .slice(0, 10)
                        .split('/')
                        .reverse()
                        .join('-'),
                    });
                    setisEditForm(true);
                    setFormtype(entry.isIncome ? 'Income' : 'Expence');
                    setShowForm(true);
                  }}
                >
                  <MdEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
