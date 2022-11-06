import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginStudent from './auth/loginStudent';
import LoginCompany from './auth/loginCompany';
import SignupCompany from './auth/signupCompany';
import SignupStudent from './auth/signupStudent';

const router = createBrowserRouter([
  {
    path: "/logins",
    element: <LoginStudent />,
  },
  {
    path: "/loginc",
    element: <LoginCompany />,
  },
  {
    path: "/signs",
    element: <SignupStudent />,
  },
  {
    path: "/signc",
    element: <SignupCompany />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


