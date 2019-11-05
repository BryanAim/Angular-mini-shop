import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Iproduct;

  constructor() { }

  ngOnInit() {
  }

}
