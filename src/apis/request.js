import axios from 'axios';
const Axios = axios.create({
  baseURL:'http://192.168.10.1:8080',
  timeout:5000,
  header: {'Content-Type': 'application/json'},
  withCredentials: false
});
Axios.interceptors.request.use(
  (config) => {
    // config.headers['Authorization'] = getToken();
    // config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  err => {
    Promise.reject(err);
  }
);
Axios.interceptors.response.use(
  (res) => {
    const response = res?.data;
    const errorCode = response?.code;
    switch (errorCode) {
      default:
        return response;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default Axios;