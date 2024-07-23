import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define types for user data and auth
interface Auth {
  access: string;
  refresh: string;
  user: any; // Adjust this type according to your user object structure
}

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  bio?: string;
  avatar?: string;
  // Add other necessary fields for registration
}

// Custom hook for user actions
function useUserActions() {
  const navigate = useNavigate();
  const baseURL = 'http://localhost:8000/api';

  return {
    login,
    register,
    logout,
  };

  // Login the user
  async function login(data: LoginData) {
    const res = await axios.post(`${baseURL}/auth/login/`, data);
    // Registering the account and tokens in the store
    setUserData(res.data);
    navigate('/');
  }

  // Register the user
  async function register(data: RegisterData) {
    const res = await axios.post(`${baseURL}/auth/register/`, data);
    // Registering the account and tokens in the store
    setUserData(res.data);
    navigate('/');
  }

  // Logout the user
  function logout() {
    localStorage.removeItem('auth');
    navigate('/login');
  }
}

// Get the user
function getUser(): any | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.user;
  }
  return null;
}

// Get the access token
function getAccessToken(): string | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.access;
  }
  return null;
}

// Get the refresh token
function getRefreshToken(): string | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.refresh;
  }
  return null;
}

// Set the access, token and user property
function setUserData(data: Auth) {
  localStorage.setItem(
    'auth',
    JSON.stringify({
      access: data.access,
      refresh: data.refresh,
      user: data.user,
    })
  );
}

// Refresh the access token
async function refreshAccessToken(refreshToken: string) {
  try {
    const response = await axios.post('http://localhost:8000/api/auth/refresh/', {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error('Error refreshing token', error);
    return null;
  }
}

// Get a valid access token
async function getValidAccessToken() {
  let accessToken = getAccessToken();
  if (!accessToken) {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      accessToken = await refreshAccessToken(refreshToken);
      if (accessToken) {
        const authString = localStorage.getItem('auth');
        if (authString) {
          const auth = JSON.parse(authString);
          auth.access = accessToken;
          localStorage.setItem('auth', JSON.stringify(auth));
        }
      } else {
        console.error('User needs to log in again');
      }
    } else {
      console.error('User is not authenticated');
    }
  }
  return accessToken;
}

export { useUserActions, getUser, getAccessToken, getRefreshToken, getValidAccessToken };
