import { useState } from "react";
import { Link } from "react-router-dom";
import Basic from "./components/Basic";
import Button from "./components/Button";

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <Basic />
    </div>
  );
}
export default App;