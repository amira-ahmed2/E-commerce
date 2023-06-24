import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import { Iproduct } from 'src/app/models/iproduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: {image: string; text?: string}[] = [
    {image:"assets/images/slid-1.png"},
    {image:"assets/images/slid-2.jpeg"},
    {image:"assets/images/slid-3.jpeg"}
  ];
  
  pages: number = 1;
  picture: any;
  products!:Iproduct[];
  product!:any[];

 
constructor(private movies: MoviesService) {}

  ngOnInit(): void {

  
    this.showAllMoves()
  }
showAllMoves(){
  
  this.movies.getAllMovies().pipe(first()).subscribe((data) => {
    this.products=data.products
    
  });
}

saveIdProdct(idPro:number|any){
  sessionStorage.setItem("idPro",idPro);
}
trackByFun (index:number,item:Iproduct){
  return item.id
}

 

}
