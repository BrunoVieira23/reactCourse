import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Article() {
  return (
    <article className="p-4">
      Hello Visitor,
      <br />
      <br />
      <br />
      <br />
      Please go to your inbox to read them.
    </article>
  );
}

function Footer() {
  return (
    <footer className="h-12 border-t border-slate-400 flex items-center px-4 text-sm text-slate-400">
      by TMNT DEVelopment (2022)
    </footer>
  );
}

function App() {
  const [counter, setCounter] = useState(64);

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
