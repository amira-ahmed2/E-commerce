import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search:boolean;
  navToggler:boolean;
  category!:any[];

    constructor(private apiPro:MoviesService) {
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
