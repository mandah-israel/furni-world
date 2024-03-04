import Header from "../Component/Header"
import Footer from "../Component/Footer"
import vine from "../../src/Images/vine.jpg";
const About=()=>{
    return(
        <div className="span">
        <div className="header">
            <Header/>
        </div>
        <div className="spy spere bix">
            <h3>We are Luxury Furniture Manufacturing Brand with the Vision of offering  innovative and superior quality product to our customers</h3>
        </div>
        <div className="vide ma-gin pa-d">
            <img src={vine} alt="" />
        </div>
        <p className="spoil ma-gin pa-d">Vento Furniture was established in 2002 in Turkey and decided to carry its facilities to Nigeria and Canada.

Vento targeted the best quality products to its customers. Vento Furniture always presented the new modern designs developed by its customers taste and always brought the best.

Our attention to detail ensures that when you purchase a piece of furniture from Vento Furniture, it will provide superior value and comfort. Our products are designed with safety in mind as well, creating pieces that are long-lasting and safe for all family members. We strive to ensure our customers enjoy their experience with us by providing the highest quality product and unbeatable customer service whenever you buy a Vento Furniture Product.


Vento Furniture got many customers within a short time because we are aware that our customers understand high quality of products very well.

Our main goal is not to sell furniture, but to bring you together with comfortable, stylish and peaceful furniture.

With the technical support we provide after selling the furniture, we make our customers feel that we are always with them and provide support.

The leader of the furniture industry, Vento has been a pioneer in the industry and a brand that sets the trends since the day it was founded. It continues on its way without slowing down with the superiority of its production capacity, the importance it attaches to technology in design, and the understanding of merchandising that always prioritizes customer satisfaction.

Acting with the awareness of the responsibility of being a leading company in every field in the sector, Vento produces collections at the most affordable and accessible prices for customer needs while realizing designs beyond the age with technology and innovation. Vento Furniture offers you hundreds of products from sitting groups to dining rooms, from bedrooms to children's and teenage rooms, from beds, bases to garden furniture.

Among the goals of the brand is to keep the brand always young and dynamic, as well as the turnover achieved through sustainable innovative projects.

Vento Furniture also continues its efforts to increase its market share with the number of specialized stores implemented and to reach unreachable consumer profiles.</p>
<div id="spin" className="ma-gin pa-d">
            <h4>Subscribe to our newsletter</h4>
            <div className="input">
                <input type="text"placeholder="E Mail" required/>
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
export default About 