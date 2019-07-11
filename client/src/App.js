import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Herbs from "./pages/Herbs";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
<div>
       
        <Switch>
          <Route exact path="/" component={Herbs} />
          <Route exact path="/books" component={Herbs} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />

        </Switch>
        <Footer/>
        </div>
    </Router>
   
  )
    };
    export default App;