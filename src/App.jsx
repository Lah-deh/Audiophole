import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Headphone from "./Pages/Headphone.jsx";    
import Speaker from "./Pages/Speaker.jsx";    


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="speaker" element={<Speaker />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
