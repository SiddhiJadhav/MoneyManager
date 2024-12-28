export default function TdComponent({ children }) {
  return (
    <td className="border-slate-700 max-w-40 w-40 p-3 text-xl text-center font-semibold rounded-lg text-wrap break-words">
      {children}
    </td>
  );
}
