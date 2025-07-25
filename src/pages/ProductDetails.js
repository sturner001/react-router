import { useParams, Link } from 'react-router-dom';
const ProductDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.prodId}</p>
            <p><Link to=".." relative="path" >Back to Products</Link></p>
        </>
    );
}

export default ProductDetailPage;