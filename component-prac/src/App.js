import logo from './logo.svg';
import './App.css';
import Color from "./components/Color/Color";
import Number from "./components/Number/Number";
import Imagesize from './components/Imagesize/Imagesize';
import Header from './components/Header';
import Layout from './components/Layout';
import Name from './components/Name/Name';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Layout>
      <Header/>
      <div className="leftSection">
      <div className="colorPos">
          <Color/>
        </div>
        <div className="numberPos">
          <Number/>
        </div>
      </div>
      <div className="rightSection">
      <div className="sizePos">
          <Imagesize/>
        </div>
        <div className="namePos">
          <Name/>
        </div>
      </div>
      <Footer/>
      </Layout>
    </div>
  );
}

export default App;
