import React from "react";
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
let NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <NavLink to='/MyProfile' className={({isActive}) => isActive? styles.active : styles.item}>MyProfile</NavLink>
            </div>
            <div>
                <NavLink to='/Messages/' className={({isActive}) => isActive? styles.active : styles.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/Photos/' className={({isActive}) => isActive? styles.active : styles.item}>Photos</NavLink>
                </div>
            <div>
                <NavLink to='/Musics/' className={({isActive}) => isActive? styles.active : styles.item}>Musics</NavLink>
                </div>
                <div>
                ⠀ 
                </div>
                <div>
                <NavLink to='/Users/' className={({isActive}) => isActive? styles.active : styles.item}>Users</NavLink>
                </div>
        </div>
    )
};
export default NavBar;