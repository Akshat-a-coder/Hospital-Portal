import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// import Registration from './components/registration/Registration';
// import Section from './components/homepage/Homepage';
// import Thirdsection from './components/Thirdsection';
// import Collage from './components/collage/Collage';
import Value from './container/values/Value';
// import Counter from './container/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import { Home,Aboutus,Guide,Gallery,Registration,Services,Feedback,Apoint, Doctors,Login} from './components';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/aboutus' element = {<Aboutus/>} />
        <Route path='/guide' element = {<Guide/>} />
        <Route path='/gallery' element = {<Gallery/>} />
        <Route path='/services' element = {<Services/>} />
        <Route path='/apoint' element = {<Apoint/>} />
        <Route path='/feedback' element = {<Feedback/>} />
        <Route path='/registration' element = {<Registration/>} />
        <Route path='/doctors' element = {<Doctors/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
{/* 
      <Navbar/>
      <Section/>
      <Value/>
      <Footer/> */}
      {/* <Counter/> */}
      {/* <Registration/> */}
      {/* <Thirdsection/> */}
      {/* <Collage/> */}
    </div>
  );
}

export default App;
