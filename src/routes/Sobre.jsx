import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import '../css/sobre.css'
import phoneIcon from '../assets/phoneIcon.svg'
import settingsIcon from '../assets/settingsIcon.svg'
import bellIcon from '../assets/bellIcon.svg'

const Sobre=()=>{
    return (
        <>
        <Nav/>
        <div className="ourInfo">

            <section className="aboutUs">
                <h1>About</h1>
                <p>Mauris egestas dolor vitae velit dignissim, nec semper arcu dignissim. Donec in sollicitudin lorem. Praesent iaculis orci vel posuere feugiat. Etiam et lacinia lacus, quis interdum massa. Vivamus lobortis eu lorem eu imperdiet. Nullam ullamcorper est nec arcu congue fermentum at eget ex. Etiam vel nisl quis augue iaculis bibendum. Sed tempus mi nec magna tempor bibendum. Integer sit.</p>
                <p id="p2">Quisque tincidunt commodo arcu, eu fringilla dolor. Vestibulum pulvinar hendrerit mi, non suscipit lorem hendrerit id. Nam ut elementum mi. Etiam vel nisl quis augue iaculis bibendum. Sed tempus mi nec magna tempor bibendum. Integer sit.</p>
            </section>

            <section className="moreInfo">
                <div className="moreInfoSection">
                    <img src={phoneIcon} alt="phoneIcon"/>
                    <div>
                        <h1>tincidunt</h1>
                        <p>Cras ut enim eget arcu lacinia commodo vitae a purus. Pellentesque quis arcu sit amet urna efficitur lacinia in non nisl. Mauris egestas dolor vitae velit dignissim, nec semper arcu dignissim. Donec in sollicitudin lorem. Praesent iaculis orci vel posuere feugiat. Etiam et lacinia lacus, quis interdum massa. Vivamus lobortis eu lorem eu imperdiet. Nullam</p>
                    </div>
                </div>
                <div className="moreInfoSection">
                    <img src={settingsIcon} alt="settingsIcon"/>
                    <div>
                        <h1>hendrerit</h1>
                        <p>Cras ut enim eget arcu lacinia commodo vitae a purus. Pellentesque quis arcu sit amet urna efficitur lacinia in non nisl. Mauris egestas dolor vitae velit dignissim, nec semper arcu dignissim. Donec in sollicitudin lorem. Praesent iaculis orci vel posuere feugiat. Etiam et lacinia lacus, quis interdum massa. Vivamus lobortis eu lorem eu imperdiet. Nullam</p>
                    </div>
                </div>
                <div className="moreInfoSection">
                    <img src={bellIcon} alt="bellIcon"/>
                    <div>
                        <h1>lorem</h1>
                        <p>Cras ut enim eget arcu lacinia commodo vitae a purus. Pellentesque quis arcu sit amet urna efficitur lacinia in non nisl. Mauris egestas dolor vitae velit dignissim, nec semper arcu dignissim. Donec in sollicitudin lorem. Praesent iaculis orci vel posuere feugiat. Etiam et lacinia lacus, quis interdum massa. Vivamus lobortis eu lorem eu imperdiet. Nullam</p>
                    </div>
                </div>
            </section>

        </div>
        
        <Footer/>
        </>
    )
}
export default Sobre