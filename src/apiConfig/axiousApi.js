import axios from "axios";

const HttpClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

HttpClient.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject({ error });
  }
);

export default HttpClient;