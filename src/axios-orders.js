import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-7f147-default-rtdb.firebaseio.com/',
});

export default instance;
