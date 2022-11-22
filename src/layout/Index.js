import Header from "../layout/Header";
import Footer from "../layout/Footer";


const Index = ({ children }) => {
  return (
    <div>
      <div className="bagianNav">
        <Header />
      </div>
      <div>
        {children}
      </div>
      <div className="bagianFooter">
        <Footer />
      </div>
    </div>
  )
}

export default Index;
