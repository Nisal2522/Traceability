import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductPassportComponent } from './product-passport.component'

const routes: Routes = [{ path: '', component: ProductPassportComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPassportRoutingModule {}
