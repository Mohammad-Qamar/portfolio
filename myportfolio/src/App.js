import './App.css';
import Portfolio from './Components/Portfolio/Portfolio';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> 
      <div className="App">
     
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
