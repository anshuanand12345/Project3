import { useState } from "react";
import "./App.css";

function App() {

  const [active, setActive] = useState(false);
  const changeBg = () => {
    setActive(!active);
  };
  return (
   <div className='page'>
      <button onClick={changeBg} style={{ backgroundColor: active ? "red" : "blue" }}> {active ? "True" : "False" } </button>
   </div>
  );
}

export default App;
