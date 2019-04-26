import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { Auth} from '../ngrx/actions/auth.action';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent implements OnInit {

 
	auth$:Observable<Auth>;
	



	constructor(private store: Store<{ auth: Auth }>) {
		this.auth$ = store.pipe(select('auth'));
		
	}


	ngOnInit() {
	}

}
