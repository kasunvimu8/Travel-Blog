import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';

import { LOGOUT } from '../../constants/actionTypes';
import useStyles from './styles';
import mainImg from '../../Images/logo.png';

function Navbar() {
    const classes = useStyles();
    const user = useSelector(state => state.auth.authData);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
       dispatch({type: LOGOUT});
       history.push('/');
    }
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center"> Travel Blog </Typography>
                <img className={classes.image} src={mainImg}  alt="Kasun" height="60px"/>
            </div>
            <Toolbar className={classes.toolbar} >
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> {user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary"  onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
