import React from "react";
import { 
  Route, 
  Routes,
} from "react-router-dom";
import { Home, Details, Favorites } from './index'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default AppRoutes;