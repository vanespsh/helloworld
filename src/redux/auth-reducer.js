let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
  }; 
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SetUserData': {
        return {
          ...state, 
         ...action.data,
         isAuth: true,
          }
      }
      
    default: return state;
  }
  }
  
  export const SetAuthUserDataAC = (id, email,login) => ({type: 'SetUserData', data: {id, email, login}});
  export default authReducer;