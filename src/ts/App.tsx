import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from "./pages/main";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
  )
}