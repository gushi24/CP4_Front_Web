import '../css/base.css'
import '../css/logo.css'
import {Link} from 'react-router-dom'

const Logo=()=>{
    return (
        <>
            <Link to='/'><button class="logo">EAGLELAND🦅</button></Link>
        </>
    )
}
export default Logo