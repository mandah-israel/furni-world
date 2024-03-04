import rat from "../../src/Images/rat.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Rat=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={rat} className="img"/>
                <div className="sell sew">
                    <h4>Aluminum and Plastic Globe</h4>
                    <h6>$600</h6>
                    <p>Aluminium and Plastic Globe Tripod 15 is a stunning piece that features a unique design. It is made of aluminium and plastic, which gives it a modern and elegant look. The globe is 15 cm in diameter and is mounted on a tripod stand, making it a perfect size for use as a decorative piece in any room of your home.</p>
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
export default Rat