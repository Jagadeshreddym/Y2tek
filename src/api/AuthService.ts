// auth.ts

import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native apps
// For web, you can use `localStorage` instead of AsyncStorage
// import { localStorage } from 'window'; // Uncomment this for web apps

interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

// Define the type for the authentication state
interface AuthState {
  token: string | null;
  user: { id: number; username: string; email: string } | null;
}

// AuthService to handle login, logout, and token management
class AuthService {
  static async login(username: string, password: string): Promise<AuthResponse | null> {
    try {
      // Example login API request (replace with actual API)
      const response = await fetch('https://your-api.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data: AuthResponse = await response.json();
      // Store token and user data in AsyncStorage (or localStorage for web)
      await AsyncStorage.setItem('authToken', data.token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } catch (error) {
      console.error('Login Error:', error);
      return null;
    }
  }

  static async logout(): Promise<void> {
    // Remove token and user data from AsyncStorage (or localStorage for web)
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('user');
  }

  static async getAuthData(): Promise<AuthState> {
    const token = await AsyncStorage.getItem('authToken');
    const user = await AsyncStorage.getItem('user');

    if (!token || !user) {
      return { token: null, user: null };
    }

    return {
      token,
      user: JSON.parse(user),
    };
  }

  static async isAuthenticated(): Promise<boolean> {
    const { token } = await this.getAuthData();
    return !!token; // If there's a token, the user is considered authenticated
  }

  static async getToken(): Promise<string | null> {
    const { token } = await this.getAuthData();
    return token;
  }
}

export default AuthService;
