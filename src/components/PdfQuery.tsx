import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Rating } from '@mui/material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { getUser, getValidAccessToken } from '../hooks/user.actions';
import PageviewIcon from '@mui/icons-material/Pageview';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { grey } from '@mui/material/colors';
import LoadingAnimation from './LoadingAnimation';

interface PdfUploadForm {
  title: string;
  file: FileList;
}

const PdfTestUpload: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<PdfUploadForm>();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [queryResults, setQueryResults] = useState<{ query: string, response: string }[]>([]);
  const [query, setQuery] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedPdfId, setUploadedPdfId] = useState<string | null>(null);
  const [pdfFileUrl, setPdfFileUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
          setUploadedPdfId(response.data.id);
          if (selectedFile) {
            setPdfFileUrl(URL.createObjectURL(selectedFile));
          }
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
      setLoading(true); // Set loading to true
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
          const result = response.data.response;
          const data = result.response;
          setQueryResults(prevResults => [
            ...prevResults,
            { query, response: data }
          ]);
        }
      } catch (error) {
        setQueryResults(prevResults => [
          ...prevResults,
          { query, response: 'Failed to get query response. Please try again.' }
        ]);
      } finally {
        setLoading(false); // Set loading to false
      }
    } else {
      setQueryResults(prevResults => [
        ...prevResults,
        { query, response: 'User not authenticated or PDF not uploaded. Please log in again or upload a PDF.' }
      ]);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-2">
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

        <div className="flex h-screen">
          {pdfFileUrl && (
            <div className="pdf-screen flex-1 bg-gray-200 p-4 rounded-lg mr-4">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <div className="h-full">
                  <Viewer fileUrl={pdfFileUrl} plugins={[defaultLayoutPluginInstance]} />
                </div>
              </Worker>
            </div>
          )}

          {uploadedPdfId && (
            <div className="qr-screen flex-1 bg-gray-200 p-4 rounded-lg flex flex-col relative">
              <div className="query-results flex-1 overflow-y-auto space-y-4">
                {loading ? (
                  <div className="flex justify-center items-center h-full">
                    <LoadingAnimation/>
                  </div>
                ) : (
                  queryResults.map((item, index) => (
                    <div key={index} className="p-2 flex flex-col gap-2">
                      <p className="font-semibold text-blue-400">{item.query}</p>
                      <div className="flex flex-col bg-gray-700 rounded">
                        <p className="p-4">
                          <span className="text-cyan-600">
                            <SmartToyIcon sx={{ fontSize: 40 }} />
                          </span>
                          {item.response}
                        </p>
                        <div className="flex justify-end p-2">
                          <span className="text-blue-800">
                            <Rating name="half-rating" defaultValue={0} precision={0.5} />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleQuery(); }} className="query-form flex bg-gray-300 p-4">
                <TextField
                  variant="outlined"
                  fullWidth
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mb-4"
                  placeholder="Ask any question about the document..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                  disabled={loading} // Disable input when loading
                />
                <Button onClick={handleQuery} sx={{ color: grey }} variant="contained" className="" disabled={loading}>
                  <PageviewIcon sx={{ fontSize: 40 }} className="ml-2 text-cyan-950" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfTestUpload;
