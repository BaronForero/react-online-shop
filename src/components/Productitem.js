import { Link } from 'react-router-dom'

const Produtitem = (props) => {
    return (  
        <div className='card'>
            <h2>{props.productname}</h2>
            <img src={props.img} alt="productImage" />
            <Link to={`/products/${props.id}`}>Shop now</Link>
        </div>
    );
}

export default Produtitem
