import PostsReducer from './PostsReducer';
import DialogsReducer from './DialogsReducer';
import MusicsReducer from './MusicsReducer';

let store = {
  _state: {

    DialogsPage: {
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
    },
    MusicsPage: {
      MusicsNames: [
        { id: 1, name: "Funny bebra" },
        { id: 2, name: "Ababa Obobo" },
        { id: 3, name: "Fukin Mother" },
        { id: 4, name: "Your Mom" },
        { id: 5, name: "Your Sister" },
        { id: 6, name: "Something Wrong" },
        { id: 7, name: "Summer" },
        { id: 8, name: "Winter" },
      ],
      SingersNames: [
        { id: 1, singername: "Bob - " },
        { id: 2, singername: "Fucker - " },
        { id: 3, singername: "MotherFucker - " },
        { id: 4, singername: "Spining Dick - " },
        { id: 5, singername: "WrongRotate Pussy - " },
        { id: 6, singername: "Angular - " },
        { id: 7, singername: "Ass Penetrator - " },
        { id: 8, singername: "Curwa Bober - " },
      ],
      NewMusicsText: '',

    },
    PostsPage: {
      PostsNameData: [
        { name: 'Ivan', id: 1 },
        { name: 'Viktor', id: 2 },
        { name: 'Nikita', id: 3 },
      ],
      PostsMessageData: [
        { message: 'Hi,Gay', id: 1 },
        { message: 'I am not a Gay', id: 2 },
        { message: 'Bye, not a Gay', id: 3 },
      ],
      NewPostText: '',
    }
  },

  subscribe(observer) {
    store.RerenderAllTree = observer;
  },

  getState() {
    return (this._state);
  },

  RerenderAllTree() { },

  dispatch(action) {
    this._state.PostsPage = PostsReducer (this._state.PostsPage, action);
    this._state.DialogsPage = DialogsReducer (this._state.DialogsPage, action);
    this._state.MusicsPage = MusicsReducer (this._state.MusicsPage, action);
    this.RerenderAllTree(this._state);
        },
  }

export default store;

//window.store.getState = getState;
