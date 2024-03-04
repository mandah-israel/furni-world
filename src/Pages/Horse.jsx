import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import horse from "../../src/Images/horse.webp"
const Horse=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={horse} className="img"/>
                <div className="sell sew">
                    <h4>Aluminum Decorative Horse</h4>
                    <h6>$600</h6>
                    <p>Step into a world of sophistication and equine grace with our Aluminum Decorative Horse. This exceptional piece is more than just a decor item; it’s a work of art, a symbol of strength, and a stunning addition to your home or office decor.</p>
                    <button className="vin">ADD TO CART</button>
                </div>
            </div>
        </section>
        <div id="spin" className="ma-gin pa-d">
            <h4>Subscribe to our newsletter</h4>
            <div className="input">
                <input type="text"placeholder="E Mail" required/>
                <button>SUBMIT</button>
            </div>
        </div>
      <div className="footer">
        <Footer/>
    </div>
    </div>
    )
}
export default Horse