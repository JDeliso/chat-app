import logo from './logo.svg';
import './App.css';

import Dashboard from "./Dashboard.js"
import Store from "./Store.js"

function App() {
  return (
    <div className="App">
      <Store>

        <Dashboard />
        
      </Store>
    </div>
  );
}

export default App;
