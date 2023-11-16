import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Cuisine from './components/Cuisine'; 
import Layout from './components/Layout';


function App() {

  return (
    <>
    <div className='parent-container'>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
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
