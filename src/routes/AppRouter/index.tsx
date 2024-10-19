import HomePage from '../../pages/Homepage';
import SigninPage from '../../pages/SigninPage';
import SignupPage from '../../pages/SignupPage';

const { createBrowserRouter } = require('react-router-dom');

export const approute = createBrowserRouter([
  {
    path: '/',
  element: <SigninPage/>,
  },
  {
    path: '/signup',
    element: <SignupPage/>,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);
