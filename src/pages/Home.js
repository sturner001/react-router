import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const navhandler = () => {
        return navigate('prod');
    }
    
    return (
        <>
            <h1>My Home Page</h1>
            <p>
                <button onClick={navhandler}>Nav to list of Products</button>
            </p>
        </>
    );
}

export default HomePage;