import Card from "../components/Card.jsx"
import Nav from "../components/Nav.jsx"
import baseballBat from '../assets/baseballBat.png'

const Home=()=>{
    return (
        <>
        <Nav/>
        <h1>Home</h1>
        <Card productImage={baseballBat} name="Illustration" productDesc="oi" onStock={false} value={40.32}/>
        </>
    )
}
export default Home