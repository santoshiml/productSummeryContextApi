import './App.css';
import MainContent from "./components/payment/index"
import Sidebar from './components/payment/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar />
      <MainContent />    
    </div>
  );
}

export default App;
