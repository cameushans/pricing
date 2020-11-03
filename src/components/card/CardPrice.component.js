import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import useStyles from "./Card.style"


  

export default function SimpleCard(props) {
  console.log(props)
    const useStyles = makeStyles({
        card:{
            width:"10%",
            height:props.height,
            marginTop:props.marge,
        },
         Carditem: {
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-evenly",
            height:"70%",
            backgroundColor:props.backGrColor,
           },
            divider:{
               fontWeight:"bolder",
               fontSize:14,
               marginBottom:"9px",
           },
           contient:{
               width:"100%",
               borderRadius:"3%"

           }
      });
    const classes = useStyles();

    return (

        <Grid container item  justify="center"  lg={3} xs ={10} md={8} className={classes.card}>
    <Card className={classes.contient}>
        <CardContent className={classes.Carditem}>
          <Typography variant="h5" component="h2">
           {props.title}
          </Typography>
          <Divider />
          <Typography  color="textSecondary" variant="h3">
              $ {props.price}
          </Typography>
          <Divider/>
          <Typography  component="p" className={classes.divider}>
            {props.storage} storage
          </Typography>
          <Divider />
          <Typography component="p" className={classes.divider}>
            {props.allowed} Users allowed  
          </Typography>
          <Divider/>
          <Typography component="p" className={classes.divider}>
           Send up to  {props.toSend} GB
          </Typography>
        </CardContent>
        <CardActions style={{display:"flex",justifyContent:"center", backgroundColor:props.backGrColor}}>
          <Button size="large" variant="contained" color="primary" style={{width:"90%"}}>Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
    );
  }