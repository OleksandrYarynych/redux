import React, { Component } from "react";
import { connect } from "react-redux";

import { PostReducer } from "../../Pedux/Reducers/PostReducer";
import {
  changeLikesCounter,
  changeRepostsCounter,
  changeSavesCounter,
} from "../../Pedux/Actions/Actions";

import "./Post.scss";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      lastName,
      firstName,
      nickName,
      date,
      description,
      avatar,
      postPhoto,
      likes,
      isLiked,
      saves,
      isSaved,
      reposts,
      isReposted,
      id,
    } = this.props;

    const changeLikes = () => this.props.changeLikesCounter(id);
    const changeSaves = () => this.props.changeSavesCounter(id);
    const changeReposts = () => this.props.changeRepostsCounter(id);

    return (
      <div className="post">
        <div className="post-header">
          <div className="d-flex">
            <div className="post-avatar">
              <img className="avatar-img" src={avatar} />
            </div>
            <div className="post-data">
              <span className="post-header-text">{firstName}</span>
              <span className="post-header-text">{lastName}</span>
              <span className="post-header-text dark-text">{nickName}</span>
              <span className="post-header-text dark-text">{date}</span>
              <p className="post-description">{description}</p>
            </div>
          </div>
          <i className="fas fa-ellipsis-v cursor-pointer"></i>
        </div>
        <div className="post-photo">
          <img className="photo" src={postPhoto} />
        </div>
        <div className="post-footer">
          <button className="btn" onClick={changeLikes}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-heart fa-w-16 fa-3x icon"
              fill={isLiked ? "red" : "currentColor"}
            >
              <path
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                className=""
              ></path>
            </svg>
            <span className="buttons-text">{likes}</span>
          </button>
          <button className="btn" onClick={changeSaves}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bookmark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="svg-inline--fa fa-bookmark fa-w-12 fa-3x icon"
              fill={isSaved ? "grey" : "currentColor"}
            >
              <path
                d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                className=""
              ></path>
            </svg>
            <span className="buttons-text">{saves}</span>
          </button>
          <button className="btn" onClick={changeReposts}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="megaphone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-megaphone fa-w-18 fa-3x icon"
              fill={isReposted ? "aqua" : "currentColor"}
            >
              <path
                d="M32 176c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32 11.38 0 20.9-6.28 26.57-15.22l106.99 32.3c-3.35 9.76-5.56 20.04-5.56 30.92 0 52.94 43.06 96 96 96 44.49 0 81.66-30.57 92.5-71.7L480 448V64L58.57 191.22C52.9 182.28 43.38 176 32 176zm179.29 190.88l91.47 27.61C297.95 415.92 278.85 432 256 432c-26.47 0-48-21.53-48-48 0-6.05 1.24-11.79 3.29-17.12zM560 32h-32c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16z"
                className=""
              ></path>
            </svg>
            <span className="buttons-text">{reposts}</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLikesCounter: (id) => dispatch(changeLikesCounter(id)),
    changeSavesCounter: (id) => dispatch(changeSavesCounter(id)),
    changeRepostsCounter: (id) => dispatch(changeRepostsCounter(id)),
  };
};

export default connect(null, mapDispatchToProps)(Post);
