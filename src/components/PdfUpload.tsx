import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { getUser, getValidAccessToken } from '../hooks/user.actions';

interface PdfUploadForm {
  title: string;
  file: FileList;
}

const PdfUpload: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<PdfUploadForm>();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [queryResults, setQueryResults] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedPdfId, setUploadedPdfId] = useState<string | null>(null);

  const onSubmit = async (data: PdfUploadForm) => {
    setUploading(true);
    setUploadError('');
    const user = getUser();
    const token = await getValidAccessToken();

    if (user && token) {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('file', selectedFile as File);
      formData.append('uploaded_by', user.id);

      try {
        const response = await axios.post(
          'http://localhost:8000/api/rags/',
          formData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 201) {
          alert('PDF uploaded successfully!');
          reset();
          setSelectedFile(null);
          setUploadedPdfId(response.data.id); // Store the uploaded PDF ID
        }
      } catch (error) {
        setUploadError('Failed to upload PDF. Please try again.');
      } finally {
        setUploading(false);
      }
    } else {
      setUploadError('User not authenticated. Please log in again.');
    }
  };

  const handleQuery = async () => {
    const user = getUser();
    const token = await getValidAccessToken();

    if (user && token && uploadedPdfId) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/rags/${uploadedPdfId}/query/`,
          { query },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          // Extract the response message directly
          const result = response.data.response;
          const data = result.response;
          setQueryResults(prevResults => [...prevResults, data]);
        }
      } catch (error) {
        setQueryResults(prevResults => [...prevResults, 'Failed to get query response. Please try again.']);
      }
    } else {
      setQueryResults(prevResults => [...prevResults, 'User not authenticated or PDF not uploaded. Please log in again or upload a PDF.']);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <header className="py-6 bg-gray-800 shadow-lg mb-8">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-yellow-500">PDF Upload</h1>
        </div>
      </header>

      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="mb-4">
            Please upload a PDF file (max size: 10MB). Supported formats: PDF.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-8 bg-slate-100 p-4 rounded-lg flex flex-col gap-4">
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  variant="outlined"
                  fullWidth
                  required
                  className="mb-4"
                />
              )}
            />
            <input
              type="file"
              required
              accept="application/pdf"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
              className="mb-4 bg-gray-700 border border-gray-600 rounded text-white p-2 w-full"
            />
            <Button type="submit" variant="contained" color="primary" disabled={uploading} className="w-full">
              {uploading ? 'Uploading...' : 'Upload PDF'}
            </Button>
          </form>
          {uploadError && <p className="text-red-500">{uploadError}</p>}
        </div>

        {uploadedPdfId && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Query the PDF</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleQuery(); }} className="mb-4">
              <TextField
                label="Query"
                variant="outlined"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mb-4"
                placeholder="Type your query here..."
              />
              <Button onClick={handleQuery} variant="contained" color="secondary" className="w-full">
                Query PDF
              </Button>
            </form>
            <div className="query-results space-y-4">
              {queryResults.map((result, index) => (
                <p key={index} className="bg-gray-700 p-2 rounded">{result}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfUpload;
