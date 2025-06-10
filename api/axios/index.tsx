import axios from 'axios';

const port = process.env.NEXT_PUBLIC_BACKEND_PORT;
const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
const host = process.env.NEXT_PUBLIC_BACKEND_HOST;

const instance = axios.create({
  baseURL: `${protocol}://${host}${port ? `:${port}` : ''}`,
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
