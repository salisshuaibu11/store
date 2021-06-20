import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div
        className="flex h-screen overflow-y-hidden bg-gray-100"
        style={{ width: "100vw" }}
      >
        <Layout>
          <Route path="/">
            <Home />
          </Route>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
