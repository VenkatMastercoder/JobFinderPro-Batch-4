import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {error.statusText}
      {error.status}
    </>
  );
};

export default ErrorPage;
