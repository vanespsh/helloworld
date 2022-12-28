import React from "react";
import styles from '../Posts.module.css';

let PostItems = (props) => {
    return (
        <div className={styles.post}>          
            {props.message}

        </div>
    )
}


export default PostItems;