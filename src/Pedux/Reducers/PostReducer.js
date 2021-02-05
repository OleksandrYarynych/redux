import defaultArr from "../../data/defaultArr";
import {
  GET_POSTS_ARR,
  ADD_NEW_POST,
  CHANGE_LIKES_COUNTER,
  CHANGE_SAVES_COUNTER,
  CHANGE_REPOSTS_COUNTER,
} from "../ActionTypes";

function PostReducer(state = [...defaultArr], action) {
  const { type } = action;
  switch (type) {
    case GET_POSTS_ARR:
      return state;
    case ADD_NEW_POST:
      state.push(action.newPost);
      return state;
    case CHANGE_LIKES_COUNTER:
      const newLikesArr = [];
      state.map((p) => {
        if (p.id === action.id) {
          p.likesInfo.isLiked ? p.likesInfo.likes-- : p.likesInfo.likes++;
          p.likesInfo.isLiked = !p.likesInfo.isLiked;
          newLikesArr.push(p);
        } else newLikesArr.push(p);
      });
      state = [...newLikesArr];
      return state;
    case CHANGE_SAVES_COUNTER:
      const newSavesArr = [];
      state.map((p) => {
        if (p.id === action.id) {
          p.savesInfo.isSaved ? p.savesInfo.saves-- : p.savesInfo.saves++;
          p.savesInfo.isSaved = !p.savesInfo.isSaved;
          newSavesArr.push(p);
        } else newSavesArr.push(p);
      });
      state = [...newSavesArr];
      return state;
    case CHANGE_REPOSTS_COUNTER:
      const newRepostArr = [];
      state.map((p) => {
        if (p.id === action.id) {
          p.repostsInfo.isReposted
            ? p.repostsInfo.reposts--
            : p.repostsInfo.reposts++;
          p.repostsInfo.isReposted = !p.repostsInfo.isReposted;
          newRepostArr.push(p);
        } else newRepostArr.push(p);
      });
      state = [...newRepostArr];
      return state;
    default:
      return state;
  }
}

export default PostReducer;
