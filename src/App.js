import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './components/landingpage/Page';
import Intro from './components/intro/Intro';
import "./styles/landingPage.css";
import Footer from './components/footer/Footer';
import Profil from './components/bandprofil/Profil';
import Music from './components/musik/Music';
import Home from './components/navigasi/home';
import Merch from './components/merchendise/Merch'
import { Fragment } from 'react';



function App() {
  return (
    <BrowserRouter>
      <div className="muddleFoot">
        <div className="bagianNav">
          <Home />
        </div>
        <div className="bagianPage">
          <Page />
        </div>
        <div className="bagianIntro">
          <Intro />
        </div>
        <div className="bagianProfil">
          <Profil />
        </div>
        <div className="bagianMusic">
          <Music />
        </div>
        <div className="bagianMerch">
          <Merch />
        </div>
        <div className="bagianFooter">
          <Footer />
        </div>  
      </div>

      {/* <Fragment>
        <Route path="/merch" exact component={Merch} />
      </Fragment> */}

    </BrowserRouter>
  );
}

export default App;
