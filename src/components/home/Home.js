import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Intro from "../home/Intro";
import Music from "../home/Music";
import Page from "../home/Page";
import Profil from "../home/Profil";
import "../../styles/landingPage.css";

const Home = () => {
  return (
    <div className="muddleFoot">
      <div className="bagianNav">
        <Header />
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
      <div className="bagianFooter">
        <Footer />
      </div>
    </div>
  )
}

export default Home;