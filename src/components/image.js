import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import img from '../img/placeholder.png'
const labels = {
    0.5: 'Nonsense',
    1: 'Useless',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Average',
    3.5: 'Good',
    4: 'Better',
    4.5: 'Excellent',
    5: 'Outstanding',
  };
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
      height: 140,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paperx: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));
export default function  MediaCard(props)
{
    const [open, setOpen] = React.useState(false);
    const [value,setValue] = React.useState(1);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const handleDownload = (evt)=>{
        console.log('Downloading Image')
        window.open(props.url,"_blank")//use props.url -> the url of actual image
    }
    const handleFullScreen = (evt)=>{
        handleOpen()
    }
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <Grid item xs className={classes.paper}>
            <Card className={classes.root} raised={true}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={props.url} title={props.title} onClick={handleFullScreen}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Rating
                            name={props.title}
                            value={value}
                            precision={0.5}
                            onChange={(event) => 
                            {
                                var r = parseFloat(event.target.value)
                                //console.log(event.target.value)
                                setValue(r);
                                props.onChangeValue({rating : r,name : event.target.name })
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                        />
                        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        <Box ml={2}><Typography variant="caption" gutterBottom> Average Rating : {props.rating}</Typography><br/><Typography variant="caption" gutterBottom> Downloads : {props.count}</Typography></Box>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className="menu-item" onClick = {handleFullScreen}>
                        Enlarge
                    </Button>
                    <Button size="small" color="primary" className="menu-item" onClick={handleDownload}>
                        Download
                    </Button>
                </CardActions>
            </Card>
            <div>
                <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500,}}>
                    <Fade in={open}>
                    <div className={classes.paperx}>
                        <img src={props.url} id="transition-modal-description" height={590} width={900} alt={props.title}></img>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </Grid>
    );
}


/*
onChange={(event, newValue) => {
                                setValue(newValue);
                                props.onChangeValue({rating : newValue,name : props.title,url : props.url})
                            }}
*/ 