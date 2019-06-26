import { Component, OnInit ,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }n:number;
  totalRemove(event){
    this.n=event;
  }
  totaladd(event){
    this.n=event;
  }
 
}
