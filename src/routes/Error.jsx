import {Link} from 'react-router-dom'
import '../css/base.css'
import '../css/error.css'
import homeIcon from '../assets/homeIcon.svg'

const Error=()=>{
    return (
        <>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist.<br/> You can click the button below to go back to the homepage.</p>
            <Link>
                <button className="Btn">
  
                    <div className="sign">
                        <img src={homeIcon} alt='icon'></img>
                    </div>
  
                    <div className="text">Home</div>
                </button>


            </Link>
        </>
    )
}
export default Error