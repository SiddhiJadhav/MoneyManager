export default function TrowComponent({ children, type }) {
  let rowColor = 'bg-slate-400';
  if (type == true) {
    rowColor = 'bg-green-300';
  } else if (type == false) {
    rowColor = 'bg-red-300';
  }

  return <tr className={rowColor}>{children}</tr>;
}
