/* eslint-disable no-unused-vars */
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import Counter from "./component/Counter/Counter";
import Comment from "./component/Comment/Comment";

// Tailwind
const paragraphElement = <p className="bg-green-500">Hello World</p>; // React Element

// External CSS
const heading = <h1 className="para">Heading</h1>;

// Inline CSS
const spanElement = <span style={{ color: "red" }}>Inline css</span>;

/**
 * Hooks
 *  - Its an NorMAL Js Function dev by React Dev
 *
 * - useState() - 80%
 * - useEffect() - 20%
 *
 */

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
    name: "dog",
  },
  {
    name: "car",
  },
  {
    name: "tea",
  },
];

const AppLayout = () => {
  const [data,setData] = useState(dummyData)
  const [searchText, setSearchText] = useState();
  const [filterData,setFilterData] = useState(data)

  return (
    <>
      <Header />
      {/* <Body />*/}
      {/* <Counter />
      <Comment /> */}

      <div className="border border-red-500">
        <input
          className="border border-green-500 w-52"
          placeholder="Enter your name"
          onChange={(ee) => {
            const newfilterData = data.filter((e)=>{
              return  e.name === ee.target.value
            })
            setFilterData(newfilterData);
          }}
        />

        <button onClick={()=>{
          const newfilterData = data.filter((e)=>{
            return  e.name === searchText
          })

          console.log(searchText,newfilterData)

          setFilterData(newfilterData)
        }} >Search</button>

        {filterData.map((e, index) => {
          return (
            <>
              <div key={index}>
                <p>{e.name}</p>
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
