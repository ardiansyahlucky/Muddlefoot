import Header from "../../layout/Header";
import Footer from "../../layout/Footer";


const Contact = () => {
  return (
    <div>
      <div className="bagianNav">
        <Header />
      </div>
      <div className="bagianContact">
        <div className="wrapper">
          <h2>CONTACT </h2>
          
          <form action="" method="post">
            <div className="form-group">
              <label for="">NAMA</label>
              <input type="text"/>
            </div>
            <div className="form-group">
              <label for="">EMAIL</label>
              <input type="email"/>
            </div>
            <div className="form-group">
              <label for="">NO.TELP</label>
              <input type="text"/>
            </div>
            <div className="form-group">
              <label for="">PESAN</label>
              <textarea name="" id="" rows="5" placeholder="Tulis pesan disini..."/>  
            </div>

            <div className="form-group">
              <button type="submit" className="submit">KIRIM PESAN </button>
            </div>

          </form>



        </div>
      </div>
      <div className="bagianFooter">
        <Footer />
      </div>
    </div>
  )
}

export default Contact;