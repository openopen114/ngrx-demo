import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { Auth } from './ngrx/actions/auth.action'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	auth$:Observable<Auth>;




	constructor(private store: Store<{ auth: Auth }>) {
		this.auth$ = store.pipe(select('auth'));
	}



}
