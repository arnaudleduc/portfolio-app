import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style/main.css'
import App from './routes/App'
import ErrorPage from './ErrorPage'
import Contact from './routes/Contact'
import Experiences from './routes/Experiences'
import './i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/",
    element: <Contact />
  },
  {
    path: "experiences/",
    element: <Experiences />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)