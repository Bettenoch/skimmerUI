import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Link } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Playground: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [query, setQuery] = useState<string>('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPdfFile(event.target.files[0]);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setChatLog([...chatLog, query]);
      setQuery('');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <header className="py-6 bg-gray-800 shadow-lg mb-8">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-yellow-500">PDF Playground</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
              <li><Link to="playground" className="hover:text-yellow-500">Playground</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="mb-4">
            Please upload a PDF file (max size: 10MB). Supported formats: PDF.
          </p>
          <input
            type="file"
            accept="application/pdf"
            onChange={onFileChange}
            className="mb-4 bg-gray-700 border border-gray-600 rounded text-white p-2"
          />
        </div>

        {pdfFile && (
          <div className="flex">
            <div className="w-2/3 bg-gray-800 p-4 rounded-lg mr-4">
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdf-document"
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>

            <div className="w-1/3 bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Query the PDF</h2>
              <form onSubmit={handleQuerySubmit} className="mb-4">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-24 bg-gray-700 border border-gray-600 rounded text-white p-2 mb-4"
                  placeholder="Type your query here..."
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-lg font-semibold hover:bg-yellow-400"
                >
                  Submit
                </button>
              </form>

              <div className="chat-log">
                {chatLog.map((msg, index) => (
                  <p key={index} className="mb-2 bg-gray-700 p-2 rounded">
                    {msg}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
