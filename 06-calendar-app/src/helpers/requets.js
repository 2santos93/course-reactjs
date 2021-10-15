// import { methods } from '../types/methods';

const headers = {
  'Content-Type': 'application/json',
};

export const request = async (url, method, body, isPrivate = false) => {
  const options = {
    method,
    body: body && JSON.stringify(body),
    headers,
  };

  if (isPrivate) {
    headers['x-token'] = localStorage.getItem('token');
  }

  const response = await fetch(url, options);

  const data = response.json();

  return data;
};
