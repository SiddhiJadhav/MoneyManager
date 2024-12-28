import { useNavigate } from 'react-router-dom';

export default function AnchorTag({ text, href }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(href);
  }
  return (
    <a onClick={handleClick} className="text-xs w-full text-center">
      {text}
    </a>
  );
}
