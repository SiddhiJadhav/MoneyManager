import { useContext, useEffect, useState } from 'react';
import Tables from './../../ui/Tables';
import { FinanceContext } from '../../pages/Dashboard';
import FilterComponent from './FilterComponent';
import filterFinance from './filterFinance';

export default function FinanceDataTable() {
  const { isLoading, error, finance, showYear, setshowYear } =
    useContext(FinanceContext);
  const [filterMonth, setFilterMonth] = useState(
    new Date(showYear?.toString())
  );
  const [filterFinanceData, setFilterFinanceData] = useState(finance);
  const [isApplied, setIsApplied] = useState(false);
  const [isStateChnaged, setisStateChnaged] = useState(false);
  const [searchByDesc, setSearchByDesc] = useState('');

  useEffect(() => {
    const filteredData = filterFinance(finance, filterMonth, searchByDesc);
    setFilterFinanceData(filteredData);

    //Setting year
    setshowYear(new Date(filterMonth).getFullYear());

    if (searchByDesc != '') {
      setIsApplied(true);
    }
  }, [filterMonth, searchByDesc]);

  useEffect(() => {
    if (isApplied) {
      const filteredData = filterFinance(finance, filterMonth, searchByDesc);
      setFilterFinanceData(filteredData);
    } else {
      // setFilterFinanceData(finance);
    }
  }, [isApplied]);

  useEffect(() => {
    setFilterMonth(new Date(new Date(showYear?.toString())));
  }, [showYear]);

  return (
    <div className="bg-white rounded-xl shadow-2xl w-90">
      <FilterComponent
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
        isApplied={isApplied}
        setIsApplied={setIsApplied}
        isStateChnaged={isStateChnaged}
        setisStateChnaged={setisStateChnaged}
        searchByDesc={searchByDesc}
        setSearchByDesc={setSearchByDesc}
        setshowYear={setshowYear}
      />
      <Tables show="total" data={filterFinanceData} isLoading={isLoading} />
    </div>
  );
}
