import Header from "../Component/Header"
import Footer from "../Component/Footer"
import wood from "../../src/Images/wood.webp";
import copy from "../../src/Images/copy.webp";
import zip from "../../src/Images/zip.webp";
import vite from "../../src/Images/vite.webp";
import unix from "../../src/Images/unix.webp"
import sol from "../../src/Images/sol.webp"
import pere from "../../src/Images/pere.webp"
import set from "../../src/Images/set.webp"
import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Bed=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
        <h3 id="dim">Bedroom Sets</h3>
        <section id="arrival" className="ma-gin" >
        <div className="div">
            <img src={copy} />
            <h5>Jenga Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$400</h6>
        </div>
        <div className="div">
            <img src={zip} />
            <h5>Brownie Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$500</h6>
        </div>
        <div className="div">
            <img src={wood} />
            <h5>Wooden Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$700</h6>
        </div>
        <div className="div">
            <img src={vite} />
            <h5>Icon Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$200</h6>
        </div>
        <div className="div">
            <img src={unix} />
            <h5>Palermo Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$400</h6>
        </div>
        <div className="div">
            <img src={sol} />
            <h5>Dream Walnut Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$500</h6>
        </div>
        <div className="div">
            <img src={pere} />
            <h5>Sirius Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$700</h6>
        </div>
        <div className="div">
            <img src={set} />
            <h5>Sedef Bedroom Set</h5>
            <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
            <h6>$200</h6>
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
export default Bed