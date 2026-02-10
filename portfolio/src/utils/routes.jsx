// routes.jsx
import React from "react";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Services from "../pages/services/services";
import CssProjects from "../pages/cssProjects/cssProjects";
import JsTasks from "../pages/jsProjects/jsProjects";
import CodingExercises from "../pages/jsAssignments/jsCodingExercises";
import Contact from "../pages/contact/contact";
import {Routes,Route} from 'react-router-dom';
const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/cssProjects" element={<CssProjects/>}/>
            <Route path="/jsProjects" element={<JsTasks/>}/>
            {/* <Route path="/jsPractice" element={<CodingExercises/>}/> */}
            <Route path="/codingExercises" element={<CodingExercises />} />

            <Route path="/contact" element={<Contact/>}/>
            


        </Routes>
    )
}
export default MyRoutes;