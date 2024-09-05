import '../css/footer.css'

const Footer=()=>{
    return (
        <>  
        <footer>

            <div>
                <h1></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet aliquam dapibus. Vivamus egestas nec dui vel egestas. Fusce mollis lorem et nunc imperdiet sodales.</p>
                <img src="#" alt="socialIcon" />
                <img src="#" alt="socialIcon" />
                <img src="#" alt="socialIcon" />
                <img src="#" alt="socialIcon" />
            </div>

            <div>
                <ul className="contact">
                    <li className="list">
                        <img src="#" alt="contactIcon" />
                        <span>São Paulo, Pacaembu 412, SP</span>
                    </li>
                    <li className="list">
                        <img src="#" alt="contactIcon" />
                        <span>email@example.com</span>
                    </li>
                    <li className="list">
                        <img src="#" alt="contactIcon" />
                        <span >+ 11 9 9932-3214</span>
                    </li>   
                    <li className="list">
                        <img src="#" alt="contactIcon" />
                        <span>+ 01 234 567 89</span>
                    </li>
                </ul>
            </div>

            <div>
                <h1></h1>
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

        </footer>
        </>
    )
}
export default Footer