import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader, showLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from './actions'
// import SignInPage from './pages/Signin'
// import SignUpPage from './pages/Signup'

// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            {/* <Route path="/signin" element={<SignInPage/>}/> */}
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='budget/:id' element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router