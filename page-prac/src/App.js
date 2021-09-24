import './App.css';
import Main from "./pages/Main/Main";
import Background from "./pages/Background";
import Practice from './pages/Practice/Practice';
import Character from './pages/Character/Character';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={Main} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/character" component={Character} />
      </Router>
    </div>
  );
}

export default App;
