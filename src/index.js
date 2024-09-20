import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["one", "two", "three", "four", "five"]}
      defaultRating={3}
    />
    <StarRating maxRating={15} color="red" size={25} className="test" />
  </React.StrictMode>
);
