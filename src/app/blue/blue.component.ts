import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { Auth} from '../ngrx/actions/auth.action';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {
  
	auth$:Observable<Auth>;
	logintime: string = '';



	constructor(private store: Store<{ auth: Auth }>) {
		this.auth$ = store.pipe(select('auth'));
		this.auth$.subscribe(res => {  
			console.log('blue')
			console.log(res)
			console.log(res.logintime)

			 this.logintime = res.logintime;
		})
	}

	ngOnInit() {
	}

}
