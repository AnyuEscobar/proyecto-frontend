import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { AboutUs } from "../pages/AboutUs";


const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

    </BrowserRouter>

  )
}

export { RouterApp }