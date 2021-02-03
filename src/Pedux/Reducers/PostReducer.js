import defaultArr from "../../data/defaultArr";
import {GET_POSTS_ARR, ADD_NEW_POST, CHANGE_LIKES_COUNTER} from "../ActionTypes";
import * as constants from "constants";

function PostReducer(state = [...defaultArr], action) {
    const {type} = action
    switch (type) {
        case GET_POSTS_ARR:
            return state;
        case ADD_NEW_POST:
            state.push(action.newPost)
            return state
        case CHANGE_LIKES_COUNTER:
            const {id}=action
            const post =state[id];
            let counter=post.likesInfo.likes;
            let isLiked=post.likesInfo.isLiked;
            if(isLiked){
                isLiked=false;
                counter--;
            }else{
                isLiked=true;
                counter++;
            }
            state[id]={
                ...post,
                likesInfo: {
                    isLiked: isLiked,
                    likes:counter
                }
            }
            return state
        default:
            return state
    }
}

export default PostReducer