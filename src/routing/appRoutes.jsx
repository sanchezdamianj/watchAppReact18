import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

     
const Routing = () =>{
     return(
      
     <Routes>
        <Route path='*' element={<h1>Page Not Found</h1>} />
        <Route 
          path="/" 
          exact 
          element={<Home />} 
        />
        
        <Route 
          path="/:category/search/:keyword" 
          element={<Catalog />} 
        />
        <Route 
          path="/:category/:id" 
          element={<Detail />} 
        /> 
        <Route 
          path="/:category" 
          element={<Catalog />} 
        > 
            <Route 
              path="detail" 
              element={<Detail />} 
            />
        </Route>
        
      </Routes>
     )
}
export default Routing;