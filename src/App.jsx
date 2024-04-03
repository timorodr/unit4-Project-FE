
import './App.css'
import { Outlet } from 'react-router-dom'




function App() {

  return (
    <div className='App'>
      <Outlet/>
    </div>
  )
}

export default App
// import { Link, Outlet, useNavigate } from 'react-router-dom'
// import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
 
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
 
// export default function App() {
//   const navigate = useNavigate();
  
//   return (
//     <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
//       <header className="header">
//         <div>
//           <div>
//             <p>Clerk + React + React Router App</p>
//           </div>
//           <SignedIn>
//             <UserButton afterSignOutUrl='/sign-in' />
//           </SignedIn>
//           <SignedOut>
//             <Link to="/sign-in">Sign In</Link>
//           </SignedOut>
//         </div>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </ClerkProvider>
//   )
// }