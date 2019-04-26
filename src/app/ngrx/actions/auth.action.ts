import { Action } from '@ngrx/store';


/*
  定義 ActionTypes , Action
 */


export enum ActionTypes {
  SIGNIN = '[Login Component] SIGNIN',
  SIGNOUT = '[Login Component] SIGNOUT', 
}

export class AuthAction implements Action {
  type: string; 
  payload: Auth;
}

export class SIGNIN implements Action {
  readonly type = ActionTypes.SIGNIN;
  constructor(public payload: { username: string; logintime: string }) {}
}

export class SIGNOUT implements Action {
  readonly type = ActionTypes.SIGNOUT;
  constructor(public payload: { username: string; logintime: string }) {}
}


export interface Auth {
	username: string;  
  logintime: string;
}

 