import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import { Eye } from "@phosphor-icons/react"
import { useState } from "react"
import { EyeSlash } from "@phosphor-icons/react"
const Register=()=>{
    const [visible, setVisible] = useState(false);
  function show() {
    setVisible(!visible);
  }

    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
        <div className="spy spere">
            <h2>My Account</h2>
            <div className="acct">
            <Link to="/home">HOME</Link>
                <div className="pi">/</div>
                <h3>MY ACCOUNT</h3>
            </div>
            </div>
        <section className="span ma-gin pa-d">
            <h3>REGISTER</h3>
            <form action="" id="form">
                <label className="label first">First Name* </label>
                <input type="text" required/>
                <label className="label last">Last name* </label>
                <input type="text"  required/>
                <label className="label phone">Phone* </label>
                <input type="text" required/>
                <label className="label">Email address* </label>
                <input type="text"  required/>
                <label className="pass">Password* </label>
                <div className="ran">
                <input type={visible ? "text":"password"}  maxLength={8} required/>
                <div onClick={show} className="vut">{ visible? <EyeSlash size={20}/>:<Eye Size={20}/>}</div>
                </div>
                <button className="but"><Link>REGISTER</Link></button>
                <div className="reg span ma-gin pa-d pa-x">
            <p>Your personal data will be used to support your experince on this website, manage access to your account and for other purpose described on our privacy policy page.</p>
            </div>
            </form>
        </section>
        <div className="orange">
        <hr />or<hr />
        </div>
        <div className="reg span ma-gin pa-d pa-x">
            <h3>REGISTER</h3>
            <p>Register for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in to time . We will only ask you for information necessary to  make the purchase process fater and easier.</p>
            <button><Link to="/login">LOGIN</Link></button>
        </div>
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
export default Register