import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Article from "./Article";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <main className="flex flex-col w-full h-full">
        <Header
          headercounter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <div className="flex h-full">
          <Sidebar counter={counter} />
          <Article />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
