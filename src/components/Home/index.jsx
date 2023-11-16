import './index.css';
import Popular from '../Popular';
import Vegetarian from '../Vegetarian';

const Home = () => {

    return(
    <div className='home-page'>
        <h1>Home</h1>
        <Popular />
        <Vegetarian />
    </div>
);

}

export default Home;