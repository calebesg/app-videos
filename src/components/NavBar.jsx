import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import logo from '../assets/logo.svg';

export function NavBar({ children }) {
  return (
    <header className="w-full py-2 px-4 fixed z-40 bg-gray-700 backdrop-blur-sm">
      <nav className="w-full flex justify-center items-center relative">
        <Link
          to="/"
          className="absolute left-0 opacity-0 -z-10 md:z-10 md:opacity-100"
        >
          <img src={logo} alt="Youtube" className="w-24" />
        </Link>

        <SearchForm />
      </nav>

      {children}
    </header>
  );
}
