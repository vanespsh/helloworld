import React from "react";
import styles from '../Posts.module.css';

let PostItems = (props) => {
    return (
        <div className={styles.post}>  
        <div>        
            <img src='https://memepedia.ru/wp-content/uploads/2018/03/496277.jpg' />
            </div>
            {props.name}

        </div>
    )
}


export default PostItems;