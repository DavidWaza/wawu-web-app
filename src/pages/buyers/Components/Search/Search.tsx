import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";

const itemList = [
  "idemeto",
  "waza",
  "mister-gamal",
  "pixel-shinobi",
  "Gad",
  "big-ear",
  "Nelson",
  "Big-head",
];

const Search = () => {
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
    <div>
      <div>
        <input onChange={FilterBySearch} className="text-black py-2 px-4 rounded-md" />
      </div>
      <ol>
        {filteredList.map((item, index) => (
          <li key={index} className="hidden">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Search;
