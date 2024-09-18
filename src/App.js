// App.js
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"; // Import the CSS file
import MapComponent from "./components/MapComponet";
import DetailPage from "./components/DetailPage";
import IndiaMap from "./components/IndiaMap";

function App() {

  const [selectedState, setSelectedState] = useState(null);

  const handleStateSelect = (stateName) => {
    setSelectedState(stateName);
  };
  return (
    <Router>
      <Routes>
     
      <Route
              path="/india"
              element={<IndiaMap selectedState={selectedState} />}
            />
        <Route
              path="/"
              element={<MapComponent onStateSelect={handleStateSelect} />}
            />
                <Route path="/monument/:name" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
