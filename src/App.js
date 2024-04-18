import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Access/Login';
import SignUp from './Components/Access/SignUp';
import BrowseProducts from './Components/Pages/BrowseProducts/BrowseProducts';
import Product from './Components/Pages/Product/Product';
import Cart from './Components/Pages/Cart/Cart';

import EmpLanding from './Components/Pages/Admin/Employee/EmpLanding/EmpLanding';
import EmpDashBoard from './Components/Pages/Admin/Employee/EmpDashboard/EmpDashBoard';
import MedicineM from './Components/Pages/Admin/Employee/Dashview/EmpManageMed/MedicineM';
import Sidebar from './Components/Pages/Admin/Employee/Dashview/EmpSidebar/EmpSidebar';
<<<<<<< HEAD
import AddMed from './Components/Pages/Admin/Employee/Dashview/EmpManageMed/AddMed';
=======
import Landing from './Components/Pages/Admin/Manager/Landing/Landing'
import ProductUpdate  from './Components/Pages/Admin/Manager/ProductUpdate/ProductUpdate';
import LoginSignup from './Components/Pages/LoginSignUp/LoginSignup';


>>>>>>> 7861f6d28110dd502db1482d1bff7c01a6f616f3

function App() {

  


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/LoginSignUp" element={<LoginSignup logStatus={true}/>} />
          <Route path="/Browse Products" element={<BrowseProducts/>} />
          <Route path="/Browse Products/:name" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path='/Admin/Employee' element={<EmpLanding/>}/>
          <Route path='/Admin/Employee/Dashboard' element={<EmpDashBoard />} />
          <Route path='/Admin/Employee/ManageMed' element={<MedicineM />} />
          <Route path='/SideBar' element={<Sidebar/>}/>
<<<<<<< HEAD
          <Route path='/ManageMed' element={<AddMed/>}/>
=======

          <Route path="/Admin/Manager" element={<Landing/>}/>
          <Route path='/Admin/Manager/ProductUpdate' element={<ProductUpdate/>}/>
>>>>>>> 7861f6d28110dd502db1482d1bff7c01a6f616f3
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
