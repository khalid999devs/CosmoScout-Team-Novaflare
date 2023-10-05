import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Planets from './Pages/Planets.jsx';
import SinglePlanet from './Pages/SinglePlanet.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },

      {
        path: '/:id/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/planets',
        element: <Planets />,
      },
      {
        path: '/planets/:planetId',
        element: <SinglePlanet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
