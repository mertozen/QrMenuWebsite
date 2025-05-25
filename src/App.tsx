import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiyatlandirma" element={<Pricing />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
