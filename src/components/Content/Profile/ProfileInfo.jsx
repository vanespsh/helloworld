import React from "react";
import styles from './Profile.module.css';
import MyPostsContainer from "../Myposts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";
import style from '../Myposts/Posts.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <div className= {style.post}>
        <Preloader/>
        <div>Information available</div>
        </div>)
    }
    else if (!props.profile.photos.large) {
        return (
            <div className={style.post}>
            <img src = 'https://madlads.ru/files/avatars/1664374575.jpg'/>
            </div>
        ) 
    
    }
    return (
        <div>
        <div className={styles.content}>
            <img src='https://s.zagranitsa.com/images/articles/3944/870x486/6b6d682576be2e250b9c0e7b9649cdb7.jpg?1467792954' />    
        </div>
        <div className={style.posts}>
        <div className={style.post}>
            <img src = {props.profile.photos.large}/>
        </div>
        <div>{props.profile.aboutMe}</div>
        
        </div>
        </div>
    )
};
export default ProfileInfo;