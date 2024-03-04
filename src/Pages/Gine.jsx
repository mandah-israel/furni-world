import gine from "../../src/Images/gine.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Gine=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={gine} className="img"/>
                <div className="sell sew">
                    <h4>Desk Clock</h4>
                    <h6>$600</h6>
                    <p>Desk T.Clock 8Face 29CM is a versatile and elegant addition to any workspace. Its unique design, high-quality materials, and durable construction make it the perfect choice for adding a touch of luxury to your desk or table.</p>
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
export default Gine