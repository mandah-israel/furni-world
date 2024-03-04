import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import vere from "../../src/Images/vere.webp";
import cin from "../../src/Images/cin.webp";
import spen from "../../src/Images/spen.webp";
import bin from "../../src/Images/bin.webp";
import unix from "../../src/Images/unix.webp"
import sol from "../../src/Images/sol.webp"
import pere from "../../src/Images/pere.webp"
import set from "../../src/Images/set.webp"
import vin from "../../src/Images/vin.webp"
import were from "../../src/Images/were.webp"
import yep from "../../src/Images/yep.webp"
import pine from "../../src/Images/pine.webp"
import { WhatsappLogo } from "@phosphor-icons/react";
const  products=()=>{
 return(
    <div className="span">
    <div className="header">
        <Header/>
    </div>
    <div className="spy spere">
            <h2>Shop</h2>
            <h3>Modern Furniture</h3>
        </div>
    <h3 id="dim">New Arrivals Collections</h3>
    <section id="arrival" className="ma-gin" >
    <div className="div">
        <Link to="/cin"><img src={cin} /></Link>
        <h5>Monet Sofa Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$600</h6>
    </div>
    <div className="div">
        <Link to="/spen"><img src={spen} /></Link>
        <h5>Shine Dining Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$300</h6>
    </div>
    <div className="div">
        <Link to="/vere"><img src={vere} /></Link>
        <h5>Versace Dining Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$400</h6>
    </div>
    <div className="div">
        <Link to="/bin"><img src={bin} /></Link>
        <h5>Hareem Sofa Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$700</h6>
    </div>
    <div className="div">
        <Link to="/unix"><img src={unix} /></Link>
        <h5>Palermo Bedroom Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$200</h6>
    </div>
    <div className="div">
        <Link to="/sol"><img src={sol} /></Link>
        <h5>Dream Bedroom Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$800</h6>
    </div>
    <div className="div">
        <Link to="/pere"><img src={pere} /></Link>
        <h5>Sirius Bedroom Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$700</h6>
    </div>
    <div className="div">
        <Link to="/set"><img src={set} /></Link>
        <h5>Sedef Bedroom Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$200</h6>
    </div>
    <div className="div">
        <Link to="/vin"><img src={vin} /></Link>
        <h5>Hareem Dining Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$400</h6>
    </div>
    <div className="div">
        <Link to="/were"><img src={were} /></Link>
        <h5>Tudor Sofa Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$200</h6>
    </div>
    <div className="div">
        <Link to="/yep"><img src={yep} /></Link>
        <h5>Selanik Royal Sofa Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$300</h6>
    </div>
    <div className="div">
        <Link to="/pine"><img src={pine} /></Link>
        <h5>Vakko Sofa Set</h5>
        <div className="pet">
        <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
        <button>Order</button>
        </div>
        <h6>$500</h6>
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
export default products