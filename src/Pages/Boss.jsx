import boss from "../../src/Images/boss.webp"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
const Boss=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
     <section id="dim" className="ma-gin pa-d pa-x">
            <div className="fin">
                <img src={boss} className="img"/>
                <div className="sell sew">
                    <h4>Candle Holder</h4>
                    <h6>$600</h6>
                    <p>Candle Holder is a beautiful and functional piece of decor that can add a touch of elegance to any living space. Its unique design and high-quality materials make it a standout piece that is perfect for any room in your home.</p>
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
export default Boss