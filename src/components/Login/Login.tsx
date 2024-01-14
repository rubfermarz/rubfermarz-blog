import { Outlet } from 'react-router-dom';

function Login() {
  return (
    <section className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
      <Outlet />
    </section>
  );
}

export default Login;
