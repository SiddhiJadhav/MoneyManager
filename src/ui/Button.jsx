export default function Button({ text, isLoading, formType, onClick }) {
  let btnText = text;
  if (formType) {
    btnText = formType == 'login' ? 'Login' : 'Sign Up';
  }

  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className="block hover:bg-teal-dark text-white uppercase text-lg font-semibold rounded-md my-2 mx-auto p-2 w-full bg-blue-400"
    >
      {btnText}
    </button>
  );
}
