import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopPanel from "./components/TopPanel/TopPanel";
import Posts from "./components/Posts/Posts";
import AddPostForm from "./components/AddPost/AddPost";

import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <TopPanel />

        <Switch>
          <Route path="/posts" component={Posts} exact={true} />
          <Route path="/addpostform" component={AddPostForm} exact={true} />
          <Route path="/" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
