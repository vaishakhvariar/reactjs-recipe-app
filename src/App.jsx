import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Cuisine from './components/Cuisine'; 
import Layout from './components/Layout';
import Searched from './components/Searched';
import Recipe from './components/Recipe';


function App() {

  return (
    <>
    <div className='parent-container'>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:searchTerm' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
      </Route>
    </Routes>
{/* 
    <Layout />
    <Home /> */}
    {/* <Cuisine /> */}
    </div>
    </>
  )
}

export default App
