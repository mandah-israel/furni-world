import fish from "../../src/Images/fish.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Fish=()=>{
    return(
        <div className="span">
    <div className="header">
        <Header/>
    </div>
 <section id="dim" className="ma-gin pa-d pa-x">
        <div className="fin">
            <img src={fish} className="img"/>
            <div className="sell sew">
                <h4>Polyester Eagle</h4>
                <h6>$600</h6>
                <p>Polyester Eagle (35 CM) is a beautiful and decorative piece that will add a touch of elegance to any room. The eagle is made of high-quality polyester, which makes it durable and long-lasting.</p>
                <button className="vin">ADD TO CART</button>
            </div>
        </div>
    </section>
    <div id="spin" className="ma-gin pa-d">
        <h4>Subscribe to our newsletter</h4>
        <div className="input">
            <input type="text"placeholder="E Mail" required />
            <button>SUBMIT</button>
        </div>
    </div>
  <div className="footer">
    <Footer/>
</div>
</div>
    )
}
export default Fish