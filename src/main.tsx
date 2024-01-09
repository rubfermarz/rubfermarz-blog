import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './context/User';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <App />
  </UserProvider>
);
