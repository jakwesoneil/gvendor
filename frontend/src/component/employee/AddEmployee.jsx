import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEmployee = () => {

    let navigate = useNavigate();

    const [employee, setEmployee] = useState({firstName: "", lastName: "", department: "", email: "", password:""});
    const{firstName, lastName, department, email, password} = employee;

    const handleInputChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    };

    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/employees", employee);
        navigate("/view-employees");
    };


  return (
    <div className= "bg-blue-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
        <h2 className="mt-5 text-center text-white mb-5">Add Employee</h2>
            <form className= "space-y-6" onSubmit = {(e)=> saveEmployee(e)}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='firstName'>First Name</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="firstName" id ="firstName" required value={firstName} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='lastName'>Last Name</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="lastName" id ="lastName" required value={lastName} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='department'>Department</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="department" id ="department" required value={department} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='email'>Email</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="email" id ="email" required value={email} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='password'>Password</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="password" id ="password" required value={password} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5 flex justify-between">
                    <div>
                        <button
							type="submit"
							className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
							Save
						</button>
					</div>
                
                    <div className="">
						<Link
							to={"/view-employees"}
							type="submit"
							className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg inline-block focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
							Cancel
						</Link>
					</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEmployee