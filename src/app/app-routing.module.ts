import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectComponent } from './pages/redirect/redirect.component';
import { AuthGuard } from './core/common/auth.gaurd';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch: 'full'
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
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
