import React from "react";
import styles from './Dialogs.module.css';
import NameItems from './DialogsItems/Dialog';
import MessageItems from './DialogsItems/Message';



let Dialogs = (props) => {


    let NamesData = props.DialogsPage.DialogsData.map(n => <NameItems name={n.name} id={n.id} />)
    let MessagesData = props.DialogsPage.MessageData.map(m => <MessageItems message={m.message} id={m.id} />)


    let addMessage = () => {
        props.addNewMessage();
        
    }

    let onMessageChange = (e) => {
        let messagetext = e.target.value;
        props.ChangeMessageText(messagetext);
    }
    return (

        <div  >
            <div>
                <textarea
                    placeholder='Enter your message'
                    onChange={onMessageChange}
                    value={props.DialogsPage.NewMessageText}> </textarea>
                <div>
                    <button onClick={addMessage}> Add</button>
                </div>
            </div>
            <div className={styles.message}>
                <div>
                    {NamesData}
                </div>
                <div>
                    {MessagesData}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;