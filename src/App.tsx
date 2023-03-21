// В компаненте работаем с состояниями и шаблоном
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductsPage';
import { Navigition } from './components/Navigation';

function App() {
  return (
    <>
      <Navigition/>
      <Routes>
        <Route path='/' element={ <ProductPage />}/>
        <Route path='/about' element={ <AboutPage />}/>
      </Routes>
    </>
  )
}

export default App;
