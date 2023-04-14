import './About.css'
import AboutImg from '../img/Headline.png'
import Schuesseln from '../img/About.png'


const About = () => {
    return (  
        <section>
        <div className='container_header_img'>
            <img src={AboutImg} alt="imported Headline" />
        </div>
        <section className='container_elemente'>
                <div>
                <img src={Schuesseln} alt="cups and bowls" />
                </div>
                <div className='container_text'>
                    <h1>WOODIES <span>in the</span> home of modern wooden furniture</h1>
                    <p>the answer to your need for furniture with shapes, sizes and colors.</p>
                </div>
            </section>
            </section>
    );
}

export default About;