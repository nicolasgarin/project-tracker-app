import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { UserOptionsProvider } from './context/UserOptionsContext.jsx';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/project-tracker-app/",
    element: <App />,
    children: [
      {
        path: "/project-tracker-app/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserOptionsProvider>
      <DataProvider>
      <RouterProvider router={router} />
      </DataProvider>
    </UserOptionsProvider>
  </React.StrictMode>
);
