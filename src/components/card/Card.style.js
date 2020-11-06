import { makeStyles } from '@material-ui/core/styles';


   const useStyles = makeStyles({

        contient:{
                width:"10%",
        },
         Carditem: {
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"space-evenly",
                height:"70%",
           },
         typo:{
                fontWeight:"bolder",
                fontSize:15,
                marginBottom:"9px",
                color:"#a1887f"
           },
         card:{
                width:"100%",
                borderRadius:"3%",
                zIndex:6
           },
        button:{
              width:"90%"
           }
        });

 export default useStyles;
