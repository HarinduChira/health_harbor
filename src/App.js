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

import AddMed from './Components/Pages/Admin/Employee/Dashview/EmpManageMed/AddMed';

import Landing from './Components/Pages/Admin/Manager/Landing/Landing'
import LoginSignup from './Components/Pages/LoginSignUp/LoginSignup';
import ManagerDashBoard from './Components/Pages/Admin/Manager/ManagerDashBoard/ManagerDashBoard/ManagerDashBoard';
import ManagerDashView from './Components/Pages/Admin/Manager/ManagerDashView/ManagerDashView';

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
          <Route path='/ManageMed' element={<AddMed/>}/>


          <Route path="/Admin/Manager" element={<Landing/>}/>
          <Route path='/Admin/Manager/ManagerDashBoard' element={<ManagerDashBoard/>}/>
          <Route path='/Admin/Manager/ManagerDashBoard/ManagerDashView/ManageEmployee' element={<ManagerDashView  selectMenu = "ManageEmployee"/>}/>
          <Route path='/Admin/Manager/ManagerDashBoard/ManagerDashView/ApproveUpdates' element={<ManagerDashView selectMenu = "ApproveUpdates"/>}/>
          <Route path='/Admin/Manager/ManagerDashBoard/ManagerDashView/ManagerDash' element={<ManagerDashView selectMenu = "ManagerDash"/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
