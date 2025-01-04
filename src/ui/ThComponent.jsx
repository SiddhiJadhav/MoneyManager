export default function ThComponent({ header }) {
  return (
    <th className="border-slate-600 w-56 p-3 text-xl rounded-lg uppercase">
      {header}
    </th>
  );
}
