import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componet/Header/Header";
import Footer from "./componet/Footer/Footer";
import Home from "./pages/Home/Home"; // Importing the Home component
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here as you create them */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
