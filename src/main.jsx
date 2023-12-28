import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import ErrorPage from "./pages/Error.jsx";
import ProductPage from "./pages/Products.jsx";
import { ProfileFile } from "./pages/Profile.jsx";
import { ProductDetailPage } from "./pages/DetailPrduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./assets/attomic design/context/DarkMode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Products",
    element: <ProductPage />,
  },
  {
    path: "/Profile",
    element: <ProfileFile />,
  },
  {
    path: "/Product/:id",
    element: <ProductDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
