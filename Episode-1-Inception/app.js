/**
 * <div id="parent">
 *    <div id="child">
 *        <h1>This is h1 element</h1>
 *        <h2>This is h2 element</h2>
 *     </div>
 * </div>
 */
import React from "react";
import  ReactDOM  from "react-dom/client";
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [ 
//     React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "heading1", className: "paragraph"}, "This is h1 Element"),
//     React.createElement("h2", { id: "heading2", className: "paragraph"}, "This is h2 Element"),
//   ]),
//    React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading3", className: "paragraph"}, "This is h1 Element"),
//     React.createElement("h2", { id: "heading4", className: "paragraph"}, "This is h2 Element"),
//   ]),
// ]
// );                          

const jsxHeading = <h1 className="head">Namaste React using JSX</h1>
console.log(jsxHeading);

//console.log(parent);  //this is return to object means (return the reactElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
