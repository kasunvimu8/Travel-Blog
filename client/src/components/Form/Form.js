import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

// hold the reference to the redux store
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Posts = () => {
    const initial = { creator: '', title: '', message: '', tags: '', selectedFile: ''};
    const [postData, setPostData] = useState(initial);

    const classes = useStyles();
    const dispatch = useDispatch();

    const selectedPost = useSelector((state) => state.selectedPost);
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        const post = posts.find((p) => p._id === selectedPost);
        
        if (post && selectedPost) {
            setPostData(post);
        }
    }, [selectedPost, posts])

    const HandleFormSubmit = (event) => {
        event.preventDefault();
        
        if (selectedPost) {
            dispatch(updatePost(selectedPost, postData));
        } else {
            dispatch(createPost(postData));
        }
        clearPost();
    }

    const clearPost = () => {
        setPostData(initial);
        dispatch({ type: 'SELECTED_POST', payload : ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={HandleFormSubmit}>
                <Typography variant="h6"> {selectedPost ? 'Updating a Post' : 'Creating a Post'}</Typography>
                <TextField 
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={ postData.creator}
                    onChange={(event) =>  setPostData({...postData, creator : event.target.value})}
                />
                 <TextField 
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={ postData.title}
                    onChange={(event) =>  setPostData({...postData, title : event.target.value})}
                />
               
               <TextField 
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={ postData.message}
                    onChange={(event) =>  setPostData({...postData, message : event.target.value})}
                />
                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={ postData.tags}
                    onChange={(event) =>  setPostData({...postData, tags : event.target.value.split(',')})}
                />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone= {({base64}) => setPostData({...postData, selectedFile : base64})}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clearPost} fullWidth> Clear </Button>

            </form>
        </Paper>
    )
}

export default Posts;

// 01:09:00