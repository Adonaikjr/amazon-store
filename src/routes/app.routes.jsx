import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import  App  from '../pages/home/App'
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='*' element={ <Error/> } />
        </Routes>
    )
}