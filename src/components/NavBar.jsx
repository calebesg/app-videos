import { SearchForm } from './SearchForm';

export function NavBar() {
  return (
    <header className="w-full py-2 px-4 fixed z-40 bg-gray-700 backdrop-blur-sm">
      <nav className="w-full flex justify-center items-center">
        <SearchForm />
      </nav>
    </header>
  );
}
