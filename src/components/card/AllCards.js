
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Card from "./CardPrice.component";
import {Grid} from "@material-ui/core"

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <Grid container lg={8} justify="center"  >
         <Switch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
              <Grid container item direction="row" >
                    <Card/>
                    < Card/>
                    <Card />
                </Grid>
      </Grid>
  );
}
