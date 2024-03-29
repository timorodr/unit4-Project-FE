import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader, showLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='' element={<Index/>} loader={indexLoader}/>
            <Route path='budget/:id' element={<Show/>} loader={showLoader}/>
            <Route/>
            <Route/>
            <Route/>
        </Route>
    </>
))

export default router