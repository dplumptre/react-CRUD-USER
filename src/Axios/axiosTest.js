import axios from 'axios';

const axiosTest = axios.create({
  baseURL :     'http://apitest.cscs.ng:8021/api/',
  //timeout: 1000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});



//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
 //axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
 //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'; // neccessary for bad request registration error
 //axios.defaults.headers.post['Accept'] ='application/json';
 //axios.defaults.headers.post['Content-Type'] ='application/json';
 //axios.defaults.headers.put['Content-Type'] ='application/json';
 axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'; // neccessary for bad request registration error
 axios.defaults.headers.post['Accept'] ='application/json';
 


export default axiosTest;