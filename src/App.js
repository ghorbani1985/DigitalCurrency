import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


//Components
import Landing from "./Components/Landing";
function App() {
  return (

      <div className="w-full bg-gray-100 min-h-screen flex flex-col">
        <Landing />
      </div>

  );
}

export default App;
