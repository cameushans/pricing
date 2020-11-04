import AllCards from "./components/card/AllCards";
import {Typography} from "@material-ui/core";

function App() {
  return (
    <div style={{backgroundImage:"url(../../../bg-bottom.svg)",
                         backgroundRepeat:"no-repeat",
                         backgroundColor:"grey",
                         height:"100vh",
    }}>

          <Typography variant="h4" style={{textAlign:"center"}}>
               Our pricing
          </Typography>
          <AllCards />
    
    </div>
  );
}

export default App;
