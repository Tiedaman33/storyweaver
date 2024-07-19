import React from 'react';
import AuthForm from './Authentication';

function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <AuthForm type="signup">
                    {/* First Name */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="auth-input" placeholder="Enter your first name" />
                    </div>
                    
                    {/* Last Name */}
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="auth-input" placeholder="Enter your last name" />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="auth-input" placeholder="Enter your email address" />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="auth-input" placeholder="Enter your password" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">Sign Up</button>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}

export default Signup;
