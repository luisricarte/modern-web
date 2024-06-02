import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';

import {Home} from './routes/Home';
import { Contacts } from "./routes/Contacts";
import {ErrorPage} from './routes/ErrorPage';
import { ContactDetails } from './routes/ContactDetails';
const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      },
      {
        path: "/contacts/:id",
        element: <ContactDetails />
      },
      {
        path: "oldcontact",
        element: <Navigate to="/contact"/>
      }
    ]}
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

