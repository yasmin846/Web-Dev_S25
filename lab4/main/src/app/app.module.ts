// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common'; 
// import { AppComponent } from './app.component';
// import { ProductsComponent } from './products/products.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductsComponent
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent  // Declare ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
