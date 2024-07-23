import React, { useState } from 'react';
import axios from 'axios';
import { getValidAccessToken } from '../hooks/user.actions';


const LlmAgent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const accessToken = await getValidAccessToken();
    if (!accessToken) {
      setError('User is not authenticated');
      console.error('User is not authenticated');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', file.name);

    try {
      const response = await axios.post('http://localhost:8000/api/rags/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      console.log('File uploaded successfully', response.data);
      setError('');
    } catch (error) {
      console.error('Error uploading file', error);
      setError('Error uploading file');
    }
  };

  const handleQuerySubmit = async () => {
    if (!file) return;

    const accessToken = await getValidAccessToken();
    if (!accessToken) {
      setError('User is not authenticated');
      console.error('User is not authenticated');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/rags/${file.name}/query/`, { query }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      setResponse(response.data.response);
      setError('');
    } catch (error) {
      console.error('Error querying file', error);
      setError('Error querying file');
    }
  };

  return (
    <div>
      <h2>Upload and Query PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button>
      <input type="text" value={query} onChange={handleQueryChange} placeholder="Enter your query" />
      <button onClick={handleQuerySubmit}>Query PDF</button>
      {response && (
        <div>
          <h3>Query Response</h3>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LlmAgent;
