import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  array1:any=[{item:"Item",product:"Shirt",price:100},{item:"Item",product:"Jean",price:150},{item:"Item",product:"Shoe",price:150},{item:"Item",product:"Saree",price:250}];
    array2:any=[];
     n:number=0;
     product:string='';
    price:number;

  
 

   @Output() content:EventEmitter<any> = new EventEmitter();
  
  @Output() add:EventEmitter<any> =new EventEmitter();
  addcart(item)
  {
    
    this.array2.push(item);
    this.n+=item.price;
    this.content.emit(this.array2);
    this.add.emit(this.n);
    //console.log(this.n);
    
  }
  
}

  
  
  