import axios from 'axios';

export interface Source {
  id: string;
  name: string;
  url: string;
  apiKey: string;
}

export const updateAxiosInstance = (source: Source) => {
  const headers = {
    Authorization: `Bearer ${source.apiKey}`,
    'X-Api-Key': source.apiKey
  };

  const baseURL = `http://localhost:4000/${source.id}`;
  const updatedInstance = axios.create({
    baseURL,
    timeout: 2000,
    headers
  });
  return updatedInstance;
};
