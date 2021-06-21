import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div
        className="flex h-screen overflow-y-hidden bg-gray-100"
        style={{ width: "100vw" }}
      >
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
