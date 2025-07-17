import { Link } from 'react-router-dom';


const PRODUCTS = [

    { id: 'p1', title: 'My Product 1' },
    { id: 'p2', title: 'My Product 2' },
    { id: 'p3', title: 'My Product 3' },
    { id: 'p4', title: 'My Product 4' },
    { id: 'p5', title: 'My Product 5' },
    { id: 'p6', title: 'My Product 6' },

];

const ProductsPage = () => {
    return (
        <>
            <h1>My Products</h1>
            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id} >
                        <Link to={prod.id}>{prod.title}</Link>
                    </li>
                ))}
             


            </ul>
        </>
    );



}
export default ProductsPage;