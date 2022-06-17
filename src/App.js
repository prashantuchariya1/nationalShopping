import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Offerbar from "./components/Offerbar/Offerbar"
import Footer from './components/Footer/Footer'
import UpperFooter from './components/UpperFooter/UpperFooter'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Offerbar/>
      <UpperFooter/>
      <Footer/>
    </div>
  );
}

export default App;
