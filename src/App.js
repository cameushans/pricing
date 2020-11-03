import logo from './logo.svg';
import './App.css';
import Card from "./components/card/CardPrice.component";
import AllCards from "./components/card/AllCards";
import {Typography} from "@material-ui/core";

function App() {
  return (
    <div >
      <Typography variant="h4" style={{textAlign:"center"}}>
        Our pricing
      </Typography>
      <AllCards />
    
    </div>
  );
}

export default App;
