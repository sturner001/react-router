import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <>
            <h1>My Products</h1>
            <p>
                Go to <Link to="/" >Home Page</Link>
            </p>
        </>
    );



}
export default ProductsPage;