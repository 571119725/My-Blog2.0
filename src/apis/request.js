import axios from 'axios';
const Axios = axios.create({
  // baseURL:'http://192.168.10.1:8080',
  // baseURL:'http://localhost:8080',
  baseURL: "http://czblog.xyz:8080/czBlog",
  timeout:5000,
  header: {'Content-Type': 'application/json'},
  withCredentials: true
});
// Axios.defaults.withCredentials=true;
Axios.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = sessionStorage.getItem("token");
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