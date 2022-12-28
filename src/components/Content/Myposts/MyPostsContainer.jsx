import React from "react";
import { connect } from "react-redux";
import { AddPostActionCreator } from '../../../redux/PostsReducer';
import { AddPostTextActionCreator } from '../../../redux/PostsReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    
    return{
        PostsPage : state.PostsPage,
        profile: state.PostsPage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost : () => {
            dispatch(AddPostActionCreator())
            dispatch(AddPostTextActionCreator(''))
        },
        onPostChange : (text) => {dispatch(AddPostTextActionCreator(text))}
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer