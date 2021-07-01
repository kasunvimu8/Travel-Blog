import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login';

import useStyles from './styles';
import Input from './Input/Input';
import Icon from './Icon';
import {signUp, signIn} from '../../actions/auth';

const Auth = () => {
    const initialFormData = {firstName: '', lastName: '', email: '', password:'', confirmPassword: ''};
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassord] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup){
            dispatch(signUp(formData, history));
        } else {
            dispatch(signIn(formData, history));
        }
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    }

// showPassword does not change until re-render
// That is why you should always provide a function to set state if you depend on the previous value.

    const handleShowPassword = () => {
        setShowPassord((prevState) => !prevState);
    }

    const switchMode = () => {
        setIsSignUp((prevState) => !prevState);
    }
    
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', payload : {result, token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log('Good Sign In was unsuccessful. Try Again Later');
        console.log(error);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >{isSignup ? 'Sign In' : 'Sign up'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>  
                    <Grid container spacing={2}>
                        
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>
                        
                        {isSignup && (
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
                        )}

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>

                        <GoogleLogin 
                            clientId="751882841224-hhc3r16t4832r4entvc503a4guhhi032.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button 
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained" 
                                >
                                Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />

                        <Grid container justify="center">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account?  Sign In': "Don't have an account?  Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;