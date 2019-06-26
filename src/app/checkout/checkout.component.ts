import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() total:number;

  place(event)
  {
    if(this.total!=0)
    {
      alert("order is placed");
    }
    else{
      alert("please place order");
    }
    
  }
}