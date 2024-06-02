import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import {UseState} from './routes/UseState';
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
        path: "/useState",
        element: <UseState/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      },
      {
        path: "/contacts/:id",
        element: <ContactDetails />
      },
/*      {
        path: "oldcontact",
        element: <Navigate to="/"/>
      }
*/
    ]}
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

