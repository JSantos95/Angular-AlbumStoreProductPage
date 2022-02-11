import { Component, OnInit } from '@angular/core';
import { Album, CD } from 'app/album';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: CD;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe({
      next: res => this.albumInfo = res
    })
  }

}
