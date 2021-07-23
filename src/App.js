import logo from "./logo.svg";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{call()}}>Llamar</button>
      </header>
    </div>
  );
}

function call() {
  window.parent.postMessage({ action: "LLAMAR", tel: "099460981" }, "*");
}
/*
function callWithFramework() {
  var windowProxy;

  windowProxy = new Porthole.WindowProxy(
    window.location.protocol + "//" + window.location.hostname
  );
  windowProxy.addEventListener(onResponse);
  windowProxy.post({
    action: "callWithPhone",
    destination: "3056776828",
    campaign: "dev->",
  });

  function onResponse(messageEvent) {
    var response = messageEvent.data.guid;
  }
}*/

export default App;
