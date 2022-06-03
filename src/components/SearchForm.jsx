import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = function () {
  const [term, setTerm] = useState('');
  const navigation = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!term) return null;

    navigation(`/results?search=${term}`);
  };

  return (
    <form
      className="w-full max-w-sm md:max-w-md lg:max-w-xl h-10 bg-gray-500 border border-gray-500 flex items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-gray-900 border-none h-full outline-1 outline-blue-600 text-white flex-1 px-2 placeholder:text-gray-100"
        value={term}
        onChange={e => setTerm(e.target.value)}
        type="search"
        aria-label="Search a video"
        placeholder="Pesquisar"
      />
      <button
        className="h-full w-16 flex items-center justify-center border-none bg-transparent text-white"
        type="submit"
        aria-label="search"
      >
        <ion-icon name="search-outline" style={{ fontSize: '24px' }}></ion-icon>
      </button>
    </form>
  );
};

export default SearchForm;
