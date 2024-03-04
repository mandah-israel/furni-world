import vex from "../../src/Images/vex.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Vex=()=>{
    return(
        <div className="span">
    <div className="header">
        <Header/>
    </div>
 <section id="dim" className="ma-gin pa-d pa-x">
        <div className="fin">
            <img src={vex} className="img"/>
            <div className="sell sew">
                <h4>Palermo Bedroom Set</h4>
                <h6>$600</h6>
                <p>Elevate your home decor with our Aluminium Decorative Aircraft. Crafted to perfection, this exquisite piece exudes sophistication and artistry. Meticulously designed, it seamlessly blends form and function, making it a statement of elegance in any space.</p>
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
export default Vex