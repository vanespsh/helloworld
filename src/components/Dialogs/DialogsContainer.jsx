import React from "react";
import { connect } from "react-redux";
import { AddMessageActionCreator } from '../../redux/DialogsReducer';
import { AddMessageTextActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs'

    let mapStateToProps = (state) => {
    
        return{
            DialogsPage : state.DialogsPage
        }
    }
    
    let mapDispatchToProps = (dispatch) => {
        return {
            addNewMessage : () => {
                dispatch(AddMessageActionCreator());
                dispatch(AddMessageTextActionCreator(''))
            },
            ChangeMessageText : (messagetext) => {dispatch(AddMessageTextActionCreator(messagetext))}
        }
    }
    const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;