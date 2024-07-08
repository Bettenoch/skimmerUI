import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="py-6 bg-gray-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-yellow-500">SkimmIT</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
              <li><Link to="playground" className="hover:text-yellow-500">Playground</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4 text-yellow-500">Welcome to SkimmIT</h2>
          <p className="text-xl mb-8">Effortlessly manage and query your PDFs with advanced AI tools.</p>
          
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400">
             <Link  to="/playground">Explore</Link>
          </button>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4">
                <i className="fas fa-file-pdf text-5xl text-yellow-500"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">PDF Management</h3>
              <p>Upload, organize, and manage your PDF files effortlessly.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <i className="fas fa-search text-5xl text-yellow-500"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Advanced Search</h3>
              <p>Query your PDFs with powerful AI-driven search capabilities.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <i className="fas fa-shield-alt text-5xl text-yellow-500"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Secure</h3>
              <p>Your data is protected with top-notch security measures.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
