import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Toaster position='top-right'/>
  </StrictMode>,
)
