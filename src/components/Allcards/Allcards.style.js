import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles({

    bottomImg:{
        position:"absolute",
        marginLeft:"-40%",
         zIndex:0,
        marginTop:"30%",
        width:"30%"
        ,height:"30%"
    },
    title:{
        textAlign:"center",
        marginTop:"4%",
        color:"#a1887f"
    },
    topImg: {
        position:"absolute",
        marginLeft:"45%",
        zIndex:0,
        width:"30%"
},
   gridStyle:{
        marginBottom:"2%",
        marginTop:"2%"
   },
   typo:{
    color:"#a1887f"
   }
})

export default useStyles;