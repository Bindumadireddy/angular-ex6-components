import { Component,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor() { }

 
  
  @Input()  total:number;
  
  @Input() order:any;
  
  
  @Output() total_remove:EventEmitter<any> = new EventEmitter();
  @Output() del= new EventEmitter();
   remove(i,item)
   {
    this.order.splice(i,1);
   this.total-=item.price;
     this.total_remove.emit(this.total);
    this.del.emit(this.total);
   }
  
}
