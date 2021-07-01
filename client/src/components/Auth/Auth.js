import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input/Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassord] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

// showPassword does not change until re-render
// That is why you should always provide a function to set state if you depend on the previous value.

    const handleShowPassword = () => {
        setShowPassord((prevState) => !prevState);
    }

    const switchMode = () => {
        setIsSignUp((prevState) => !prevState);
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
                                <Input name="lastName" label="First Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="Password" label="Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>
                        
                        {isSignup && (
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
                        )}

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
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