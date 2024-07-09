import React from 'react';

import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-6">
          <h1 className="text-4xl font-bold text-white text-center">Welcome Back</h1>
        </div>
        <div className="p-6">
          <p className="text-center mb-6 text-gray-600">
            Please log in to continue.
          </p>
          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register here
              </Link>.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/regisui2.svg"
        alt="Banner"
        className="w-full mt-8 object-cover h-64"
      />
    </div>
  );
};

export default LoginPage;
