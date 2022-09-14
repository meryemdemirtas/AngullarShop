import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'order',component:OrderComponent},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product/category/:categoryId', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
