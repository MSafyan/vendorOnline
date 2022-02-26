import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  return (
    <div className="border-b-2 border-gray-400 p-4 shadow-md shadow-gray-400/10">
      <div className="mx-auto flex max-w-4xl items-center gap-6">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full rounded-lg border-gray-400/80 py-2 pl-4 pr-16 text-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="City or Zip code"
          />
          <button className="absolute top-1/2 right-0 mr-3 -translate-y-1/2 focus:border-none">
            <SearchIcon className=" h-6 w-6 text-primary-500" />
          </button>
        </div>
        <button className="rounded-md bg-primary-500 px-8 py-1 text-lg text-white transition hover:bg-primary-600">
          Search
        </button>
        <button className="rounded-md bg-primary-500 px-8 py-1 text-lg text-white transition hover:bg-primary-600">
          Price
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
