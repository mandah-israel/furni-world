import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import fik from "../../src/Images/fik.webp"
import wear from "../../src/Images/wear.webp"
import wed from "../../src/Images/wed.webp"
import vere from "../../src/Images/vere.webp"
import vin from "../../src/Images/vin.webp"
import tin from "../../src/Images/tin.webp"
import fool from "../../src/Images/fool.webp"
import spen from "../../src/Images/spen.webp"
import { WhatsappLogo } from "@phosphor-icons/react"

const Dining=()=>{
    return(
        <div className="span">
        <div className="header">
 <Header/>
</div>
<h3 id="dim">Dining Room Sets</h3>
<section id="arrival" className="ma-gin" >
 <div className="div">
     <img src={fik} />
     <h5>Royal Mob Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$400</h6>
 </div>
 <div className="div">
     <img src={wear} />
     <h5>Jenga Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$500</h6>
 </div>
 <div className="div">
     <img src={wed} />
     <h5>Angel Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$700</h6>
 </div>
 <div className="div">
     <img src={vin} />
     <h5>Hareem Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$200</h6>
 </div>
 <div className="div">
     <img src={vere} />
     <h5>Versace Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$200</h6>
 </div>
 <div className="div">
     <img src={fool} />
     <h5>Vakko Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$100</h6>
 </div>
 <div className="div">
     <img src={tin} />
     <h5>Saltanat Ryal Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$300</h6>
 </div>
 <div className="div">
     <img src={spen} />
     <h5>Shining Dining Set</h5>
     <div className="pet">
 <Link to="https://wa.link/ju3r9u"><WhatsappLogo size={20} /></Link>
 <button>Order</button>
 </div>
     <h6>$150</h6>
 </div>
</section>
<div className="footer">
 <Footer/>
</div>
</div>
    )
}
export default Dining