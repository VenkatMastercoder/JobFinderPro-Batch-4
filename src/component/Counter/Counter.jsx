import { useState } from "react";

const Counter = () => {
  
  // let count = 0
  const [count, setCount] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  return (
    <>
      <div className="border border-red-500">
        <p>Counter : {count}</p>

        <button
          className="bg-red-500"
          onClick={() => {
            // count = count + 1
            setCount(count + 1);
            setIsloading(true); // When ever the Setter function is Called the React will Render the  Component
            console.log(isLoading)
            console.log("+", count);
          }}>
          Count +{" "}
        </button>

        <button
          className="bg-green-400"
          onClick={() => {
            // count = count - 1
            setCount(count - 1);
            console.log("-", count);
          }}>
          Count -
        </button>
      </div>
    </>
  );
};

export default Counter;
