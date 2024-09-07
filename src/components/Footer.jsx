import '../css/footer.css'
import houseIcon from '../assets/apartmentIcon.svg'
import emailIcon from '../assets/emailIcon.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import faxIcon from '../assets/faxIcon.svg'
import instaIcon from '../assets/instaIcon.svg'
import faceIcon from '../assets/faceIcon.svg'
import whatsIcon from '../assets/whatsIcon.svg'
import linkedinIcon from '../assets/linkedinIcon.svg'

const Footer=()=>{
    return (
        <>  
        <footer>
            <div className='footer'>

                <div className='footerInfo'>
                    <h1 className='footerTitle'>About Us</h1>
                    <div className='footerText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet aliquam dapibus. Vivamus egestas necconsectetur adipiscing elit. Nunc<br/>
                        uet aliquam dapibus. Vivamus egestas nec dui vel egesta dui vel egestas. Fusce mollis lorem et nunc imperdiet sodales.</p>
                    </div>
                    <div className='footerSocials'>
                    
                        <img src={instaIcon} alt="instaIcon" />
                        <img src={faceIcon} alt="faceIcon" />
                        <img src={whatsIcon} alt="whatsIcon" />
                        <img src={linkedinIcon} alt="linkedinIcon" />
                    </div>
                </div>

                <div className='footerContact'>
                    <h1 className='footerTitle'>Contact</h1>
                    <ul className="contact">
                        <li className="list">
                            <img src={houseIcon} alt="contactIcon" />
                            <span>São Paulo, Pacaembu 412, SP</span>
                        </li>
                        <li className="list">
                            <img src={emailIcon} alt="contactIcon" />
                            <span>email@example.com</span>
                        </li>
                        <li className="list">
                            <img src={phoneIcon} alt="contactIcon" />
                            <span >+ 11 9 9932-3214</span>
                        </li>   
                        <li className="list">
                            <img src={faxIcon   } alt="contactIcon" />
                            <span>+ 01 234 567 89</span>
                        </li>
                    </ul>
                </div>

                <div className='footerHours'>
                    <h1 className='footerTitle'>Opening Hours</h1>
                    <table className="table">
                        <tbody className="openHours">
                            <tr>
                                <td>Mon - Thu:</td>
                                <td>8am - 9pm</td>
                            </tr>
                            <tr>
                                <td>Fri - Sat:</td>
                                <td>8am - 1am</td>
                            </tr>
                            <tr>
                                <td>Sunday:</td>
                                <td>9am - 10pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
            
            <h1 className='footerRights'>@2024 All rights reserved</h1>

        </footer>
        </>
    )
}
export default Footer