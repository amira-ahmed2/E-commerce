import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search:boolean;
  navToggler:boolean;
  category!:any[];

    constructor(private apiPro:ProductsService) {
      this.search=false;
      this.navToggler=true;
     }
  
    ngOnInit(): void {
      this.apiPro.getCategory().subscribe((data)=>{
        this.category=data;
      });
    }

    showProductByCategory ($even:any, categoryValue:any){
      this.apiPro.getProductByCategory(categoryValue).subscribe(
        (data)=>{
          console.log("data",data);
        },(error) => {
          console.error('An error occurred:', error);
        }
       
      );
    }
    showSearch(){
      this.search = !this.search;
  
    }
    navbarToggler(){
      this.navToggler = !this.navToggler;
    }

}
