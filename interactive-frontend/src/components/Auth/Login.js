// src/components/Auth/Login.js
import React from 'react';
import AuthForm from './Authentication';

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <AuthForm type="login" />
            </div>
        </div>
    );
}

export default Login;
