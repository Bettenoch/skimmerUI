import React from "react";

import Layout from "@/components/Layout";
import Hero from "@/sections/home/Hero";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className= "min-h-screen ">
       <Hero/>
      </section>
    </Layout>
  );
};

export default Home;
