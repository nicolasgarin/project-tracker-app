import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, createBrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/pages/Home';

const router = createBrowserRouter([
  {
    path: "/project-tracker/",
    element: <App />,
    children: [
      {
        path: "/project-tracker/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
