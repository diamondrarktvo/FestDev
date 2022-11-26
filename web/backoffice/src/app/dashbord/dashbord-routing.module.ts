import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { BodyComponent } from './components/body/body.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { SupportComponent } from './components/support/support.component';
import { TachesComponent } from './components/taches/taches.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {path: 'accueil', component: AccueilComponent},
      {path: 'taches', component: TachesComponent},
      {path: 'activites', component: ActivitesComponent},
      {path: 'utilisateurs', component: UtilisateursComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'parametres', component: ParametresComponent},
      {path: 'support', component: SupportComponent},
      {path: '', redirectTo: '/dashbord/accueil', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
