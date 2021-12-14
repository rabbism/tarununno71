import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Donation from './component/Donation/Donation';
import Event from './component/Event/Event';
import Blog from './component/Blog/Blog';





function App() {
  return (
    <Router>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/donation' element={<Donation></Donation>} />
       <Route path='/event' element={<Event></Event>} />
       <Route path='/blog' element={<Blog></Blog>} />

     </Routes> 
     
    </Router>
  );
}

export default App;
