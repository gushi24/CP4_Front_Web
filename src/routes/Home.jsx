import Card from "../components/Card.jsx"
import Nav from "../components/Nav.jsx"
import Footer from '../components/Footer.jsx'
import Slideshow from "../components/SlideShow.jsx"

const Home=()=>{
    return (
        <>
        <Nav/>
        <Slideshow/>
        <h1>Produtos</h1>
        <Card name="Illustration" productDesc="oi" onStock={false} value={40.32}/>
        <Footer/>
        </>
    )
}
export default Home