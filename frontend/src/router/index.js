import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/Login';
import Register from '../views/Register';
import Layout from '../views/Layout';
import TaskList from '../views/TaskList';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

export default router;
