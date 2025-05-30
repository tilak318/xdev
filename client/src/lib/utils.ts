import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// API Health Types
export interface ApiHealthStatus {
  server: string;
  timestamp: string;
  mongodb: string;
  status: 'ok' | 'error';
}

// Determine API base URL based on environment
export const getApiBaseUrl = (): string => {
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'https://xdev-server.onrender.com'
    : 'http://localhost:5000';
};

// Check API health status
export const checkApiHealth = async (): Promise<ApiHealthStatus> => {
  try {
    const baseUrl = getApiBaseUrl();
    const response = await fetch(`${baseUrl}/api/health`);
    
    if (!response.ok) {
      console.error('API Health Check: Error connecting to server');
      return {
        server: 'error',
        timestamp: new Date().toISOString(),
        mongodb: 'unknown',
        status: 'error'
      };
    }
    
    const data = await response.json();
    console.log('API Health Check:', data.status === 'ok' ? 'API is healthy' : 'Error connecting to server');
    return data;
  } catch (error) {
    console.error('API Health Check: Error connecting to server', error);
    return {
      server: 'error',
      timestamp: new Date().toISOString(),
      mongodb: 'unknown',
      status: 'error'
    };
  }
};
