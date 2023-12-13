import { Outlet } from 'react-router-dom';
import Categories from '../Categories';
import Search from '../Search';
import {motion} from 'framer-motion';


const Layout = () => {
    return(
        <motion.div 
        className='app'
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{ duration: 0.5 }}>
            <Search />
            <Categories />
            <div className='rest-of-page'>  
                <Outlet />
            </div>
        </motion.div>
        )
}

export default Layout;
