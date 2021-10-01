import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodDetails from "./components/FoodDetail/FoodDetails";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
          <Route exact path="/foods">
            <Foods />
          </Route>
          <Route exact path="/food/:id">
            <FoodDetails />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
