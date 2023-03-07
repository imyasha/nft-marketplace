import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import NFTDetail from "./pages/NFTDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<NFTDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
