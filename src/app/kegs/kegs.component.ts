import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../mock-kegs';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {
  kegs = KEGS;

  selectedKeg: Keg;

  constructor() { }

  ngOnInit() {
  }

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }
  removeKeg(keg: Keg){
    function findKeg(keg, index){
      return keg.id == index;
    }

    const found = KEGS.findIndex(findKeg);
    console.log(found);
    KEGS.splice(found, 1);
  }

}
