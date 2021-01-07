import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ComponentPage from "./view/ComponentPage";
import Main from "./view/Main";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/component" component={ComponentPage} />
        {/* <Route
          path="/component"
          render={(props) => <ComponentPage id={props.match.params.id} />}
        /> */}
      </Router>
    </div>
  );
}

export default App;
