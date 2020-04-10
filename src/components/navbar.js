import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className="icon-button"
                onClick={handleMenu}
                color="inherit"
              >
               <MenuIcon/>

              </IconButton>
              <Menu
                id="menu-appbar"
                elevation={0}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem className="menu-item" ><Link to ="/about">About Us</Link></MenuItem>
                <MenuItem className="menu-item" ><Link to ="/download">Downloads</Link></MenuItem>
              </Menu>
            </div>
          <AllInclusiveIcon className="mx-3" style={{fontSize : 40}}/>
          <Typography variant="h5" className="text-muted">
            <Link to="/" className="heading">Photos</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}