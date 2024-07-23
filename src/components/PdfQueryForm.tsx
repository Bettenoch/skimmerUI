import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import { z } from 'zod';
import axios from 'axios';
import { getUser, getValidAccessToken } from '../hooks/user.actions';

// Schema definition using Zod
const uploadSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  file: z.instanceof(File).refine((file) => file.type === 'application/pdf', {
    message: 'A PDF file is required and only PDF files are allowed',
  }),
});

const querySchema = z.object({
  query: z.string().min(1, 'Query is required'),
});

const PdfQueryForm: React.FC = () => {
  const [pdfId, setPdfId] = useState<string | null>(null);
  const [queryResponse, setQueryResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const user = getUser();

  const {
    control: uploadControl,
    handleSubmit: handleUploadSubmit,
    formState: { errors: uploadErrors },
  } = useForm({
    resolver: zodResolver(uploadSchema),
  });

  const {
    control: queryControl,
    handleSubmit: handleQuerySubmit,
    formState: { errors: queryErrors },
  } = useForm({
    resolver: zodResolver(querySchema),
  });

  const handleUpload = async (data: any) => {
    setLoading(true);
    try {
      const accessToken = await getValidAccessToken();
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('file', data.file);
      formData.append('uploaded_by', user.id);

      const response = await axios.post('http://localhost:8000/api/rags/', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setPdfId(response.data.id);
      setLoading(false);
    } catch (error) {
      console.error('Upload error:', error);
      setLoading(false);
    }
  };

  const handleQuery = async (data: any) => {
    if (!pdfId) return;
    setLoading(true);
    try {
      const accessToken = await getValidAccessToken();
      const response = await axios.post(`http://localhost:8000/api/rags/${pdfId}/query/`, { query: data.query }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setQueryResponse(response.data.response);
      setLoading(false);
    } catch (error) {
      console.error('Query error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <Typography variant="h6" gutterBottom>
        Upload PDF
      </Typography>
      <form onSubmit={handleUploadSubmit(handleUpload)} className="flex flex-col gap-4 mb-4">
        <Controller
          name="title"
          control={uploadControl}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              variant="outlined"
              error={!!uploadErrors.title}
              helperText={uploadErrors.title ? (uploadErrors.title.message as string) : ''}
              fullWidth
            />
          )}
        />
        <Controller
          name="file"
          control={uploadControl}
          render={({ field }) => (
            <input
              {...field}
              type="file"
              accept="application/pdf"
              onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
              className="mb-2"
            />
          )}
        />
        <Typography variant="body2" color="error">
          {uploadErrors.file && (uploadErrors.file.message as string)}
        </Typography>
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
      </form>

      {pdfId && (
        <>
          <Typography variant="h6" gutterBottom>
            Query PDF
          </Typography>
          <form onSubmit={handleQuerySubmit(handleQuery)} className="flex flex-col gap-4 mb-4">
            <Controller
              name="query"
              control={queryControl}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Query"
                  variant="outlined"
                  error={!!queryErrors.query}
                  helperText={queryErrors.query ? (queryErrors.query.message as string) : ''}
                  fullWidth
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Query'}
            </Button>
          </form>
        </>
      )}

      {queryResponse && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <Typography variant="subtitle1" gutterBottom>
            Query Response:
          </Typography>
          <Typography variant="body1">{queryResponse}</Typography>
        </div>
      )}
    </div>
  );
};

export default PdfQueryForm;
