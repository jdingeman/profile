import React, { useState } from 'react';
import axios from 'axios';
import { Route, Navigate, useNavigate } from 'react-router-dom';

function NewAccountPage() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [organization, setOrganization] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const validatePassword = () => {
        if (password !== passwordConfirm) {
            setError('Passwords do not match');
            return false;
        } else {
            setError('');
            return true;
        }
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();
        if (validatePassword()) {
            try {
                await axios.post('http://localhost:5000/api/registerNewAccount', {
                    firstName,
                    lastName,
                    email,
                    organization,
                    password
                }).then((res) => {
                    alert(res.data.message);
                    navigate('/about');
                })
                
            } catch (err) {
                console.error(err);
                alert('Registration failed: ', err);
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white p-10 rounded-lg shadow-lg">
                <div className="pb-8">
                    <h1 className="text-2xl font-medium text-gray-900 dark:text-black">New Account</h1>
                </div>
                <div className="mb-5">
                    <label htmlFor="user-first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="user-first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)}type="text" id="user-last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">User email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: john.doe@bigcompany.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Organization</label>
                    <input value={organization} onChange={(e) => setOrganization(e.target.value)} type="text" id="user-organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Organization" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" type="password" id="user-password" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm Password</label>
                    <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} autoComplete="new-password" type="password" id="confirm-password" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"/>
                </div>
                {error && <p style={{ color: 'red'}}>{error}</p>}
                <div className="ml-auto text-right">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create user</button>
                </div>
            </form>
        </div>
    )
}

export default NewAccountPage