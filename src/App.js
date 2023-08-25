import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [search, setSearch] = useState(null);
  return (
    <div className="App">
      <div className="bg"> </div>
      <Sidebar />
      <div className="alignment">
        <Header search={search} setSearch={setSearch} />
        <Home search={search} />
      </div>
    </div>
  );
}

export default App;
