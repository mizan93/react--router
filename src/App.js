import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post" component={Posts} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
