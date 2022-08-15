import './App.css';
import Button from './components/atoms/button/Button.jsx';
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
       <Box m={20} pt={3}>
      <Button   title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--solid--primary--light'>Button1</Button>
  
      <Button  title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--solid--primary--dark'>Button</Button>
      <Button   title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--solid--primary--disabled'>Button1</Button>
  
  <Button  title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--light'>Button</Button>

  <Button  title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--dark'>Button1</Button>
  
  <Button  title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--disabled'>Button</Button>

  <Button  title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--light--outlined'>Button1</Button>
  
  <Button title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--dark--outlined'>Button</Button>
  <Button title="Button" onClick={()=>{console.log("clicked - btn--primary--light")}} buttonStyle='btn--primary--disabled--outlined'>Button</Button>

      </Box>
      </div> 
  ); 
}

export default App;
