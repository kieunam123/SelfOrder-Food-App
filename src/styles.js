import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root:  {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    main:{
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: '#ffffff',

    },
    navy:{
        backgroundColor: '#003080',
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    cards:{
        margin: 10
    },
space:{
    padding:10
},

    red:
    {
        backgroundColor: '#ff2040',
        color : '#ffffff',
    },

    green:{
        backgroundColor:'#00b020',
    },
    logo: {
        height: 50,
      },

    largeLogo: {
        height: 100,
    },
}));