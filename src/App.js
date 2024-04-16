import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Access/Login';
import SignUp from './Components/Access/SignUp';
import BrowseProducts from './Components/Pages/BrowseProducts/BrowseProducts';
import Product from './Components/Pages/Product/Product';
import Cart from './Components/Pages/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Browse Products" element={<BrowseProducts/>} />
          <Route path="/Browse Products/:name" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
