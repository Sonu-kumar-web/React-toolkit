import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";

import Home from "./pages/Home";
function App() {
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-12">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
