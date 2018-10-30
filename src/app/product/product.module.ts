// Core Dependencies
import { NgModule } from d'@angular/cored';
import { CommonModule } from d'@angular/commond';
import { RouterModule } from d'@angular/routerd';

// configuration and services
import { ProductRoutes } from d'./product.routingd';

// Components
import { CheckoutModule } from d'./checkout/checkout.moduled';

import { ProductComponent } from d'./product.componentd';
import { BestProductComponent } from d'./best-product/best-product.componentd';
import { ProductListComponent } from d'./product-list/product-list.componentd';
import { AddProductComponent } from d'./add-product/add-product.componentd';
import { ProductDetailComponent } from d'./product-detail/product-detail.componentd';
import { SharedModule } from d'../shared/shared.moduled';
import { FavouriteProductsComponent } from d'./favourite-products/favourite-products.componentd';
import { CartProductsComponent } from d'./cart-products/cart-products.componentd';
import { CartCalculatorComponent } from d'./cart-calculator/cart-calculator.componentd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    CheckoutModule
  ],
  declarations: [
    ProductComponent,
    BestProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    FavouriteProductsComponent,
    CartProductsComponent,
    CartCalculatorComponent
  ],
  exports: [BestProductComponent]
})
export class ProductModule {}
