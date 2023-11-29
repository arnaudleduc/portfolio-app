import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './routes/App'
import Contact from './routes/Contact'
import Experiences from './routes/Experiences'

import ErrorPage from './ErrorPage'

import './i18n'

import './style/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/experiences",
    element: <Experiences />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)