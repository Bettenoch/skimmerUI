import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button } from '@mui/material';
import { z } from 'zod';
import { useUserActions } from '../hooks/user.actions';

// Schema definition using Zod
const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  bio: z.string().optional(),
  avatar: z.string().optional(),
});

const RegistrationForm: React.FC = () => {
  const { register: registerUser } = useUserActions(); // Extract the register function from useUserActions
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data); // Call the register function with form data
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            variant="outlined"
            error={!!errors.username}
            helperText={errors.username ? (errors.username.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? (errors.password.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? (errors.email.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName ? (errors.firstName.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            variant="outlined"
            error={!!errors.lastName}
            helperText={errors.lastName ? (errors.lastName.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="bio"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Bio"
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.bio}
            helperText={errors.bio ? (errors.bio.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Controller
        name="avatar"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Avatar"
            variant="outlined"
            error={!!errors.avatar}
            helperText={errors.avatar ? (errors.avatar.message as string) : ''}
            fullWidth
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
