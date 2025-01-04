import DatePicker from 'react-datepicker';

export default function Input({
  id,
  value,
  onChange,
  isLoading,
  errors,
  register,
  label,
  type,
  options,
}) {
  return (
    <>
      <div className="flex flex-col w-full">
        <label htmlFor={id} className="text-lg font-semibold text-slate-700">
          {label}
        </label>
        {type != 'select' && (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            disabled={isLoading}
            {...register(id, {
              required: 'This field is required',
            })}
            className="border py-2 px-3 text-grey-darkest rounded-lg font-semibold"
          />
        )}
        {type == 'select' && (
          <select
            id={id}
            disabled={isLoading}
            {...register(id, {
              required: 'This field is required',
            })}
            className="border py-2 px-3 text-grey-darkest rounded-lg font-semibold"
          >
            {options.map(function (opt) {
              return (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        )}

        <p>{errors?.message}</p>
      </div>
    </>
  );
}
