import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://limitless-wildwood-88424.herokuapp.com')
  // ? (baseURL = window.location.origin)
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')

  },
  //add request for get clothing
  getClothing: async () => {
    return await service.get('/getClothing')
  },

//add request for get clothing
getPrints: async () => {
  return await service.get('/getPrints')
},
newCollab: async (state) => {
  return await service.post('/savenewCollab',state)
},
getMycollab: async () => {
  return await service.get('/Amaken')
  
},
getMycollabs: async () => {
  return await service.get('/getMycollabs')
},
getallcollabs: async () => {
  return await service.get('/getallcollabs')
},
makelive: async (id) => {
  return await service.post('/shift',id)
},
notlive: async (id) => {
  return await service.post('/unshift',id)
}
};

export default actions;
