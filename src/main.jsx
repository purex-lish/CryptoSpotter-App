import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/CoinContext.jsx';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = createRoot(rootElement);

// Render the App component within StrictMode and BrowserRouter
root.render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>
);