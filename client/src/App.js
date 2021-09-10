import './App.css';
import { Route, Link } from "react-router-dom";
import Test from "./home/test";

function App() {
  return (
    <div>
      <Link to="/">
        <button>메인 화면으로</button>
      </Link>
      <Link to="/test">
        <button>test 화면으로</button>
      </Link>
      <Route path="/test" component={Test}></Route>
    </div>
  );
}

export default App;
