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
import SinglePlanetScape from './Pages/SinglePlanetScape.jsx';
import Itinerary from './Pages/Itinerary.jsx';
import SingleMoon from './Pages/SingleMoon.jsx';

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
      {
        path: '/moons/:moonId',
        element: <SingleMoon />,
      },
      {
        path: '/scapes/:planetId',
        element: <SinglePlanetScape />,
      },

      {
        path: '/itinerary',
        element: <Itinerary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
