import Header from "../Component/Header"
import Footer from "../Component/Footer"
import bin from "../../src/Images/bin.webp";
import add from "../../src/Images/add.jpeg";
import cin from "../../src/Images/cin.webp";
import dave from "../../src/Images/dave.webp";
import win from "../../src/Images/win.webp";
import game from "../../src/Images/game.webp";
import were from "../../src/Images/were.webp";
import piano from "../../src/Images/piano.webp";
import { Link } from "react-router-dom";
import { WhatsappLogo } from "@phosphor-icons/react";
const Chair=()=>{
    return(
       <div className="span">
                   <div className="header">
            <Header/>
        </div>
        <h3 id="dim">Sofa Sets</h3>
        <section id="arrival" className="ma-gin" >
            <div className="div">
                <img src={add} />
                <h5>Sedef Setting Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$140</h6>
            </div>
            <div className="div">
                <img src={cin} />
                <h5>Monet Sofa Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$300</h6>
            </div>
            <div className="div">
                <img src={bin} />
                <h5>Hareem Sofa Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$100</h6>
            </div>
            <div className="div">
                <img src={game} />
                <h5>Kiev Sofa Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$120</h6>
            </div>
            <div className="div">
                <img src={dave} />
                <h5>Vizyon Corner Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$110</h6>
            </div>
            <div className="div">
                <img src={win} />
                <h5>Pizca Corner Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$300</h6>
            </div>
            <div className="div">
                <img src={were} />
                <h5>Tudor Sofa Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$400</h6>
            </div>
            <div className="div">
                <img src={piano} />
                <h5>Piano Corner Set</h5>
                <div className="pet">
            <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
            <button>Order</button>
            </div>
                <h6>$100</h6>
            </div>
        </section>
        <div className="footer">
            <Footer/>
        </div>
       </div>
    )
}
export default Chair