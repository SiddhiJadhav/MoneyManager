export default function RoundedBtn({ children, onClick }) {
  return (
    <div onClick={onClick} className="p-1.5 m-0 rounded-xl border border-black">
      {children}
    </div>
  );
}
