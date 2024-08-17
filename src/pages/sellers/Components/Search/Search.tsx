import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";

const itemList = [
  "",
  // "idemeto",
  // "waza",
  // "mister-gamal",
  // "pixel-shinobi",
  // "Gad",
  // "big-ear",
  // "Nelson",
  // "Big-head",
];

interface ISearchProps {
  placeholder: string;
}

const Search: React.FC<ISearchProps> = ({ placeholder }) => {
  const [filteredList, setFilteredList] = useState(itemList);

  const FilterBySearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    var updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="relative w-full hidden lg:block">
      <div className="relative">
        <input
          onChange={FilterBySearch}
          className="text-black py-2 px-4 pl-10 rounded-md w-full border border-slate-400"
          placeholder={placeholder}
        />
        <IoIosSearch
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>
      <ol className="mt-2">
        {filteredList.map((item, index) => (
          <li key={index} className="py-1">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Search;
