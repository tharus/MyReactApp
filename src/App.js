import './App.css';
import {Button} from './components/atoms/button/Button.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Buttons</h1>
      <Button onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='.btn--solid--primary--dark'>Button1</Button>
  
      <Button onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--dark--outlined'>Button</Button>
       </div>
       </div>
  );
}

export default App;
