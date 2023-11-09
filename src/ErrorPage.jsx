import { useRouteError } from "react-router-dom";
import './style/contact.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">
        <button>
          Go back to main page
        </button>
      </a>

    </div>
  );
}