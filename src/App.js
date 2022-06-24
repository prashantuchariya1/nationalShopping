import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Offerbar from "./components/Offerbar/Offerbar"
import Footer from './components/Footer/Footer'
import UpperFooter from './components/UpperFooter/UpperFooter'
import Card from './containers/cardsContainer/cardsContainer'
import Category from './components/Category/Category'
import NavbarIphone from './components/NavbarIphone/NavbarIphone'


function App() {
  return (
    <div className="App">
      <NavbarIphone/>
      <Navbar/>
      <Offerbar/>
      <Category/>
      <Card/>

      <UpperFooter/>
      <Footer/>
    </div>
  );
}

export default App;
