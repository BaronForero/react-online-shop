import { useParams } from 'react-router-dom'
import productData from '../data/productData'
// console.log(productData);


const Productdetails = () => {

const blogParams = useParams()

    return ( 
        <>
            <h1>{productData[blogParams.detail].productname}</h1>
            <img src={productData[blogParams.detail].img} alt="productImage" />
            <p>{productData[blogParams.detail].content}</p>
        </>
    );
}

export default Productdetails;



