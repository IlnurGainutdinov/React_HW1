import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message model="x5" power="300" color="black" />
      </header>
    </div>
  );
}

export default App;
