import {
  GET_POSTS_ARR,
  ADD_NEW_POST,
  CHANGE_LIKES_COUNTER,
  CHANGE_SAVES_COUNTER,
  CHANGE_REPOSTS_COUNTER,
} from "../ActionTypes";

export const getPostsArr = () => {
  return {
    type: GET_POSTS_ARR,
  };
};

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    newPost: post,
  };
};

export const changeLikesCounter = (id) => {
  return {
    type: CHANGE_LIKES_COUNTER,
    id: id,
  };
};

export const changeSavesCounter = (id) => {
  return {
    type: CHANGE_SAVES_COUNTER,
    id: id,
  };
};

export const changeRepostsCounter = (id) => {
  return {
    type: CHANGE_REPOSTS_COUNTER,
    id: id,
  };
};
