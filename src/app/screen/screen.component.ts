import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NumPadState } from '../store/reducer';



@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {


  numPad$: Observable<NumPadState>;
  value: any;

  constructor(private store: Store<NumPadState>) {
    this.store.pipe(select((state: any) => state.numPad)).subscribe((numpadState) => {
      this.value = numpadState.value;
    });
  }


  ngOnInit(): void {
  }

}
