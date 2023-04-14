import Produtitem from '../components/Productitem';
import productData from '../data/productData'
// console.log(productData);
import './Products.css'
//img
import IntroImg from '../img/Headline_products.png'




const Products = () => {

    return ( 
        <section>
            <div className='container_header_img'>
                <img src={IntroImg} alt="headline products" />
            </div>
            
            <section className='container_products'>
                {productData.map((elt, index) => {
                return (
                    <Produtitem
                    key={index}
                    id={elt.id}
                    productname={elt.productname}
                    img={elt.img}
                />)
                
            })}
            </section>
            
        </section>
    );
}

export default Products;