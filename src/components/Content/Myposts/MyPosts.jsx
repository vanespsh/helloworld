import React from "react";
import styles from './MyPosts.module.css';
import style from './Posts.module.css';
import PostItems from './PostItems/Posts';
import MessageItems from './PostItems/Messages';


let MyPosts = (props) => {

let PostDatas = props.PostsPage.PostsNameData.map(p=> <PostItems name={p.name} id={p.id} />)
let MessageDatas = props.PostsPage.PostsMessageData.map(m=> <MessageItems message={m.message} id={m.id} />)

let AddPost = () => {
props.AddPost();
props.onPostChange('');
}

let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
}


    return (
<div>
<div className = {styles.textar}>
                <textarea 
                placeholder="Add Post"
                onChange={onPostChange}                
                value = {props.PostsPage.NewPostText}> </textarea>
            </div>
            <div>
                <button onClick= {AddPost} > Add</button>
            </div>
            <div className= {style.posts}>
            <div>
                {PostDatas}
            </div>
            <div>
            {MessageDatas} 
            </div>
            </div>
            </div>
    )
}

export default MyPosts