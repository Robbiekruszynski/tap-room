import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
