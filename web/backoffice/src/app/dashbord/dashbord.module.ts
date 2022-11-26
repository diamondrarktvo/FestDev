import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { TachesComponent } from './components/taches/taches.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { SupportComponent } from './components/support/support.component';


@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    SidebarComponent,
    AccueilComponent,
    TachesComponent,
    ActivitesComponent,
    UtilisateursComponent,
    MessagesComponent,
    NotificationsComponent,
    ParametresComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ],
  exports: [
    BodyComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class DashbordModule { }
