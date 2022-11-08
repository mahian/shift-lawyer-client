import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import ServiceDetails from './components/ServiceDetails';
import Signup from './components/Signup';
import Main from './layout/Main';
import PrivetRoute from './privet-route/PrivetRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {path: '/', element: <Home/>},
        {path: 'service-details', element: <ServiceDetails/>},
        {path: 'signup', element: <Signup/>},
        {path: 'login', element: <Login/>},
      ]
    },
    {
      path: 'dashboard',
      element: <PrivetRoute><Dashboard/></PrivetRoute>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
