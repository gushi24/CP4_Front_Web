import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import '../css/contato.css'
import pinIcon from '../assets/pinIcon.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import emailIcon from '../assets/emailIcon.svg'

const Contato=()=>{
    return (
        <>
        <Nav/>

        <h1 className="title">GET IN TOUCH</h1>
        <div className="contactInfo">
            <section>
                <img src={pinIcon} alt="Pin Icon"/>
                <h1>ADDRESS</h1>
                <h2>New York</h2>
                <p>42th Street 321</p>
                <h2>Chicago</h2>
                <p>Orlando Avenue 174</p>
            </section>

            <section>
                <img src={phoneIcon} alt="phoneIcon"/>
                <h1>PHONE</h1>
                <h2>Sales Department</h2>
                <p>313 1 3278 3215</p>
                <h2>Human Resources</h2>
                <p>313 1 3568 8615</p>
                <h2>New York Office</h2>
                <p>313 8 7848 3325</p>
                <h2>Chicago Office</h2>
                <p>288 2 5328 5811</p>
            </section>
            
            <section>
                <img src={emailIcon} alt="emailIcon"/>
                <h1>EMAIL</h1>
                <h2>Human Resources</h2>
                <p>HR@email.com</p>
                <h2>Sales Department</h2>
                <p>sales@email.com</p>
                <h2>Office Email</h2>
                <p>O@email.com</p>
            </section>
        </div>

        <Footer/>
        </>
    )
}
export default Contato