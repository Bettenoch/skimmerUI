import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="py-6 bg-gray-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-yellow-500">SkimmIT</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><Link to="playground" className="hover:text-yellow-500">Playground</Link></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center py-20">
          <h2 className="text-5xl font-bold mb-4 text-yellow-500">About SkimmIT</h2>
          <p className="text-xl mb-8">Your ultimate solution for managing and querying PDFs with AI-driven efficiency.</p>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Our Story</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-8">
              SkimmIT was born out of a necessity to streamline the cumbersome process of handling numerous PDF documents. Our founders, experienced professionals in the tech and document management industries, identified a significant gap in the market for a tool that could efficiently manage and query PDFs. Thus, SkimmIT was created to revolutionize the way individuals and businesses handle their digital documents.
            </p>
            <p className="mb-8">
              By leveraging advanced AI technologies, SkimmIT offers unparalleled capabilities in extracting, summarizing, and querying information from PDFs. Our goal is to make document management more intuitive and accessible for everyone.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-8">
              At SkimmIT, our mission is to provide state-of-the-art solutions that simplify and enhance document management. We are dedicated to continuous innovation, ensuring that our users have access to the best tools and technologies to manage their PDF documents efficiently.
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
              <p>CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Sarah Johnson</h3>
              <p>Head of AI Development</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-lg font-semibold hover:bg-yellow-400">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default About;
