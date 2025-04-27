import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tools from "../pages/Tools";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </BrowserRouter>
  );
}
