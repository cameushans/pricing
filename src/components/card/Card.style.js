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
           },
           card:{
               width:"100%",
               borderRadius:"3%",
           },
           button:{
            width:"90%"
           }
        });

           export default useStyles;
