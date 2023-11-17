import './index.css';
import Popular from '../Popular';
import Vegetarian from '../Vegetarian';

const Home = () => {

    return(
    <div className='home-page'>
        <Popular />
        <Vegetarian />
    </div>
);

}

export default Home;