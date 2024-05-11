import axios, { AxiosResponse } from 'axios';
import { IJoke } from '../interfaces';

const jokesApi = axios.create({ baseURL: process.env.REACT_APP_JOKES_API });

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => jokesApi.get(url).then(responseBody),
  post: (url: string, body?: any) => jokesApi.post(url, body).then(responseBody),
  delete: (url: string) => jokesApi.delete(url).then(responseBody),
  put: (url: string, body?: any) => jokesApi.put(url, body).then(responseBody)
};

const Jokes = {
  getRandomJokesByQuantity: (quantity: number): Promise<IJoke[]> => requests.get(`/random/${quantity}`),
  deleteJoke: (id: number) => requests.delete(`/${id}`),
  likeJoke: (id: number) => requests.put(`/like/${id}`),
  getTopTen: (): Promise<IJoke[]> => requests.get(`/top-liked`),
  createJoke: (joke: IJoke) => requests.post(`/`, joke)
};

export default {
  Jokes
};
