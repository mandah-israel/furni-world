import vull from "../../src/Images/vull.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Vull=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={vull} className="img"/>
                <div className="sell sew">
                    <h4>Aluminum Plastic Globe</h4>
                    <h6>$600</h6>
                    <p>The Aluminum Plastic Globe 10″ is a stunning piece of home decor that is sure to impress. Its unique design and high-quality materials make it a standout piece that is perfect for any room in your home. The Aluminum Plastic Globe 10″ is a versatile piece of furniture that can be used as a decorative piece or a conversation starter. Its sleek design and perfect size make it ideal for use in any room.</p>
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
export default Vull