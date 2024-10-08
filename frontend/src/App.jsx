import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import Login from './component/pages/Login'
import Signup from './component/pages/Signup'

import NavBar from './component/common/NavBar'
import Home from './Home'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import VendorDashboard from './component/Dashboard/VendorDashboard'
import ProductDashboard from './component/Dashboard/ProductDashboard'


import AddEmployee from './component/employee/AddEmployee'
import EditEmployee from './component/employee/EditEmployee';
import EmployeesView from './component/employee/EmployeesView'
import EmployeeProfile from './component/employee/EmployeeProfile'

import AddVendor from './component/vendor/AddVendor'
import EditVendor from './component/vendor/EditVendor'
import VendorsView from './component/vendor/VendorsView'
import VendorProfile from './component/vendor/VendorProfile'

import AddProduct from './component/product/AddProduct'
import EditProduct from './component/product/EditProduct'
import ProductsView from './component/product/ProductsView'
import ProductProfile from './component/product/ProductProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-blue-900 min-h-screen">
        
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/login" element={<Login />}> </Route>
            <Route exact path="/signup" element={<Signup />}> </Route>
            <Route exact path="/" element={<Home />}> </Route>

            <Route exact path="/count" element={<EmployeeDashboard />}> </Route>
            <Route exact path="/view-employees" element={<EmployeesView />}> </Route>
            <Route exact path="/add-employees" element={<AddEmployee />}> </Route>
            <Route exact path="/edit-employee/:id" element={<EditEmployee />}> </Route>
            <Route exact path="/employee-profile/:id" element={<EmployeeProfile />}> </Route>
            
            <Route exact path="/count" element={<VendorDashboard />}> </Route>
            <Route exact path="/view-vendors" element={<VendorsView />}> </Route>
            <Route exact path="/add-vendors" element={<AddVendor />}> </Route>
            <Route exact path="/edit-vendor/:id" element={<EditVendor />}> </Route>
            <Route exact path="/vendor-profile/:id" element={<VendorProfile />}> </Route>

            <Route exact path="/count" element={<ProductDashboard />}> </Route>
            <Route exact path="/view-products" element={<ProductsView />}> </Route>
            <Route exact path="/add-products" element={<AddProduct />}> </Route>
            <Route exact path="/edit-product/:id" element={<EditProduct />}> </Route>
            <Route exact path="/product-profile/:id" element={<ProductProfile />}> </Route>

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
