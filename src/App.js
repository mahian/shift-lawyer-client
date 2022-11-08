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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'service-details/:id',
        loader:({params})=> fetch(`https://shift-lawyer-server.vercel.app/services/${params.id}`) ,
        element: <ServiceDetails /> },
        { path: 'signup', element: <Signup /> },
        { path: 'login', element: <Login /> },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivetRoute><Dashboard /></PrivetRoute>,
      children: [
        { path: 'add-service', element: <PrivetRoute><AddService /></PrivetRoute> },
        {
          path: 'manage-service',
          element: <PrivetRoute><Manage /></PrivetRoute>
        },
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
