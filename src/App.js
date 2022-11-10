import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import ServiceDetails from './components/ServiceDetails';
import Signup from './components/Signup';
import Main from './layout/Main';
import PrivetRoute from './privet-route/PrivetRoute';
import AddService from './components/AddService';
import Manage from './components/Manage';
import Update from './components/Update';
import Services from './components/Services';
import Blog from './components/Blog';
import DashboardHome from './components/DashboardHome';
import Error from './components/Error';
import 'react-photo-view/dist/react-photo-view.css';
import MyReviews from './components/MyReviews';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'services', element: <Services /> },
        { path: 'blog', element: <Blog /> },
        {
          path: 'my-reviews',
          loader: () => fetch('https://shift-lawyer-server.vercel.app/reviews'),
          element: <PrivetRoute><MyReviews /></PrivetRoute>
        },
        {
          path: 'service-details/:id',
          loader: ({ params }) => fetch(`https://shift-lawyer-server.vercel.app/services/${params.id}`),
          element: <ServiceDetails />
        },
        { path: 'signup', element: <Signup /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <Error /> },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivetRoute><Dashboard /></PrivetRoute>,
      children: [
        { index: 1, element: <DashboardHome /> },
        { path: 'add-service', element: <PrivetRoute><AddService /></PrivetRoute> },
        {
          path: 'manage-service',
          loader: () => fetch('https://shift-lawyer-server.vercel.app/services'),
          element: <PrivetRoute><Manage /></PrivetRoute>
        },
        {
          path: 'update-service/:id',
          loader: ({ params }) => fetch(`https://shift-lawyer-server.vercel.app/services/${params.id}`),
          element: <PrivetRoute><Update /></PrivetRoute>
        },
        { path: '*', element: <Error /> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
