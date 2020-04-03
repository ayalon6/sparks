import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {


  keyMap: any;
  constructor() {
    this.keyMap =  {
      1: ['6', '8'],
      2: ['7', '9'],
      3: ['4', '8'],
      4: ['3', '9', '0'],
      5: [],
      6: ['7', '1', '0'],
      7: ['2', '6'],
      8: ['1', '3'],
      9: ['4', '2'],
      0: ['6', '4']
    };
  }

  ngOnInit(): void {
  }

}
