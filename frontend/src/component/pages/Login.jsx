import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';

// Example background image path (replace with your actual image path)
const backgroundImage = './src/assets/tgt.jpg';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-blue-300 border border-zinc-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <div className="flex justify-center items-center mb-6">
                    <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png" alt="Globe Logo" />
                </div>
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form action="">
                    <div className="relative my-6">
                        <input type="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-zinc-600 focus:outline-none focus:ring-0 focus:text-white focus:border-zinc-600 peer" placeholder="Your Email" />
                        <label htmlFor="email" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Your Email</label>
                        <BiUser className="absolute top-0 right-4 text-white" />
                    </div>
                    <div className="relative my-6">
                        <input type="password" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-zinc-600 focus:outline-none focus:ring-0 focus:text-white focus:border-zinc-600 peer" placeholder="Your Password" />
                        <label htmlFor="password" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Your Password</label>
                        <AiOutlineLock className="absolute top-0 right-4 text-white" />
                    </div>

                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-zinc-900 text-zinc-300 hover:bg-zinc-950 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
                    <div>
                        <span className="mt-4 text-white">Create an account? <Link className="text-blue-500" to="/signup">Signup</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
