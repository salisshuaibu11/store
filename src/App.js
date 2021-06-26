import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";

import Reports from "./pages/Reports";
import ReportsOne from "./pages/ReportsOne";
import ReportsTwo from "./pages/ReportsTwo";
import ReportsThree from "./pages/ReportsThree";
import ReportsFour from "./pages/ReportsFour";

import Invitation from "./pages/Invitation";
import Payment from "./pages/Payment";

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
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/reportsone">
            <ReportsOne />
          </Route>
          <Route path="/reportstwo">
            <ReportsTwo />
          </Route>
          <Route path="/reportsthree">
            <ReportsThree />
          </Route>
          <Route path="/reportsfour">
            <ReportsFour />
          </Route>
          <Route path="/invitation">
            <Invitation />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
