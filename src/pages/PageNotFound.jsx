import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  function moveBack() {
    console.log('Move back');
    navigate(-1);
  }
  return (
    <main>
      <div>
        <h3>The page you are looking for could not be found 😢</h3>
        <button onClick={() => moveBack()} size="large">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
