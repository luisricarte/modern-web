import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import {UseState} from './routes/Hooks/UseState';
import { Contacts } from "./routes/Contacts";
import {ErrorPage} from './routes/ErrorPage';
import { ContactDetails } from './routes/ContactDetails';
import { UseEffect } from './routes/Hooks/UseEffect';
import { UseRef } from './routes/Hooks/UseRef';
import { UseReducer } from './routes/Hooks/UseReducer';
import { UseContext } from './routes/Hooks/UseContext';
import { UseMemo } from './routes/Hooks/UseMemo';
import { UseCallBack } from './routes/Hooks/UseCallBack';
import { UseLayoutEffect } from './routes/Hooks/UseLayoutEffect';
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
        path: "/useEffect",
        element: <UseEffect/>
      },
      {
        path: "/useRef",
        element: <UseRef/>
      },
      {
        path: "/useReducer",
        element: <UseReducer/>
      },
      {
        path: "/useContext",
        element: <UseContext/>
      },
      {
        path: "/useMemo",
        element: <UseMemo/>
      },
      {
        path: "/useCallback",
        element: <UseCallBack/>
      },
      {
        path: "/useLayoutEfect",
        element: <UseLayoutEffect/>
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

