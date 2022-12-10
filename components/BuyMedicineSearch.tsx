import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

type Props = {
  placeholder: string;
  data?: [];
};

type Item = {
  id: number;
  title: string;
};

type Results = Item[] | null;

const BuyMedicneSearch = ({ placeholder, data }: Props) => {
  const [filteredData, setFilteredData] = useState<Results>([]);
  const [searchWord, setSearchWord] = useState('');

  // console.log('search', filteredData);
  const searchData = [
    { id: 1, title: 'title 1' },
    { id: 2, title: 'title 2' },
    { id: 3, title: 'title 3' },
    { id: 4, title: 'title 4' },
    { id: 5, title: 'title 5' },
    { id: 6, title: 'title 6' },
  ];

  const filterData = (event: any) => {
    let searchValue = event.target.value;
    const results = searchData.filter((item: Item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (results) {
      setFilteredData(results);
    } else {
      setFilteredData(null);
    }
  };

  return (
    <section className="w-full flex grow relative">
      <div className="group flex grow items-center justify-between rounded-md relative">
        {/* The Input */}
        <input
          type="text"
          placeholder={placeholder ? placeholder : 'Search...'}
          onChange={filterData}
          className="group-hover:bg-gray-50 bg-gray-100 text-gray-500 grow outline-none border-transparent relative rounded-md transition-colors ring-1 ring-blue-100 hover:bg-gray-50 hover:ring-2 hover:ring-blue-100 focus:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-100 truncate pr-12"
        />
        {/* The Search Icon */}
        <div className="absolute right-4 text-gray-400">
          <HiSearch className="h-6 w-6 cursor-pointer transition hover:text-blue-200" />
        </div>
      </div>
      {/* The Results */}
      {filteredData?.length !== 0 && filteredData !== null && (
        <div className="absolute z-10 top-full bg-white shadow-lg rounded-md mt-4 p-2 flex flex-col items-center justify-center gap-2 overflow-hidden overflow-y-auto search-results-custom">
          {filteredData?.map((item: Item, index) => (
            <span key={index}>{item.title}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default BuyMedicneSearch;
