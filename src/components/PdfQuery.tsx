// // src/components/PDFQuery.tsx
// import React, { useState } from 'react';
// import { useUserActions } from '../hooks/user.actions';


// const PDFQuery: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState<File | null>(null);
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');
//   const { uploadPdf, queryPdf } = useUserActions();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (file) {
//       const pdf = await uploadPdf(file, title);
//       setTitle('');
//       setFile(null);
//       alert(`Uploaded ${pdf.title}`);
//     } else {
//       alert('Please select a file to upload.');
//     }
//   };

//   const handleQuery = async () => {
//     if (file) {
//       const pdfId = 1; // Replace with actual PDF ID
//       const res = await queryPdf(pdfId, query);
//       setResponse(res.response);
//     } else {
//       alert('Please upload a PDF first.');
//     }
//   };

//   return (
//     <div>
//       <h1>Upload and Query PDF</h1>
//       <input 
//         type="text" 
//         value={title} 
//         onChange={(e) => setTitle(e.target.value)} 
//         placeholder="Enter title" 
//       />
//       <input 
//         type="file" 
//         onChange={handleFileChange} 
//         accept="application/pdf" 
//       />
//       <button onClick={handleUpload}>Upload PDF</button>
//       <textarea 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//         placeholder="Enter your query" 
//       />
//       <button onClick={handleQuery}>Query PDF</button>
//       {response && <div><h2>Response</h2><p>{response}</p></div>}
//     </div>
//   );
// };

// export default PDFQuery;
