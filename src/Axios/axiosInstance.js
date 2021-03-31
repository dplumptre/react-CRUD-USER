import axios from 'axios';



const axiosInstance = axios.create({
  baseURL :     'http://ohapi.local/api/',
  // baseURL :  'https://believersclassapi.tfolc.org/api/',
             
   
   
});
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
 axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'; // neccessary for bad request registration error
 axios.defaults.headers.post['Accept'] ='application/json';
 //axios.defaults.headers.put['Content-Type'] ='application/json';
 


export default axiosInstance;