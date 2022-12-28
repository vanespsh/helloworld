let initialState = {
  UsersNames: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage:1,
  isFetching: null,
  buttonDisable: false,
}; 

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Follow': {
      return {
        ...state, 
        UsersNames: state.UsersNames.map (u=>{
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u;
        })
        }
    }
    case 'Unfollow': {
      return {
        ...state, 
        UsersNames: state.UsersNames.map (u=>{
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u
        })
        }
    }
    case 'Set_Users': {
      return {...state, UsersNames: [...action.UsersNames]}
    }
    case 'Set_Current_Page' : {
      return {...state, currentPage: action.currentPage}
    }
    case 'Set_Total_Count' : {
      return {...state, totalUsersCount: action.totalCount}
    }
    case 'Toogle_Is_Fetching' : {
      return {...state, isFetching : action.isFetching}
    }
    case 'buttonDisabling' : {
      return {...state, buttonDisable: action.buttonDisable}
    }
  default: return state;
}
}

export const follow = (userID) => ({type: 'Follow', userID});
export const Unfollow = (userID) => ({type: 'Unfollow', userID});
export const setUsers = (UsersNames) => ({type: 'Set_Users', UsersNames})
export const setCurrentPage = (currentPage) => ({type: 'Set_Current_Page', currentPage})
export const setTotalUsersCount = (totalCount) => ({type: 'Set_Total_Count', totalCount})
export const togleIsFetching = (isFetching) => ({type: 'Toogle_Is_Fetching', isFetching})
export const buttonDisablingReducer = (buttonDisable, userID) => ({type: 'buttonDisabling', buttonDisable, userID })
export default UsersReducer;