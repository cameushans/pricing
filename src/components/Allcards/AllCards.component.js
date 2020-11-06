
import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import Card from "../card/CardPrice.component";
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./Allcards.style";

export default function Switches() {
  const  classes = useStyles();
  const [cheked, setCheked] = useState(false);
  const handleChange = (event) => {
      setCheked(!cheked)
  };

  const datas = [
    {title:"Basic",price:199.99,storage:"500 GB",usersAllowed:2,numberToSend:3,buttonColor:"primary",backGrColor:"white",height:"50vh",marginBottom:"-2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Professional",price:249.99,storage:"1 TB",usersAllowed:5,numberToSend:10,buttonColor:"white",backGrColor:"blue",height:"60vh",linear: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',button:"white",color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Master",price:399.99,storage:"2 TB",usersAllowed:10,numberToSend:20,buttonColor:"primary",backGrColor:"white",height:"50vh",marginBottom:"-2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}
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

  const data = [
    {title:"Basic",price:19.99,storage:"500 GB",usersAllowed:2,numberToSend:3,buttonColor:"primary",backGrColor:"white",height:"50vh",marginBottom:"-2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Professional",price:24.99,storage:"1 TB",usersAllowed:5,numberToSend:10,buttonColor:"white",backGrColor:"blue",height:"60vh",linear: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',button:"white",color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'},
    {title:"Master",price:39.99,storage:"2 TB",usersAllowed:10,numberToSend:20,buttonColor:"primary",backGrColor:"white",height:"50vh",marginBottom:"-2.5%",button:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}
];

  const infoMonth = data.map((el,i)=>{

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
});

  return (

      <Grid container   justify="center" >
              <Typography variant="h3" className={classes.title}>
                  Our pricing
              </Typography>

              <Grid container item justify="center" alignItems="center" className={classes.gridStyle}> 
                          <Typography  className={classes.typo}>Annualy</Typography>
                          <Switch
                                              checked={!cheked}
                                              onChange={()=>handleChange()}
                                              size="medium"
                                            />
                          <Typography  className={classes.typo}>Monthly</Typography>  
              </Grid>

              <Grid container item alignItems="center" justify="center">
                  {cheked? info : infoMonth}
              </Grid>
                   
      </Grid>
  )
};
