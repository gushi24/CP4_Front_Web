import Card from "../components/Card.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import baseballBat from '../assets/baseballBat.png'


const Home=()=>{
    return (
        <>
        <Nav/>
        <h1>Home</h1>
        <Card productImage={baseballBat} imageAlt="mfka" name={32} productDesc="oi" onStock={true} value={40.32}/>
        <Card/>
        <Footer/>
        </>
    )
}
export default Home