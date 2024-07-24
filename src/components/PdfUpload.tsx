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
  const [queryResult, setQueryResult] = useState('');
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
          // Ensure queryResult is a string
          const result = response.data.response;
          setQueryResult(typeof result === 'string' ? result : JSON.stringify(result));
        }
      } catch (error) {
        setQueryResult('Failed to get query response. Please try again.');
      }
    } else {
      setQueryResult('User not authenticated or PDF not uploaded. Please log in again or upload a PDF.');
    }
  };
  

  return (
    <div className="pdf-upload">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            />
          )}
        />
        <input
          type="file"
          required
          accept="application/pdf"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
        />
        <Button type="submit" variant="contained" color="primary" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload PDF'}
        </Button>
      </form>
      {uploadError && <p>{uploadError}</p>}

      <div className="pdf-query">
        <TextField
          label="Query"
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleQuery} variant="contained" color="secondary">
          Query PDF
        </Button>
        {queryResult && <p>{queryResult}</p>}
      </div>
    </div>
  );
};

export default PdfUpload;
