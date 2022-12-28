import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
let Header = (props) => {
    return (
        <div className={styles.header}>
            <img src='https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg'/>
            <div className = {styles.loginBlock}>
                {props.isAuth? props.login : <NavLink to = {'/login'}>Login</NavLink> }
                
            </div>
        </div>
    )
};
export default Header;