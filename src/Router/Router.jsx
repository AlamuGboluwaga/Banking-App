import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound"; 
const Router = () => {
  return (
    <BrowserRouter className="browser" >
     
       
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/notfound" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
