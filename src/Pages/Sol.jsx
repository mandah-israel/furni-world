import Footer from "../Component/Footer"
import Header from "../Component/Header"
import { Link } from "react-router-dom"
import sol from "../../src/Images/sol.webp"
const Sol=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={sol} className="img"/>
                <div className="sell sew">
                    <h4>Dream Walnut Set</h4>
                    <h6>$600</h6>
                    <p>Elevate your living space to a realm of artistic sophistication with the Dream Walnut Set. Inspired by the timeless beauty of impressionist art, this ensemble seamlessly fuses exquisite design with unparalleled comfort. Each piece in the collection is a stroke of elegance, creating a masterpiece that redefines your living room. Join us on a journey through the elements that make the Dream Walnut Set a work of art and a haven of comfort.</p>
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
export default Sol