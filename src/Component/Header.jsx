 import { Link } from "react-router-dom";
import logo from "../../src/Images/logo.png";
import { LinkedinLogo, List, WhatsappLogo } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react";
import { TwitterLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { useState } from "react";
 export default function Header(){
  const [closed, setClosed] = useState(true);
  function input() {
    setClosed(false);
  }
  function output(){
    setClosed(true);
  }
 return (
      <div className="header">
         <Link to="/products"><img src={logo}/></Link>
         <ul id="nav"  className={closed ? "closed":""}>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/accessories">ACCESSORIES</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/login">LOGIN/REGISTER</Link></li>
          <div className="media insit">
          <Link to="http://twitter.com/IsraelMandah?t=6A92WU78Fg-h7cNPH8ssYg&s=09" className="twi"><TwitterLogo size={30} /></Link>
          <Link to="https://www.linkedin.com/in/mandah-israel-871a12242" className="ins"><LinkedinLogo size={30} /></Link>
          <Link to="https://www.facebook.com/nikko.julian.37" className="face"><FacebookLogo size={30} /></Link>
          <Link to="https://wa.link/ju3r9u" className="you"><WhatsappLogo size={30} /></Link>
          </div>
          <div onClick={output} id="times" >
          <X size={25} />
          </div>
         </ul>
         <div onClick={input} id="bar" >
         <List size={37} />
         </div> 
      </div>
    )
  }