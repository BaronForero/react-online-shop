import HeroImg from '../img/Home.png'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return ( 
        <section className="container">

            <div className='container_text'>
                <h2>Are you looking for <span>wooden furniture</span> for your place?</h2>
                <h1>This is the Right Place</h1>
                <Link to='./products'>Explore Categories</Link>
            </div>

            <div>
                <img src={HeroImg} alt="table" className='table'/>
            </div>

    </section>
    );
}

export default Home;