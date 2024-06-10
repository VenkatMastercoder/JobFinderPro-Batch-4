import React from "react";
import ReactDOM from "react-dom";

// createElement() ==> react ❌ ==> JSX
// createRoot() - render() ==> react-dom ✅

// <h1>Heading</h1>

// const HeadingElement = React.createElement("h1", null, "Heading");

// JSX - "Html Like Syntax" - FB
// JSX ==> React.createElement() => Object => HTML
const HeadingElementJsx = <h1>Heading</h1>;
const paraElement = <p>Paragrah</p>; // React Element 
const button = <button>click</button>;

console.log(paraElement);

// Function Components -  Its Normal JavaScript Function with return a Pices of JSX

function add() {
  return 5;
}

add();

function Header() {
  return <p>Header Component</p>;
}

const Footer = () => {
  return (
    <>
      <p>Footer Component</p>
    </>
  );
};

const Food = () =>{
  return <p>Food Content</p>
}

// Component Pattern - Component Composition - if i have to use a component inside a Other Component
const Body = () => {
  return (
    <>
      <Header />
      <p>Content</p>
      {5 + 5}
      {Food()}
      <Food></Food>
      <Footer />
    </>
  );
};

/**
 * - React Design Pattern
 *  - Component Pattern
 *  - The Hooks Pattern
 *  - Render Pattern
 *  - HOC Pattern
 *  - Provider Pattern
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
