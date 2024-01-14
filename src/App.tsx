import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';

import './App.css';

const Login = loadable(() => import('./components/Login/Login'));
const SignIn = loadable(() => import('./components/Login/SignIn/SignIn'));
const SignUp = loadable(() => import('./components/Login/SignUp/SignUp'));
const ForgotPassword = loadable(() => import('./components/Login/ForgotPassword/ForgotPassword'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
