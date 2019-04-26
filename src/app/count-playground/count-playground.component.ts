import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../ngrx/actions/count.action';


@Component({
  selector: 'app-count-playground',
  templateUrl: './count-playground.component.html',
  styleUrls: ['./count-playground.component.scss']
})
export class CountPlaygroundComponent implements OnInit {

  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
 
  }
 
  increment() {
    this.store.dispatch(new Increment());
  }
 
  decrement() {
    this.store.dispatch(new Decrement());
  }
 
  reset() {
    this.store.dispatch(new Reset());
  }

  ngOnInit() {
  }

}
