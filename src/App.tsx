import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';

import './App.css';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav/Nav';

const Login = loadable(() => import('./pages/Login/Login'));
const SignIn = loadable(() => import('./pages/Login/SignIn/SignIn'));
const SignUp = loadable(() => import('./pages/Login/SignUp/SignUp'));
const ForgotPassword = loadable(() => import('./pages/Login/ForgotPassword/ForgotPassword'));
const Home = loadable(() => import('./pages/Home/Home'));
const NotFound = loadable(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Router>
      <Nav />
      <div className="mt-40">
        <AnimatePresence>
          <Routes location={window.location} key={window.location.pathname}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
