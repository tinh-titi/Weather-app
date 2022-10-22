import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CityWeather from './routes/CityWeather';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:city",
        element: <CityWeather />
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
