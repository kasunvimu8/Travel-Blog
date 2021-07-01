import React from 'react'
import {Container, Grow, Grid} from '@material-ui/core';

import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';

function Home() {
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home