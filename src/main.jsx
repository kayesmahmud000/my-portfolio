import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import MyPortfolio from './myPortfolio/MyPortfolio.jsx';
import DetailsPage from './Page/DetailsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyPortfolio />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </ThemeProvider>
  </StrictMode>
);
