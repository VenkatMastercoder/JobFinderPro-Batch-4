import { useState } from "react";

const dummyData = [
  {
    name: "ram",
  },
  {
    name: "ram",
  },
  {
    name: "sam",
  },
  {
    name: "sam",
  },
  {
    name: "dog",
  },
  {
    name: "car",
  },
  {
    name: "tea",
  },
];

const Search = () => {
  const [data] = useState(dummyData);
  const [filterData, setFilterData] = useState(data);

  const [searchTxt, setSearchTxt] = useState("");
  return (
    <>
      {/* Search Feature */}

      <div>
        <input
          className="border border-green-500 w-52"
          placeholder="Enter your name"
          onChange={(e) => {
            const onlyRamData = data.filter((e1) => {
              return e1.name.includes(e.target.value.toLowerCase());
            });
            setFilterData(onlyRamData);
          }}
        />
      </div>

      <div>
        <input
          className="border border-green-500 w-52"
          placeholder="Enter your name"
          onChange={(e) => setSearchTxt(e.target.value)}
        />

        <button
          onClick={() => {
            const onlyRamData = data.filter((e1) => {
              return e1.name.includes(searchTxt.toLowerCase());
            });
            setFilterData(onlyRamData);
          }}>
          Search
        </button>
      </div>

      {/* Filter Feature */}
      <div>
        <button
          className="bg-red-400"
          onClick={() => {
            const onlyRamData = data.filter((e) => {
              return e.name.toLowerCase() === "ram";
            });
            setFilterData(onlyRamData);
          }}>
          Only Ram
        </button>

        <button
          className="bg-red-400 ml-5"
          onClick={() => {
            const onlyRamData = data.filter((e) => {
              return e.name.toUpperCase() === "SAM";
            });
            setFilterData(onlyRamData);
          }}>
          Only sam
        </button>

        <button
          className="bg-red-400 ml-5"
          onClick={() => {
            const onlyRamData = data.filter((e) => {
              return e.name.toUpperCase() !== "";
            });
            setFilterData(onlyRamData);
          }}>
          All{" "}
        </button>
      </div>

      {/* ARRAY */}
      {filterData.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Search;
