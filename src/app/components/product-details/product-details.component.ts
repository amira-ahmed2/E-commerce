import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  idPro:number;
  singleProduct?:Iproduct;
  singleProductThumbnail?:string;
  constructor(private prods: ProductsService) {
    this.idPro= Number(localStorage.getItem("idPro"))

  }
  ngOnInit() {
    this.showDetailsPro();
   }
    showDetailsPro(){
        this.prods.getSingleProd(this.idPro).subscribe({next:(data)=>{
          this.singleProduct=data
          console.log(this.singleProduct)
          this.singleProductThumbnail=this.singleProduct?.thumbnail
        },error:(er)=>{
          alert(er.message)
        }})
       }
       changeThumbnail(data:any){
        this.singleProductThumbnail=data;
       }
}
