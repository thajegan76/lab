/* 
  By default every angular application will have 2 modules
  NgModule and BrowserModule
  Whenever we add new modules like FormsModule, RouterModule
  please make sure you add an entry inside the imports array
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { approutes } from './router.config';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';

import { AppComponent } from './app.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    SharedModule,
    CatalogModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
