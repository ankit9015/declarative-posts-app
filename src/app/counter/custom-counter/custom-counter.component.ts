import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { getChannelName, getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent implements OnInit {
  counter$!: Observable<string>;
  value = 0;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: this.value }));
  }
}
