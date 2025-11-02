import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Headphone from "./Pages/Headphone.jsx";    
import Speaker from "./Pages/Speaker.jsx";    
import EarPhone from "./Pages/EarPhone.jsx";
import XX99 from "./Pages/XX99.jsx";
import CartProvider from "./context/CartProvider.jsx";
import XX9 from "./Pages/XX9.jsx";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/earphones" element={<EarPhone />} />
        <Route path="/xx99" element={<XX99 />} />
        <Route path="/xx9" element={<XX9 />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
