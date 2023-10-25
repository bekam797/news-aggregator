import axios from 'axios';

export interface Source {
  name: string;
  url: string;
  apiKey: string;
}

export const updateAxiosInstance = (source: Source) => {
  console.log(process.env.REACT_APP_NEWS_API_KEY, 'process.env.NEWS_API_KEY');
  const updatedInstance = axios.create({
    baseURL: source.url,
    timeout: 1000,
    headers: {
      'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
    }
  });
  return updatedInstance;
};
