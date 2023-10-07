import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import myCreateRoute from './Components/MainLayout/Route'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/PROVIDER/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <Helmet>
    Event management system
  </Helmet>
  <AuthProvider >
  <RouterProvider router={myCreateRoute} />
  </AuthProvider>
 
  </HelmetProvider>
  </React.StrictMode>,
)
