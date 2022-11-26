import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dashbord',
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
  },
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashbord', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
