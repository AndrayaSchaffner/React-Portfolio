
import './App.css';
import FirstPage from './components/FirstPage/index'
import NavBar from './components/NavBar/index'
import BottomNav from './components/BottomNav/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/js/dist/collapse'




function App() {

  return (
    <div className="App">
      <NavBar />
      <FirstPage />
      <BottomNav />
    </div>
  );
}

export default App;
