import Header from "../Component/Header"
import Footer from "../Component/Footer";
import bin from "../../src/Images/bin.webp";
import add from "../../src/Images/add.jpeg";
import cin from "../../src/Images/cin.webp";
import dave from "../../src/Images/dave.webp";
import filler from "../../src/Images/filler.webp";
import knife from "../../src/Images/knife.webp"
import ike from "../../src/Images/ike.webp"
import {Bed} from "@phosphor-icons/react"
import {Van} from "@phosphor-icons/react"
import { Armchair } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
     <div className="span">
        <div className="header">
            <Header/>
        </div>
        <div className="spy">
            <h5>New Arrival Collections 2024</h5>
            <h2>Modern Furniture</h2>
            <p>A comtemporary masterpiece</p>
        </div>
        <div className="come">
            <h3>Furniture Collections</h3>
            <h2>Explore, get inspired and shop by room</h2>
            <p>Experience Luxury living today with Vento Furniture</p>
        </div>
        <div className="kim">
            <Link to="/bed"><Bed size={90} /></Link>
            <Link to="/chair"><Armchair size={90} /></Link>
        </div>
        <h3>Best Seller</h3>
        <section id="arrival" className="ma-gin" >
            <div className="div">
                <Link to="/chair"><img src={add} /></Link>
                <h5>Sedef Setting Set</h5>
                <h6>$400</h6>
            </div>
            <div className="div">
                <Link to="/chair"><img src={cin} /></Link>
                <h5>Monet Sofa Set</h5>
                <h6>$500</h6>
            </div>
            <div className="div">
                <Link to="/chair"><img src={bin} /></Link>
                <h5>Hareem Sofa Set</h5>
                <h6>$700</h6>
            </div>
            <div className="div">
                <Link to="/chair"><img src={dave} /></Link>
                <h5>Vizyon Corner Set</h5>
                <h6>$200</h6>
            </div>
        </section>
        <h3>New Products</h3>
        <section id="spell" className="ma-gin pa-d">
            <div className="fin">
                <img src={knife}/>
                <div className="sell">
                    <h4><span>Best</span> Sofa Set</h4>
                    <p>This Living room is where we spend long hours of the day watching television, reading a book or news paper, relaxing, hosting guests, or enjoying coffee; it stands out as one of the most important and decorated living spaces.</p>
                    <button><Link to="/chair">View More</Link></button>
                </div>
            </div>
            <div className="fin">
                <img src={ike}/>
                <div className="sell">
                    <h4><span>Perfect</span> Dining Room Sets</h4>
                    <p>Our Dining room sets are a collection of a mirrored console, console, marquis, dining table, and chairs designed with colors that appeal, making your home stand out, and reflect that spirit of the home.</p>
                    <button><Link to="/dining">View More</Link></button>
                </div>
            </div>
            <div className="fin">
                <img src={filler}/>
                <div className="sell">
                    <h4><span>Attractive</span> Bedrooms Sets</h4>
                    <p>Our modern Bedrooms Sets are acombination of aethetics and comfort, enriched with useful details, and promise you a healthier sleeping experience with innovative features, there is a suitable design for you.</p>
                    <button><Link to="/bed">View More</Link></button>
                </div>
            </div>
        </section>
        <h3 class="ma-gin pa-d">Our Strategy Is To Provide Our Customers With Quality Products</h3>
        <p className="ma-gin pa-d">To Vento Furniture, luxury and Comfort is the hallmark of the our products; from our High-Quality Sofa to our contemporary Dining set to our uniquely designed tables and chairs, we infuse the hallmarks of quality and comfort as essential details when crafting any of our products.</p>
        <p className="spoil ma-gin pa-d">Our attention to detail ensures that when you purchase a piece of furniture from Vinto Furniture, it will provide superior value and comfort. Our products are designed with safety in mind as well, creating pieces that are long-lasting and safe for all family members. We striv to ensure our customers enjoy their experience with us by providing the highest quality product and unbeatable customer service whenever you buy a Vento Furniture product.</p>
        <hr />
        <div className="zim">
        <Van size={90} />
        <h4>Fast Delivery</h4>
        <p className="ma-gin pa-d">Vento funiture guarantees home delivery wherever you are in Nigeria. Terms and Conditions Apply.</p>
        </div>
        <div id="spin" className="ma-gin pa-d">
            <h4>Subscribe to our newsletter</h4>
            <div className="input">
                <input type="text"placeholder="E Mail" required />
                <button>SUBMIT</button>
            </div>
        </div>
        <p className="tag">Stay in the loop with latest updates and exclusive offers subscribing to our newsletter</p>
        <div className="footer">
            <Footer/>
        </div>
     </div>
    )
}
export default Home