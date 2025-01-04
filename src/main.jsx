import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import MyPortfolio from './myPortfolio/MyPortfolio.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx';
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
   <ThemeProvider>
   <div className='max-w-7xl mx-auto'>
   <MyPortfolio></MyPortfolio>
   <Toaster />
   </div>
   </ThemeProvider>
  </StrictMode>
</BrowserRouter>
  ,
)
