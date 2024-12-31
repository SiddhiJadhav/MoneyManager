/* eslint-disable react/prop-types */
import { useContext } from 'react';
import getDate from '../utils/Date';
import Spinner from './Spinner';
import { MdEdit, MdDelete, MdOutlineCreditCardOff } from 'react-icons/md';
import { FinanceContext } from '../pages/Dashboard';
import THeadComponent from './THeadComponent';
import TrowComponent from './TrowComponent';
import ThComponent from './ThComponent';
import TBodyComponent from './TBodyComponent';
import TdComponent from './TdComponent';
import { useDeleteFinanceData } from '../features/financeData/useDeleteFinance';
import RoundedBtn from './RoundedBtn';

export default function Tables({ show = 'total', data, isLoading }) {
  const { setShowForm, setFormtype, setisEditForm, setEditFormData } =
    useContext(FinanceContext);
  const { deleteFianance } = useDeleteFinanceData();

  function handleDelete(id) {
    deleteFianance(id);
  }

  if (isLoading) return <Spinner />;
  if (data.length == 0)
    return (
      <div className="flex flex-col justify-around items-center">
        <MdOutlineCreditCardOff className="h-64 w-64 m-4 text-slate-800" />
        <p className=" mb-8 text-4xl font-semibold text-slate-800">
          No data available
        </p>
      </div>
    );
  return (
    <table className="border-8 border-white border-separate border-spacing-1 rounded-lg">
      <THeadComponent>
        <TrowComponent type="header">
          <ThComponent header="Date" />
          <ThComponent header="Amount" />
          <ThComponent header="Account" />
          <ThComponent header="Category" />
          <ThComponent header="Description" />
          <ThComponent header="Actions" />
        </TrowComponent>
      </THeadComponent>
      <TBodyComponent>
        {data?.map(entry => {
          return (
            <TrowComponent type={entry.isIncome} key={entry.id}>
              <TdComponent>{getDate(entry.created_at)}</TdComponent>
              <TdComponent>{entry.amount}</TdComponent>
              <TdComponent>{entry.account}</TdComponent>
              <TdComponent>{entry.category}</TdComponent>
              <TdComponent>{entry.description}</TdComponent>
              <TdComponent>
                <div className="flex justify-evenly">
                  <RoundedBtn
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
                      setFormtype(entry.isIncome ? 'Income' : 'Expense');
                      setShowForm(true);
                    }}
                  >
                    <MdEdit />
                  </RoundedBtn>
                  <RoundedBtn onClick={() => handleDelete(entry.id)}>
                    <MdDelete />
                  </RoundedBtn>
                </div>
              </TdComponent>
            </TrowComponent>
          );
        })}
      </TBodyComponent>
    </table>
  );
}
