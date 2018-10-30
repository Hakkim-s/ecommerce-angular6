import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BestProductComponent } from './best-product/best-product.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AnimationsComponent } from './animations/animations.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { ComponentsComponent } from './components/components.component';
import { NoProductsFoundComponent } from './no-products-found/no-products-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { ModelsComponent } from './models/models.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CartCalculatorComponent } from './cart-calculator/cart-calculator.component';
import { BillingComponent } from './billing/billing.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ResultsComponent } from './results/results.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    AddProductComponent,
    BestProductComponent,
    CartProductComponent,
    CheckoutComponent,
    FavouriteProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    AnimationsComponent,
    NoAccessComponent,
    ComponentsComponent,
    NoProductsFoundComponent,
    PageNotFoundComponent,
    LoaderSpinnerComponent,
    ModelsComponent,
    PipesComponent,
    ServicesComponent,
    UserAccountComponent,
    CartCalculatorComponent,
    BillingComponent,
    BillingDetailsComponent,
    CheckoutNavbarComponent,
    ProductsComponent,
    ResultsComponent,
    ShippingDetailsComponent

  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
