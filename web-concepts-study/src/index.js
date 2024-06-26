import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import {UseState} from './routes/Hooks/UseState';
import {ErrorPage} from './routes/ErrorPage';
import { UseEffect } from './routes/Hooks/UseEffect';
import { UseRef } from './routes/Hooks/UseRef';
import { UseReducer } from './routes/Hooks/UseReducer';
import { UseContext } from './routes/Hooks/useContext/UseContext';
import { UseMemo } from './routes/Hooks/UseMemo';
import { UseCallBack } from './routes/Hooks/useCallback/UseCallBack';
import { UseLayoutEffect } from './routes/Hooks/UseLayoutEffect';
import { Hooks } from './routes/Hooks/Hooks';
import { ProviderPattern } from './routes/Pattern/ProviderPattern';
import { AxiosPage } from './pages/Axios/server';
import { AdapterPattern } from './routes/Pattern/AdapterPattern';
import { DependencyInjection } from './routes/Pattern/DependencyInjection';
import { Asynchronous } from './routes/AssincronousJavaScript/Asynchronous';
import { Nest } from './routes/NestLearning/Nest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/webHooks",
        element: <Hooks/>
      },
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
        path: "/useLayoutEffect",
        element: <UseLayoutEffect/>
      },
      {
        path: "providerPattern",
        element: <ProviderPattern/>
      },
      {
        path: '/adapterPattern',
        element: <AdapterPattern/>
      },
      {
        path: '/dependencyInjection',
        element: <DependencyInjection/>
      },
      {
        path: '/dependencyInjection',
        element: <DependencyInjection/>
      },
      {
        path: '/asynchronous',
        element: <Asynchronous/>
      },
      {
        path: '/nestLearning',
        element: <Nest/>
      },
    ]},
    {
      path:'/axios',
      element: <AxiosPage/>
      //subir backend no path modern-web/axios
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

