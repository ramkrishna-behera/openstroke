//import logo from './logo.svg';
import './App.css';
import Ad from './Components/Ad/Ad';
import Footer from './Components/Footer/Footer';
import Morelike from './Components/Morelike/Morelike';

import NavigationBarWeb from "./Components/NavigationBarWeb/NavigationBarWeb";
import View from './Components/View/View';

function App() {
  return (
    <div className="App">
      <NavigationBarWeb/>
      <Ad/>
      <View/>
      <Morelike/>
      <Footer/>
    </div>
  );
}

export default App;
