import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className= "text-center min-h-screen pt-24 bg-slate-500">
        <h2 className="text-5xl font-bold mb-4 text-yellow-500">
          Welcome to SkimmIT
        </h2>
        <p className="text-xl mb-8">
          Effortlessly manage and query your PDFs with advanced AI tools.
        </p>

        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400">
          <Link to="/playground">Explore</Link>
        </button>
      </section>
    </Layout>
  );
};

export default Home;
