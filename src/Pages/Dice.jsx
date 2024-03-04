import dice from "../../src/Images/dice.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Dice=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={dice} className="img"/>
                <div className="sell sew">
                    <h4>Decorative Wooden Dice</h4>
                    <h6>$600</h6>
                    <p>Welcome to the world of decor that transcends the ordinary. Our Decorative Wooden Dice, available in six different sizes (6*6, 8*8, 10*10, 12*12, 14*14, 16*16), are more than just decorative items; they are symbols of craftsmanship, versatility, and style that will elevate your decor to new heights.</p>
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
export default Dice