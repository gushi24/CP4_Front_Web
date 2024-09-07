import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import Card from "../components/Card.jsx"
import '../css/produtos.css'

const Produtos=()=>{
    return (
        <>
        <Nav/>

        <div className="productSection">
            <h1>Products</h1>

            <div className="productCards">
                <Card imageAlt='Hats Image' name="Hats" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={2.59}/>
                <Card imageAlt=' Shoes Image' name="Shoes" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={49.99}/>            
                <Card imageAlt='Shirt Image' name="Shirt" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={25.99}/>
                <Card imageAlt='Shorts Image' name="Shorts" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={44.99}/>     
                <Card imageAlt='Sweatpants Image' name="Sweatpants" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={39.99}/>            
                <Card imageAlt='Bats Image' name="Bats" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={14.99}/>            
                <Card imageAlt='Caps Image' name="Caps" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={4.99}/>            
                <Card imageAlt='Shoes Image' name="Running Shoes" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={9.99}/>
                <Card imageAlt='Hats Image' name="Hats" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={2.59}/>
                <Card imageAlt=' Shoes Image' name="Shoes" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={49.99}/>            
                <Card imageAlt='Shirt Image' name="Shirt" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={25.99}/>
                <Card imageAlt='Shorts Image' name="Shorts" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={44.99}/>     
                <Card imageAlt='Sweatpants Image' name="Sweatpants" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={39.99}/>            
                <Card imageAlt='Bats Image' name="Bats" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={14.99}/>            
                <Card imageAlt='Caps Image' name="Caps" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={false} value={4.99}/>            
                <Card imageAlt='Shoes Image' name="Running Shoes" productDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet magna vel odio ornare tempus. Nunc pretium nec ." onStock={true} value={9.99}/>
            </div>
        </div>

        <Footer/>

        </>
    )
}
export default Produtos