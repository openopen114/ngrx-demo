import { Action } from '@ngrx/store';
import { ActionTypes, AuthAction } from '../actions/auth.action';

 
// 初始數據
export const initialState = {
  username:'---',
  logintime:'---', 
};


// action Reducer
export function authReducer(state = initialState, action: AuthAction) {
  console.log('authReducer')

  const { type, payload } = action;
  console.log(type)
  

   
  switch (type) {
    case ActionTypes.SIGNIN:  
      return {...state, username:payload.username, logintime:payload.logintime};
    case ActionTypes.SIGNOUT: 
      return {...state, username:payload.username, logintime:payload.logintime};
    default:
      return state;
  }
}