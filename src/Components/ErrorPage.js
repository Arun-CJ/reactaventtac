import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      404 Page not found! Go <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
