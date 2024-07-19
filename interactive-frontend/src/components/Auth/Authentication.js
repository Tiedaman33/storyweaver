// src/components/Auth/Authentication.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

async function handleSubmit(event, url, navigate) {
    event.preventDefault();

    const firstName = event.target.firstName ? event.target.firstName.value : '';
    const lastName = event.target.lastName ? event.target.lastName.value : '';
    const email = event.target.email.value;
    const password = event.target.password.value;

    const body = { email, password };
    if (firstName && lastName) {
        body.firstName = firstName;
        body.lastName = lastName;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        console.log('Response data:', responseData);

        if (responseData.data) {
            console.log(`${url} successful:`, responseData.data);
            if (url === '/api/signup') {
                navigate('/login');
            }
        } else {
            throw new Error('Data property is missing in the response');
        }
    } catch (error) {
        console.error(`Error during ${url}:`, error);
        // Handle error (display error message to the user, etc.)
    }
}

function AuthForm({ type }) {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        const url = type === 'login' ? '/api/login' : '/api/signup';
        handleSubmit(event, url, navigate);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            {type === 'signup' && (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            name="firstName" 
                            required 
                            placeholder="First Name" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            name="lastName" 
                            required 
                            placeholder="Last Name" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </>
            )}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Email" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder="Password" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {type === 'login' ? 'Login' : 'Sign Up'}
                </button>
            </div>
        </form>
    );
}

export default AuthForm;
