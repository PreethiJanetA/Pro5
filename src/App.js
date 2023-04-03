import './App.css';
import  Day5 from './Components/Day_5';
import Errorboundary from './Components/Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["Ragav","Yash","Jane","Yaz"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;