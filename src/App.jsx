import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homapage from "./pages/Homapage";
import About from "./pages/About";
import DIYs from "./pages/DIYs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/about" element={<About />} />
        <Route path="/DIYs" element={<DIYs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
