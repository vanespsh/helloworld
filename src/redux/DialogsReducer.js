let initialState = {
  DialogsData: [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Viktor' },
    { id: 3, name: 'Ivan' },
    
  ],

  MessageData: [
    { id: 1, message: 'Hi,gay' },
    { id: 2, message: 'I am not a gay' },
    { id: 3, message: 'By,gay' },
  ],
  NewMessageText: '',
}; 

const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let Message = state.NewMessageText
      let newMessage = {
        id: 4,
        message: Message,
      };
      let stateCopy = {...state};
      let NewDialogName = {
        id: 4,
        name: 'Undefined',
      };
      stateCopy.MessageData = [...state.MessageData];
      stateCopy.DialogsData = [...state.DialogsData]
      stateCopy.MessageData.push(newMessage);
      stateCopy.DialogsData.push(NewDialogName);
      return stateCopy;
    }
    case 'ADD-MESSAGE-TEXT': {
      let stateCopy = {...state};
      stateCopy.NewMessageText = action.messagetext;
      return stateCopy;
  }
  default: return state;
}
}

export const AddMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const AddMessageTextActionCreator = (messagetext) => ({type: 'ADD-MESSAGE-TEXT', messagetext: messagetext})

export default DialogsReducer;