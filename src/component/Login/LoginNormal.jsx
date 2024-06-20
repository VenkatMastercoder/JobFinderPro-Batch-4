import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);

    // Vaildate the Data

    // API CALL
  };

  return (
    <>
      <h1>Normal Form</h1>
      <form onSubmit={onSubmit}>
        <div className="border border-red-500">
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            placeholder="Enter a Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="border border-red-500">
          <label htmlFor="age">age :</label>
          <input
            id="age"
            placeholder="Enter a Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
