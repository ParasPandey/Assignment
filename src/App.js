import './App.css';
import Navbar from './Components/MyNavbar';
import LandingPage from './Components/LandingPage';
import SearchByPrice from './Components/SearchByPrice';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <SearchByPrice/>
      <Footer/>
    </div>
  );
}

export default App;
