import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Table from "./Table"


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Table/>} />
      </Routes>
    </Router>
  );
}
