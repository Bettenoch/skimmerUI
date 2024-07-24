import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
}

function useUserActions() {
  const navigate = useNavigate();
  const baseURL = 'http://localhost:8000/api';

  return {
    login,
    register,
    logout,
  };

  async function login(data: LoginData) {
    const res = await axios.post(`${baseURL}/auth/login/`, data);
    setUserData(res.data);
    navigate('/');
  }

  async function register(data: RegisterData) {
    const res = await axios.post(`${baseURL}/auth/register/`, data);
    setUserData(res.data);
    navigate('/');
  }

  function logout() {
    localStorage.removeItem('auth');
    navigate('/login');
  }
}

function getUser(): any | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.user;
  }
  return null;
}

function getAccessToken(): string | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.access;
  }
  return null;
}

function getRefreshToken(): string | null {
  const authString = localStorage.getItem('auth');
  if (authString) {
    const auth: Auth = JSON.parse(authString);
    return auth.refresh;
  }
  return null;
}

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
        // Optionally, redirect to login page
        useNavigate()('/login');
      }
    } else {
      console.error('User is not authenticated');
      // Optionally, redirect to login page
      useNavigate()('/login');
    }
  }
  return accessToken;
}

export { useUserActions, getUser, getAccessToken, getRefreshToken, getValidAccessToken };
