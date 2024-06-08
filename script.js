import React from "react";
import ReactDOM from "react-dom";

// <h1>Hello</h1>
const headingElement = React.createElement("h1", null, "Hello World123");

//<p>Hi</p>
const paragraphElement = React.createElement("p", null, "Hi");

/*
  <div class="Hello">
    <h1>Hi</h1>
  </div>
*/

const nestedElement = React.createElement("div", { class: "hello" }, [
  React.createElement("h1", null, "Hi"),
]);

const root = ReactDOM.createRoot(document.getElementById("div"));
root.render(nestedElement);

// const headingElement = document.getElementById("heading");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   headingElement.textContent = "Test"
// })
