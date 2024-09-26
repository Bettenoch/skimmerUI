import React from "react";

// import PdfUpload from '../components/PdfUpload'
import PdfTestUpload from "../components/PdfQuery";
import Layout from "@/components/Layout";
// import PdfQueryForm from '../components/PdfQueryForm'
// import LlmForm from '../components/LlmForm'
// import PdfQueryForm from '../components/PdfQueryForm'

const RagsAgent: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col gap-4">
        <PdfTestUpload />
      </div>
    </Layout>
  );
};

export default RagsAgent;
