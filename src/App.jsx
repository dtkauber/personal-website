import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HobbiesPage from "./pages/HobbiesPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/hobbies" element={<HobbiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}