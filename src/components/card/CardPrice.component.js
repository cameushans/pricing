import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import useStyles from "./Card.style";


  

export default function SimpleCard(props) {
     const classes = useStyles();

    return (

    <Grid 
            container 
            item  
            justify="center" 
            lg={3} xs ={8} md={4} 
            className={classes.contient}
            style={{ marginTop:props.marge,height:props.height}}>

            <Card className={classes.card}  style={{background:props.linear}} >

                    <CardContent className={classes.Carditem}>
                                <Typography variant="h5" component="h2">
                                  {props.title}
                                </Typography>
                                <Typography  color="textSecondary" variant="h3">
                                    $ {props.price}
                                </Typography>
                                <Typography  component="p" className={classes.typo}>
                                    {props.storage} storage
                                </Typography>
                                <Typography component="p" className={classes.typo}>
                                    {props.allowed} Users allowed  
                                </Typography>
                                <Typography component="p" className={classes.typo}>
                                   Send up to  {props.toSend} GB
                                </Typography>
                    </CardContent>

                    <CardActions style={{display:"flex",justifyContent:"center"}}>
                                <Button size="large" variant="contained" 
                                              style={{background:props.button}} 
                                              className={classes.button}>
                                             Learn More
                                </Button>
                    </CardActions>

               </Card>
    </Grid>
    );
  }