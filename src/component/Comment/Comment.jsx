import { useState } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    name: "",
    message: "",
  });

  const [commentData, setCommentData] = useState([
    {
      name: "aa",
      message: "aa",
    },
  ]);

  // data : {
  //   name : "",
  //   message: ""
  // }

  console.log(commentData);

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="border border-red-400 w-52"
          placeholder="Enter your name"
          onChange={(e) => {
            console.log(e.target.value);
            setData({ ...data, name: e.target.value });
          }}
        />
        <textarea
          className="border border-red-400 w-52"
          rows={5}
          cols={5}
          placeholder="Enter a Message"
          onChange={(e) => {
            setData({ ...data, message: e.target.value });
          }}
        />
        <button
          className="bg-green-500 w-52"
          onClick={() => {
            // setCommentData([ data]);
            // setCommentData((prev) => [...prev, data]);

            setCommentData((items) => [...items, data]); //
          }}>
          Submit
        </button>
      </div>

      <div>
        <p>{data.name}</p>
        <p>{data.message}</p>
      </div>

      <div className="border border-red-500 min-h-10">
        {commentData.map((e) => {
          return (
            <>
              <p>{e.name}</p>
              <p>{e.message}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comment;
