import React from "react";
import ReactDOM from "react-dom";

// createElement() ==> react ❌ ==> JSX
// createRoot() - render() ==> react-dom ✅

// <h1>Heading</h1>

const HeadingElement = React.createElement("h1", null, "Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingElement);
