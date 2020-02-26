import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our product', component: ProductComponent },
  { path: 'testimonies', component: TestimoniesComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
