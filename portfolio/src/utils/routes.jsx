// routes.jsx
import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/sevices";
import CssProjects from "../pages/cssProjects";
import JsTasks from "../pages/jsTasks";
import CodingExercises from "../pages/codingExercises";
import Contact from "../pages/contact";
import {Routes,Route} from 'react-router-dom';
const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/cssProjects" element={<CssProjects/>}/>
            <Route path="/jsTasks" element={<JsTasks/>}/>
            <Route path="/codingExercises" element={<CodingExercises/>}/>
            <Route path="/contact" element={<Contact/>}/>
            


        </Routes>
    )
}
export default MyRoutes;