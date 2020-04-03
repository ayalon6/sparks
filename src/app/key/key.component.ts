import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { click, clear } from '../store/actions';
import { NumPadState } from '../store/reducer';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() myClass: any;
  @Input() value: string;
  @Input() active: any;
  @Input() action: string;
  value$: string;
  lastValue$: string;

  constructor(private store: Store<NumPadState>) {
    this.store.pipe(select((state: any) => state.numPad)).subscribe((numpadState) => {
      this.value$ = numpadState.value;
      this.lastValue$ = numpadState.lastValue;
    });
  }


  callAction() {
    console.log('this.keyMap[this.value]', this.active[this.value]);
    if (this.action === 'click') {
      this.store.dispatch(click({value: this.value}));
    }
    else {
      this.store.dispatch(clear());
    }
  }

  getClass() {
    console.log('this.keyMap[this.value]', this.myClass);
    return this.myClass;
  }

  disabled() {
    if (this.action === 'click') {

      return (['0', '1'].includes(this.value) && this.value$.length === 0) ||
      this.lastValue$ !== '' && !(this.active[this.lastValue$].includes(this.value));
    }
    return this.active !== 0 && this.value$.length !== this.active;
  }

  ngOnInit(): void {
  }

}
