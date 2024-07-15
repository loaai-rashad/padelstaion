import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Calendar from './AdminCalendar.jsx'
import './index.css';


const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    errorElement:<div>404 Not Found</div>,
  },

  {
  path: '/AdminCalendar',
  element: <Calendar />,
  errorElement:<div>404 Not Found</div>,
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
);
