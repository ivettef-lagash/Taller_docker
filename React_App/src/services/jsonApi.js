import { create } from 'apisauce';

const config = {
  baseURL:
    'https://randomuser.me/api/?inc=name,email,login,picture&results=50&format=json'
};

const createApi = () => {
  const { get } = create(config);
  const getUsers = () => get('');

  return {
    getUsers
  };
};

export default createApi;
