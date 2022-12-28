import React from "react";
import styles from '../../Content/Users/Users.module.css'

let Preloader = () => {
    return (<div className = {styles.loading}>
        <img src = {'https://i.pinimg.com/originals/08/7f/5d/087f5d2ffaf77dec5696b81ca52c63de.gif'}/>
        </div>)
}
export default Preloader