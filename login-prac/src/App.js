import './App.css';
import LoginForm from './components/LoginForm';
import Success from "./components/Success/Success";
import { UserContextProvider } from "./context";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Route path="/" component={LoginForm}></Route>
          <Route path="/success" component={Success}></Route>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
