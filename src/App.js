
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Galerie from './pages/Apropos';
import Erreur from './pages/Erreur';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Service from './pages/Service';
import Carousel from './pages/Carousel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/nav-mini'element={<Accueil/>}/>
      <Route path='/Galerie'element={<Galerie/>}/>
      <Route path='*'element={<Erreur/>}/>
      <Route path='/Contact'element={<Contact/>}/>
      <Route path='/Formation'element={<Formation/>}/>
      <Route path='/Service'element={<Service/>}/>
      <Route path='/Carousel'element={<Carousel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
