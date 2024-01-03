import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (
<h1 className="heading">
    Namaskar React using JSX
    </h1>
    );

// Rendering component into component.
const HeadingComponent = () => (
     <div id="container">
    <h1 className="heading">Namaste ReactJS Functional Component</h1>       
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
