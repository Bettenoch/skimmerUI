import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-darkblue p-6">
            <h1 className="text-4xl font-bold text-yellow text-center">Welcome to Our Website</h1>
          </div>
          <div className="p-6">
            <p className="text-center mb-6 text-gray-600">
              Join us today! Fill in the form below to create an account.
            </p>
            <RegistrationForm />
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-darkblue hover:underline">
                  Sign in here
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <img
          src="/regisui.svg"
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
