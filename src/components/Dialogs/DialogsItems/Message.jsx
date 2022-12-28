import React from 'react'
import styles from '../Dialogs.module.css';
let MessageItems = (props) => {
    return (
        <div classname={styles.message}>
            {props.message}
        </div>
    )
}
export default MessageItems;