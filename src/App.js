import logo from "./logo.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import LoginPage from "./Component/Login/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
