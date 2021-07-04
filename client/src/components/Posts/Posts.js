import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

import { getPosts } from '../../actions/posts';

 const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                
                { posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post}/>
                    </Grid>
                ))}

            </Grid>
        )
    );
}

export default Posts;