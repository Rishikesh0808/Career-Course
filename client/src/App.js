
import './App.css';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import JitsiMeet from './components/JitsiMeet/JitsiMeet.js';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      
        <Route path= "/" element={<JitsiMeet/>}/>
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
