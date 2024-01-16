import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  return (
    <motion.main
      className="main__container"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <section className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
        <Outlet />
      </section>
    </motion.main>
  );
}

export default Login;
