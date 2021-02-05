import React, { Component } from "react";
import { connect } from "react-redux";

import { getPostsArr } from "../../Pedux/Actions/Actions";
import Post from "../Post/Post";
import { PostReducer } from "../../Pedux/Reducers/PostReducer";

import "./Posts.scss";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.posts.map((post, i) => (
          <Post
            lastName={post.user.lastName}
            firstName={post.user.firstName}
            nickName={post.user.nickName}
            date={post.date}
            description={post.description}
            avatar={post.user.avatar}
            postPhoto={post.postPhoto}
            likes={post.likesInfo.likes}
            isLiked={post.likesInfo.isLiked}
            saves={post.savesInfo.saves}
            isSaved={post.savesInfo.isSaved}
            reposts={post.repostsInfo.reposts}
            isReposted={post.repostsInfo.isReposted}
            id={post.id}
            key={post.id}
          />
        ))}
      </div>
    );
  }
}

const getStateToProps = (state) => {
  return {
    posts: state.PostsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsArr: () => dispatch(getPostsArr()),
  };
};

export default connect(getStateToProps, mapDispatchToProps)(Posts);
