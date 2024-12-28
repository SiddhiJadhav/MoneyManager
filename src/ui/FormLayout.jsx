export default function FormLayout({ children, onSubmit, classes }) {
  return (
    <form onSubmit={onSubmit} className={classes}>
      {children}
    </form>
  );
}
