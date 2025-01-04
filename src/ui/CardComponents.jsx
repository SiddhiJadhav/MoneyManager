import Card from './Card';

export default function CardComponents() {
  return (
    <div className="flex justify-evenly align-middle my-7">
      <Card type="Income" key="Income" />
      <Card type="Expense" key="Expense" />
      <Card type="Total" key="Total" />
    </div>
  );
}
