import DatePicker from 'react-datepicker';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import FormLayout from '../../ui/FormLayout';
import { Controller, useForm } from 'react-hook-form';
import { MdOutlineClear } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export default function FilterComponent({
  filterMonth,
  setFilterMonth,
  isApplied,
  setIsApplied,
  isStateChnaged,
  setisStateChnaged,
  searchByDesc,
  setSearchByDesc,
}) {
  function handleSearchClick(e) {
    debugger;
    if (isApplied) {
      setSearchByDesc('');
      setIsApplied(false);
    } else {
      setIsApplied(true);
    }
  }

  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <div className="bg-slate-500 p-3 flex justify-end gap-3">
      <DatePicker
        name="filterDate"
        selected={filterMonth}
        renderMonthContent={renderMonthContent}
        showMonthYearPicker
        dateFormat="MM/yyyy"
        onChange={newDate => {
          setFilterMonth(newDate);
        }}
        className="border py-2 px-3 text-grey-darkest rounded-lg font-semibold w-24"
      />

      <input
        type="text"
        id="searchByDesc"
        value={searchByDesc}
        onChange={e => setSearchByDesc(e.target.value)}
        className="border py-2 px-3 text-grey-darkest rounded-lg static font-semibold"
      />
      {searchByDesc != '' && (
        <button
          onClick={e => handleSearchClick(e)}
          className="z-10 absolute px-4 py-3"
        >
          <ImCross />
        </button>
      )}
    </div>
  );
}
