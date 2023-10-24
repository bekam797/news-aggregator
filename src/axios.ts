import axios from 'axios';

export interface Source {
  name: string;
  url: string;
  apiKey: string;
}

export const updateAxiosInstance = (source: Source) => {
  const updatedInstance = axios.create({
    baseURL: source.url,
    timeout: 1000,
    headers: {
      'X-Api-Key': source.apiKey
    }
  });
  return updatedInstance;
};
