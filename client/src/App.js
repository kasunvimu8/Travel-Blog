import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import mainImg from './Images/appBarImage.jpg';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import useStyles from './styles';

export default function App() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} align="center"> Travel Blog </Typography>
                <img className={classes.image} src={mainImg}  alt="Kasun" height="80px"/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}