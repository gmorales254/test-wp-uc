import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={call()}>Llamar</button>
      </header>
    </div>
  );

}

function call(){
  window.parent.postMessage({ action: 'LLAMAR', tel: '099460981'}, '*');
}

export default App;
