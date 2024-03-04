import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import fish from "../../src/Images/fish.webp";
import gine from "../../src/Images/gine.webp";
import plate from "../../src/Images/plate.webp";
import vull from "../../src/Images/vull.webp";
import vex from "../../src/Images/vex.webp"
import rat from "../../src/Images/rat.webp"
import bell from "../../src/Images/bell.webp"
import vip from "../../src/Images/vip.webp"
import horse from "../../src/Images/horse.webp"
import dice from "../../src/Images/dice.webp"
import light from "../../src/Images/light.webp"
import boss from "../../src/Images/boss.webp"
import { WhatsappLogo } from "@phosphor-icons/react";
const Accessories=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
        <div className="spy spere">
                <h2>ACCESSORIES</h2>
                <h3>Categories</h3>
            </div>
        <h3 id="dim">ACCESSORIES</h3>
        <section id="arrival" className="ma-gin" >
        <div className="div">
            <Link to="/gine"><img src={gine} /></Link>
            <h5>Desk Clock</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$300</h6>
        </div>
        <div className="div">
            <Link to="/plate"><img src={plate} /></Link>
            <h5>Platter 33CM</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$400</h6>
        </div>
        <div className="div">
            <Link to="/fish"><img src={fish} /></Link>
            <h5>Polyester Eagle</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$200</h6>
        </div>
        <div className="div">
            <Link to="/vull"><img src={vull} /></Link>
            <h5>Aluminum Plastic Globe</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$100</h6>
        </div>
        <div className="div">
            <Link to="/vex"><img src={vex} /></Link>
            <h5>Palermo Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$110</h6>
        </div>
        <div className="div">
            <Link to="/rat"><img src={rat} /></Link>
            <h5>Aluminum and Plastic Globe</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$100</h6>
        </div>
        <div className="div">
            <Link to="/bell"><img src={bell} /></Link>
            <h5>Candle Holder 86 CM -L</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$130</h6>
        </div>
        <div className="div">
            <Link to="/vip"><img src={vip} /></Link>
            <h5>Cream Enamel Vase 43 CM</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$140</h6>
        </div>
        <div className="div">
            <Link to="/horse"><img src={horse} /></Link>
            <h5>Aluminum Decorative Horse</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$130</h6>
        </div>
        <div className="div">
            <Link to="/dice"><img src={dice} /></Link>
            <h5>Decorative Wooden Dice</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$100</h6>
        </div>
        <div className="div">
            <Link to="/light"><img src={light} /></Link>
            <h5>Aluminum Lamp Finish with Fitting</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$300</h6>
        </div>
        <div className="div">
            <Link to="/boss"><img src={boss} /></Link>
            <h5>Candle Holder</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$300</h6>
        </div>
    </section>
    <div id="spin" className="ma-gin pa-d spix">
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
export default Accessories