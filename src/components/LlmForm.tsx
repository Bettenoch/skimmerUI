// src/components/LlmForm.tsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Typography } from '@mui/material';
import { getUser, getValidAccessToken } from '../hooks/user.actions';
import axios from 'axios';

// Schema definition using Zod
const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  file: z.any().refine(file => file && file.length > 0, 'File is required'),
});

interface PDFUploadFormProps {}

const LlmForm: React.FC<PDFUploadFormProps> = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      file: null,
    },
  });
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const user = getUser();

  const onSubmit = async (data: any) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('title', data.title);
    formData.append('uploaded_by', user.id);

    try {
      const token = await getValidAccessToken();
      const uploadResponse = await axios.post('http://localhost:8000/api/rags/', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (uploadResponse.status === 201) {
        console.log('PDF uploaded successfully!');
        const pdfId = uploadResponse.data.id;
        await handleQuery(pdfId);
      } else {
        console.error('PDF upload failed', uploadResponse);
      }
    } catch (error) {
      console.error('Error uploading PDF', error);
    } finally {
      setUploading(false);
    }
  };

  const handleQuery = async (pdfId: string) => {
    try {
      const token = await getValidAccessToken();
      const queryResponse = await axios.post(`http://localhost:8000/api/rags/${pdfId}/query/`, { query }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (queryResponse.status === 200) {
        setResponse(queryResponse.data.response);
      } else {
        console.error('Query failed', queryResponse);
      }
    } catch (error) {
      console.error('Error querying PDF', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <Typography variant="h6">Upload and Query PDF</Typography>

      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title ? (errors.title.message as string) : ''}
            fullWidth
          />
        )}
      />

      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="file"
            variant="outlined"
            error={!!errors.file}
            helperText={errors.file ? (errors.file.message as string) : ''}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              accept: '.pdf',
            }}
            onChange={(e) => field.onChange((e.target as HTMLInputElement).files)}
          />
        )}
      />

      <TextField
        label="Query"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button type="submit" variant="contained" color="primary" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload and Query'}
      </Button>

      {response && (
        <Typography variant="body1" color="textSecondary">
          Response: {response}
        </Typography>
      )}
    </form>
  );
};

export default LlmForm;
