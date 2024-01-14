import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import { UserProvider } from './context/User';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
