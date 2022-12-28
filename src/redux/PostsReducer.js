let initialState = {
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
  profile: null,
}

const PostsReducer = (state = initialState , action) => {
  
    switch (action.type) {
      case 'ADD-POSTS':{
        let stateCopy = {...state};
        let message = stateCopy.NewPostText;
    let NewPostItem = {
      id: 4,
      message: message,
    };

    let NewPostNameItem = {
      id: 4,
      name: 'Unnamed',
    };
    stateCopy.PostsMessageData = [...state.PostsMessageData];
    stateCopy.PostsNameData = [...state.PostsNameData];
    stateCopy.PostsMessageData.push(NewPostItem);
    stateCopy.PostsNameData.push(NewPostNameItem);
    return stateCopy
  }
    case 'ADD-POSTS-TEXT': {
      let stateCopy = {...state};
      stateCopy.NewPostText = action.text;
      return stateCopy;
  }
  case 'SET-USER-PROFILE' : {
    return {...state, profile: action.profile}
  }
  default: return state;
}  
}

export const AddPostActionCreator = () => ({type: 'ADD-POSTS'})
export const AddPostTextActionCreator = (text) => ({type: 'ADD-POSTS-TEXT', text: text})
export const SetUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile: profile})

export default PostsReducer;