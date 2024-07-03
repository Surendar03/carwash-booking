import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Booking from './components/Booking';
import FAQs from './components/FAQs';
import Aboutus from './components/Aboutus'
import Services from './components/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Homepage></Homepage>} />
          <Route path='/' element={<Loginpage></Loginpage>} />
          <Route path='/Signup' element={<Signuppage></Signuppage>} />
          <Route path='/Booking' element={<Booking></Booking>} />
          <Route path='/FAQs' element={<FAQs></FAQs>} />
          <Route path='/Aboutus' element={<Aboutus></Aboutus>} />
          <Route path='/Services' element={<Services></Services>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
