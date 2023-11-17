import Home from './components/Home';
import {Route, Routes, Link, useLocation} from 'react-router-dom';
import Cuisine from './components/Cuisine'; 
import Layout from './components/Layout';
import Searched from './components/Searched';
import Recipe from './components/Recipe';
import styled from 'styled-components'
import {AnimatePresence} from 'framer-motion';
import { GiKnifeFork } from 'react-icons/gi';


function App() {

  const location = useLocation();

  return (
    <>
    <AnimatePresence mode="wait">
    <div className='parent-container'>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Recipes</Logo>
      </Nav>
    <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:searchTerm' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
      </Route>
    </Routes>
    </div>
    </AnimatePresence>
    </>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
padding-top: 2rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}`;

export default App
