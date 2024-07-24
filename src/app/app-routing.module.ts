import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RedirectComponent } from './pages/redirect/redirect.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => 
      import('./pages/layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'redirect',
    component: RedirectComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
