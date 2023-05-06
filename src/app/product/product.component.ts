import { Component,Input,ChangeDetectionStrategy } from '@angular/core';
import { ProductSrcService } from '../service/product-src.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  [x: string]: Object;
  @Input('data') products: any[] = [];
  page: number = 1;
   product:any

  constructor(private PrdSrc: ProductSrcService) {
    this.getProductData()

  }
   getProductData() {
     this.PrdSrc.getProduct().subscribe((data) => {
      // console.log(JSON.stringify(data));
       localStorage.setItem("product",(JSON.stringify(data)));


       this.product =data;
    });
    console.log(localStorage.getItem("product"));
  }
  
  
}





