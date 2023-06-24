import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';

import { CutPipe } from './pipes/cut.pipe';
import {  PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CutPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule ,
    AppRoutingModule,
    PaginationModule.forRoot(),
    MatPaginatorModule,
  ],exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
