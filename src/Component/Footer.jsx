import { Link } from "react-router-dom";
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { YoutubeLogo } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react"
import { Minus } from "@phosphor-icons/react"
import pay from "../../src/Images/pay.webp";
import { useState } from "react";
import {Copyright} from "@phosphor-icons/react"
export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(true);
  const [short, setShort] = useState(true);
  function open() {
    setVisible(!visible);
  }

  function show() {
    setHide(!hide);
  }
  function clear() {
    setShort(!short);
  }
    return (
        <div className="footer">
          <div className="media">
          <Link to="https://wa.link/ju3r9u" className="what"><WhatsappLogo size={40} /></Link>
          <h4>Customer Care</h4>
          </div>
          <div className="media">
          <Link to="http://twitter.com/IsraelMandah?t=6A92WU78Fg-h7cNPH8ssYg&s=09"className="twi"><TwitterLogo size={30} /></Link>
          <Link to="https://www.linkedin.com/in/mandah-israel-871a12242" className="ins"><LinkedinLogo size={30}/></Link>
          <Link to="https://www.facebook.com/nikko.julian.37" className="face"><FacebookLogo size={30} /></Link>
          <Link to="https://wa.link/ju3r9u" className="you"><WhatsappLogo size={30} /></Link>
          </div>
          <div className="vere">
            <div className="col collect">
              <div id="fish">
              <h5>ABOUT</h5>
              <div onClick={open} className="plus">{visible?<Minus size={30}/>:<Plus size={30}/>}</div>
              </div>
              <div  className={visible? "show":"hide"}>
              <Link><p>Contact Us</p></Link>
              <Link><p>Our Story</p></Link>
              <Link><p>Our Stores</p></Link>
              <Link><p>Our Journal</p></Link>
            </div>
            </div>
          <div className="col fin">
            <div id="fish">
              <h5>CUSTOMER SERVICE</h5>
              <div onClick={show} className="plus">{hide?<Plus size={30}/>:<Minus size={30}/>}</div>
            </div>
            <div className={hide? "cover":"open"}>
              <Link><p>My Account</p></Link>
              <Link><p>Delivery</p></Link>
              <Link><p>Size Guide</p></Link>
              <Link><p>Wholesale</p></Link>
              </div>
            </div>
            <div className="col">
            <div id="fish">
              <h5>TERMS</h5>
              <div onClick={clear} className="plus">{short?<Plus size={30}/>:<Minus size={30}/>}</div>
            </div>
            <div className={short? "short":"slide"}>
              <Link><p>Terms & Condition</p></Link>
              <Link><p>Privacy Policy</p></Link>
              <Link><p>Cookies Policy</p></Link>
              <Link><p>Gift Cards</p></Link>
              </div>
            </div>
          </div>
          <div className="gin">
          <p>All rights reserved</p>
          <Copyright size={20}/>
          <p>2024<span> Vento Furniture</span></p>
          </div>
          <Link><img src={pay}/></Link>
        </div>
       )
     }



     