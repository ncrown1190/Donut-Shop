import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonutDetailComponent,
    CartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
