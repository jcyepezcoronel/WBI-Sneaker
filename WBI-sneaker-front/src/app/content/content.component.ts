import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  searchControl = new FormControl('');
  listarProduct: any[] = []
  totalLength: any;
  page: number = 1;
  dataresult: any
  constructor(private _productService: ProductService) {
  }
  
  ngOnInit(): void {
     this.getProduct();
     this.observerSearch();
    }
    getProduct() {
     this._productService.getAllProduct().subscribe(res => {
       this.listarProduct = res;
       this.dataresult = this.listarProduct;
       this.totalLength = res.length;
 
       console.log( res );
     })
    }
  observerSearch() {
    this.searchControl.valueChanges.subscribe(res => {
      console.log({res});
      
      this.dataresult = this.listarProduct.filter(products => {
        console.log(products);
        
        
        return (res)? products.brand.toLowerCase().includes(res.toLowerCase()) ||
        products.product.toLowerCase().includes(res.toLowerCase()) ||
        products.createdAt.toLowerCase().includes(res.toLowerCase()): null
      //   return (!products.Telephone) ?
      //     fullName.toLowerCase().includes(res.toLowerCase()) :
      //     (fullName.toLowerCase().includes(res.toLowerCase()) ||
      //     products.Telephone.includes(res));
      // });

      // const arrayToBeneficiary: Beneficiary[] = Object.values(this.dataresult) as Beneficiary[];
      // this.dataresultBeneficiary$ = of(arrayToBeneficiary);

    });});
    }
}
