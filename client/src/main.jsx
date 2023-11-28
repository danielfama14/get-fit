import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Auth from './utils/auth.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/myGetFitProfile',
        element: Auth.loggedIn() ? <ProfilePage /> : <ErrorPage />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
