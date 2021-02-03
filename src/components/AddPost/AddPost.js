import React, {Component} from 'react';
import moment from 'moment';
import { connect } from "react-redux";

import usersArr from "../../data/users";
import {addNewPost} from '../../Pedux/Actions/Actions'

import './AddPost.scss'



class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postDescription: '',
            photoSource: '',
            chosenUser: 'Daniel'
        }
    }

    choseUser = (e) => {
        this.setState({chosenUser: e.target.value})
    }

    setDescription = e => {
        this.setState({postDescription: e.target.value})
    }

    setPhotoSource = e => {
        this.setState({photoSource: e.target.value})
    }

    findUser=(chosenUser)=>usersArr.find(u=>u.nickName===chosenUser)

    setDefaultState=()=>this.setState({
        postDescription:'',
        photoSource:'',
        chosenUser: 'Daniel'
    })

    createNewPost=()=>{
        const  user=this.findUser(this.state.chosenUser);
        console.log(user)
        const date=moment().format('ll');
        const newPost={
            user:user,
            description: this.state.postDescription,
            date: "Tue Feb 6 2019",
            postPhoto: this.state.photoSource,
            likesInfo: {
                likes: 0,
                isLiked: false,
            },
            savesInfo: {
                saves: 0,
                isSaved: false,
            },
            repostsInfo: {
                reposts: 0,
                isReposted: false,
            },
        }
        this.props.addPost(newPost)

        this.setDefaultState();
        alert('your post is added')
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='form-block'>
                    <select className='input' onChange={this.choseUser}>
                        <option name='Daniel'>Daniel</option>
                        <option name='Gibber'>Gibber</option>
                    </select>
                    <input
                        placeholder='enter post description'
                        value={this.state.postDescription}
                        onChange={this.setDescription}
                        className='input'
                        type='text'
                    />
                    <input
                        placeholder='enter post photo source'
                        value={this.state.photoSource}
                        onChange={this.setPhotoSource}
                        className='input'
                        type='text'
                    />
                    <button
                        className='button'
                        onClick={this.createNewPost}
                    >
                        Add post
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(newPost)=>dispatch(addNewPost(newPost))
    }
}

export default connect(null, mapDispatchToProps)(AddPost);