import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';
let NameItems = (props) => {
    return (
        <div className={styles.names}>
            
            <img src='https://www.meme-arsenal.com/memes/478961505945d21532a4735196fbe4e9.jpg' />
            <div>
            <NavLink to='/Messages/1' className={({isActive}) => isActive? styles.active : styles.item}> {props.name} </NavLink>
            </div>
        </div>

    )
}
export default NameItems