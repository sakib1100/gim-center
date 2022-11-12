import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Compunent/Home/Home';
import About from './Compunent/About/About'
import Service from './Compunent/Service/Service'
import Team from './Compunent/Team/Team'
import Contact from './Compunent/Contact/Contact'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />

<Routes>
  
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/service' element={<Service></Service>}></Route>
  <Route path='/team' element={<Team></Team>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
</Routes>


    </div>
  );
}

export default App;
