import { useState, useRef } from 'react';

export function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('');
  const searchRef = useRef();

  const handleSubmit = function (event) {
    event.preventDefault();

    searchRef.current.blur();
    onFormSubmit(term);
  };

  return (
    <nav className="w-full py-3 fixed bg-gray-700 flex justify-center items-center">
      <form
        className="border bg-gray-500 border-gray-500 flex items-center w-full max-w-2xl h-12"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-gray-900 border-none h-full outline-1 outline-blue-600 text-white flex-1 px-4 placeholder:text-gray-100"
          ref={searchRef}
          value={term}
          onChange={e => setTerm(e.target.value)}
          type="search"
          aria-label="Search a video"
          placeholder="Search"
          required
        />
        <button
          className="h-full w-16 flex items-center justify-center border-none bg-transparent text-white"
          type="submit"
          aria-label="search"
        >
          <ion-icon
            name="search-outline"
            style={{ fontSize: '24px' }}
          ></ion-icon>
        </button>
      </form>
    </nav>
  );
}
