import {SELECTED_POST} from '../constants/actionTypes';

const recuder = (selectedPost = '' , action) =>{
    switch (action.type) {
        case SELECTED_POST:
            return action.payload;
        default:
            return selectedPost
    }
}

export default recuder;