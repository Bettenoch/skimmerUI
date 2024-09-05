import React from "react";

import Layout from "@/components/Layout";
import Hero from "@/sections/home/Hero";
import Headline from "@/sections/home/Headline";
import Features from "@/sections/home/Features";

const Home: React.FC = () => {
  return (
    <Layout>
      <section className= "min-h-screen ">
       <Hero/>
       <Headline/>
       <Features />
      
      </section>
    </Layout>
  );
};

export default Home;
