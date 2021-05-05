import React from 'react';
import ToolBar from "@material-ui/core/Toolbar";
import { AppBar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
// import classes from '*.module.css';
import logo from "../assets/logo.png";
import useStyles from "./styles"


const Navbar = () => {
    const classes =useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.appBar} color="inherit"> 
                        <img src={logo} alt="Commerce.js" heig="25px" className={classes.image} />
                         ECommerce Application
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>

        </div>
    )
}

export default Navbar
