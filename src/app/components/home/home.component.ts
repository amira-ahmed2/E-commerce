import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { first, of } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Iproduct } from 'src/app/models/iproduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // pagenation
  length:number;
  pageSize:number;
   // MatPaginator Output
   pageEvent!: PageEvent;
  values:any
  
 
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] ;
  
  // pages: number = 1;
  picture: any;
  products!:Iproduct[];
  product!:any[];

 
constructor(private prods: ProductsService) {
  this.pageSize=8;
  this.length=0;
  this.slides= [
    {image:"assets/images/slid-1.png"},
    {image:"assets/images/slid-2.jpeg"},
    {image:"assets/images/slid-3.jpeg"}
  ]
}

  ngOnInit(): void {

  
    this.showAllMoves()
  }
showAllMoves(){
  
  this.prods.getAllproducts().pipe(first()).subscribe((data) => {
    this.products=data.products
    this.values = this.products;
    //  console.log("data.products",this.values);
     this.length=this.products.length
     
  });
}

saveIdProdct(idPro:number|any){
  localStorage.setItem("idPro",idPro);
}
trackByFun (index:number,item:Iproduct){
  return item.id
}

 

}
