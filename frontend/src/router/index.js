import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../views/Login';
import Register from '../views/Register';
import Layout from '../views/Layout';
import TaskList from '../views/TaskList';

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '/',
        element: <TaskList />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect('/');
      }
      return null;
    },
  },
  {
    path: 'register',
    element: <Register />,
    loader: () => {
      if (localStorage.access_token) {
        throw redirect('/');
      }
      return null;
    },
  },
]);

export default router;
