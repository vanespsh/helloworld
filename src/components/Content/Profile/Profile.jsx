import React from "react";
import styles from './Profile.module.css';
import MyPostsContainer from "../Myposts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";


let Content = (props) => {
    
    return (
        <div className={styles.content}>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer 
            store = {props.store}
            />
        </div>
    )
};
export default Content;