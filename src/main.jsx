import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from "./router.jsx"
// import { ClerkProvider } from '@clerk/clerk-react'


// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
