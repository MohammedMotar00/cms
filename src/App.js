import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./view/Main";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
