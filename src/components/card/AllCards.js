
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Card from "./CardPrice.component";
import {Grid, Typography} from "@material-ui/core";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const datas = [
    {title:"Basic",price:199.99,storage:"500 GB",usersAllowed:2,numberToSend:3,buttonColor:"primary",backGrColor:"white",height:"50vh",marginTop:"2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Professional",price:249.99,storage:"1 TB",usersAllowed:5,numberToSend:10,buttonColor:"white",backGrColor:"blue",height:"60vh",linear: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',button:"white",color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Master",price:399.99,storage:"2 TB",usersAllowed:10,numberToSend:20,buttonColor:"primary",backGrColor:"white",height:"50vh",marginTop:"2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}
  ];

  const info = datas.map((el,i)=>{

   return <Card  key={i}
                         title={el.title}
                         price={el.price} 
                         storage={el.storage} 
                         allowed={el.usersAllowed}
                         toSend={el.numberToSend}
                         buttonColor={el.buttonColor}
                         backGrColor={el.backGrColor}
                         height={el.height}
                         marge={el.marginTop}
                         linear={el.linear}
                         button={el.button}
                         colori={el.color}
                         />
 })

  return (
      <Grid container   justify="center" >
              <Typography variant="h4" style={{textAlign:"center",marginTop:"4%"}}>
                  Our pricing
              </Typography>
              <img src="../../../bg-top.svg" style={{position:"absolute",marginLeft:"45%",zIndex:0,width:"30%"}}/>
              <Grid container item justify="center" alignItems="center"style={{marginBottom:"2%",marginTop:"2%"}}> 
                          <Typography >Annualy</Typography>
                          <Switch
                                              checked={state.checkedA}
                                              onChange={handleChange}
                                              name="checkedA"
                                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                          <Typography>Monthly</Typography>  
              </Grid>
              <img src="../../../bg-bottom.svg" style={{position:"absolute",marginLeft:"-40%",zIndex:0,marginTop:"30%",width:"30%"}}/>


              <Grid container item alignItems="center" justify="center">

                  {info}

              </Grid>
                   
      </Grid>
  );
}
