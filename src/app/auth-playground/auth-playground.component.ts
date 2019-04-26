import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { SIGNIN, SIGNOUT, Auth} from '../ngrx/actions/auth.action';


import * as moment from 'moment';

@Component({
  selector: 'app-auth-playground',
  templateUrl: './auth-playground.component.html',
  styleUrls: ['./auth-playground.component.scss']
})
export class AuthPlaygroundComponent implements OnInit {

	auth$:Observable<Auth>;



	constructor(private store: Store<{ auth: Auth }>) {
		this.auth$ = store.pipe(select('auth'));
		this.auth$.subscribe(res => {  
			console.log(res)
		})
	}


	signIn() {
		const payload = {
			username:'openopen sign in', 
			logintime:moment().format('HH:mm:ss').toString()
		}
		this.store.dispatch(new SIGNIN(payload));
	}

	singOut() {
		const payload = {
			username:'---', 
			logintime:'---'
		}
		this.store.dispatch(new SIGNOUT(payload));
	}
 

	ngOnInit() {
	}

}

