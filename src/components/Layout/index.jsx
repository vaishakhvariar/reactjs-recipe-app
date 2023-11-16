import { Outlet } from 'react-router-dom';
import Categories from '../Categories';
import Search from '../Search';
import './index.css';


const Layout = () => {
    return(
        <div className='app'>
            <Search />
            <Categories />
            <div className='rest-of-page'>  
                <Outlet />
            </div>
        </div>
        )
}

export default Layout;
