import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homapage from "./pages/Homapage";
import About from "./pages/About";
import DIYs from "./pages/DIYs";
import DIYSuggest from "./componets/DIYsSuggest";

function App() {
  return (
    <BrowserRouter basename="/hackThisFall">
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="about" element={<About />} />
        <Route path="DIYs" element={<DIYs />} />
        <Route path="DIYsSuggest" element={<DIYSuggest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
