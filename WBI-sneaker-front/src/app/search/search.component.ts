import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, finalize, map } from 'rxjs';
import { ProductService } from '../services/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() control!: FormControl
  isLoading: boolean = false;
  src:any
  data$:any
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
  }

  search(value:any):any {
    this.isLoading = true
    this.data$ = this._service.searchShoe({q:value}).pipe(
      debounceTime(1000)
   ).subscribe(res => {
    console.log({res})
   })
  }
}
 