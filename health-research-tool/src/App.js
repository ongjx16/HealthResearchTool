import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <div className="container mx-auto bg-blue-100 rounded-xl shadow border p-8 m-10 ">
        <h2>
          navigation to pages
        </h2>
        <p>
          navigation in header is not done yet so use the links below to navigate first
        </p>
        {/* <div className="pt-2">
          <nav className="p-2">
            <Link to="/Home">Home</Link> |{" "}
            <Link to="/Login">Login</Link> |{" "}
            <Link to="/Signup">Signup</Link> |{" "}
            <Link to="/Preferences">Preferences</Link> |{" "}
          </nav>
        </div> */}
      </div>
      <div className="container mx-auto bg-blue-100 rounded-xl shadow border p-8 m-10 ">
        <h1 className="underline mb-0">
          styles
        </h1>
        <p className="pt-5 italic">
          try to follow the prefixed styles below
        </p>
        <p className="pb-5 italic">
          [see index.css for font details; see tailwind.config.js for preset colours acc to figma]
        </p>
        <h1>
          <text className="text-yellow">Silver</text>
          Fun Web
        </h1>
        <h2>
          header 2
        </h2>
        <h3>
          header 3
        </h3>
        <h4>
          subheader 1
        </h4>
        <h5>
          subheader 2
        </h5>
        <p>
          body
        </p>
        <Button
          text="Testing Button"
        />
      </div>
    </div>
  );
}
export default App;