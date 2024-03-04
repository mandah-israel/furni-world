import plate from "../../src/Images/plate.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Plate=()=>{
return(
    <div className="span">
    <div className="header">
        <Header/>
    </div>
 <section id="dim" className="ma-gin pa-d pa-x">
        <div className="fin">
            <img src={plate} className="img"/>
            <div className="sell sew">
                <h4>Platter 33CM</h4>
                <h6>$600</h6>
                <p>Platter 33CM is a stunning piece of decor that can add a touch of elegance to any living space. Its unique design and high-quality materials make it a standout piece that is perfect for any occasion. Although it is primarily decorative, it can also be used as a functional piece of serveware.</p>
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
export default Plate