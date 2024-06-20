import axios from "axios";
import { useEffect, useState } from "react";

const Button = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
    setData(res.data); // setData()
  };

  return (
    <>
      <div className="p-5">
        <button className="bg-red-500">Hello World</button>
        <p>{data?.title}</p>
        <p>{data?.id}</p>
      </div>
    </>
  );
};

export default Button;
