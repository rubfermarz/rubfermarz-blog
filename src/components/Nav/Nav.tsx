import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FaBloggerB, FaGithub } from 'react-icons/fa';

function Nav(): JSX.Element {
  const activeClassName: string = 'text-gray-50 rounded-full active:text-gray-400 bg-zinc-600';

  const navbarClassName: string =
    'w-full inline-flex gap-6 pt-4 pl-2 pb-4 pr-2 rounded-full transition ease-in-out duration-200 border-solid border-transparent';
  const navbarClassNameTransition: string = '  backdrop-blur bg-navbar-transparent border border-navbar-gray';

  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return (
    <nav className="flex w-full justify-between h-20 items-center font-extralight pl-10 pr-10 fixed top-0">
      <div>
        <ul className="text-2xl h-6 inline-flex gap-4">
          <li>
            <a href="https://github.com/rubfermarz" target="_blank" rel="noreferrer" aria-label="Link to my github">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-transparent">
        <ul className={scroll ? navbarClassName + navbarClassNameTransition : navbarClassName}>
          <li className="hover:text-gray-50 active:text-gray-400-6">
            <NavLink
              to="/#home"
              className={() => (location.hash === '#home' ? `${activeClassName} p-2 pl-6 pr-6` : 'p-2 pl-6 pr-6')}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-gray-50 active:text-gray-400">
            <NavLink
              to="/#about"
              className={() => (location.hash === '#about' ? `${activeClassName} p-2 pl-6 pr-6` : 'p-2 pl-6 pr-6')}
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-gray-50 active:text-gray-400">
            <NavLink
              to="/#projects"
              className={() => (location.hash === '#projects' ? `${activeClassName} p-2 pl-6 pr-6` : 'p-2 pl-6 pr-6')}
            >
              Projects
            </NavLink>
          </li>
          <li className="hover:text-gray-50 active:text-gray-400">
            <NavLink
              to="/#writings"
              className={() => (location.hash === '#writings' ? `${activeClassName} p-2 pl-6 pr-6` : 'p-2 pl-6 pr-6')}
            >
              Writings
            </NavLink>
          </li>
          <li className="hover:text-gray-50 active:text-gray-400">
            <NavLink
              to="/#contact"
              className={() => (location.hash === '#contact' ? `${activeClassName} p-2 pl-6 pr-6` : 'p-2 pl-6 pr-6')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="float-right">
        <ul className="text-2xl h-6 inline-flex gap-4">
          <li>
            <NavLink to="/login/sign-in">
              <FaBloggerB />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
