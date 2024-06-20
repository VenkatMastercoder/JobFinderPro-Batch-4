/* eslint-disable no-unused-vars */
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Help from "./component/Help/Help";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Login from "./component/Login/Login";

// Tailwind
const paragraphElement = <p className="bg-green-500">Hello World</p>; // React Element

// External CSS
const heading = <h1 className="para">Heading</h1>;

// Inline CSS
const spanElement = <span style={{ color: "red" }}>Inline css</span>;

/**
 * Hooks
 *  - Its an NorMAL Js Function dev by React Dev
 *
 * - useState() - 80%
 * - useEffect() - 20%
 *
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/offer",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
