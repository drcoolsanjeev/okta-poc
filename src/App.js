import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Navbar from './components/Layout/Navbar'
import Home from './pages/Home';
import Staff from './pages/Staff';
function App() {
  return (
  <Router>
    <div className="App">      
    <Navbar/>
    <div class="container">
      <Route path="/" exact={true} component={Home}/>
      <Route path="/staff" exact={true} component={Staff}/>
      </div>
    </div>
  </Router>
  );
}

export default App;
