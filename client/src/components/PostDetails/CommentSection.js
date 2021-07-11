import React, {useState, useRef} from 'react';
import {Typography, TextField,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import useStyles from './styles';

const CommentSection = ({post}) => {
      const classes = useStyles();
      const [comments, setComments] = useState([]);
      const [comment, setComment] = useState('');

      const handleClick = () => {

      }

      return (
            <div>
                <div className={classes.commentsOuterContainer}>
                    <div className={classes.commentsInnerContainer}>
                        <Typography variant="h6" gutterBottom>Comments</Typography>
                        {comments.map((comment, i) => (
                              <Typography variant="subtitle1" gutterBottom key={i}>Comment {i}</Typography>

                        ))}
                     </div>
                     <div style={{width: '70%'}} >
                        <Typography variant="h6" gutterBottom>Write a comment</Typography>
                        <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onchange={(e) => setComment(e.target.value)}/>
                        <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>
                              Comment
                        </Button>
                     </div>
                </div>
            </div>
      )
}

export default CommentSection;
