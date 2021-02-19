import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import { AdminComponent } from './admin/admin.component';
import { ParametresComponent } from './admin/parametres/parametres.component';
import { PromosComponent } from './admin/parametres/promos/promos.component';
import { ReferentielsComponent } from './admin/parametres/referentiels/referentiels.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './login.interceptor.service';
import { LoginComponent } from './login/login.component';
import { AuthentificationService } from './authentification.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DetillesUserComponent } from './user/detilles-user/detilles-user.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProfilsComponent } from './profils/profils.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { UpdateProfilComponent } from './profils/update-profil/update-profil.component';
import { ListeProfilComponent } from './profils/liste-profil/liste-profil.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { UpdateProfilSortieComponent } from './profil-sortie/update-profil-sortie/update-profil-sortie.component';
import { ListeProfilSortieComponent } from './profil-sortie/liste-profil-sortie/liste-profil-sortie.component';
import { GrpcompetencesComponent } from './grpcompetences/grpcompetences.component';
import { CompetenceComponent } from './competence/competence.component';
import { AddCompetencesComponent } from './competence/add-competences/add-competences.component';
import { DetaillesCompetencesComponent } from './competence/detailles-competences/detailles-competences.component';
import { UpdateCompetencesComponent } from './competence/update-competences/update-competences.component';
import { ListeCompetencesComponent } from './competence/liste-competences/liste-competences.component';
import { AddGrpcompetencesComponent } from './grpcompetences/add-grpcompetences/add-grpcompetences.component';
import { UpdateGrpcompetencesComponent } from './grpcompetences/update-grpcompetences/update-grpcompetences.component';
import { ListeGrpcompetencesComponent } from './grpcompetences/liste-grpcompetences/liste-grpcompetences.component';
import { DetaillesGrpcompetencesComponent } from './grpcompetences/detailles-grpcompetences/detailles-grpcompetences.component';
import { AddReferentielsComponent } from './admin/parametres/referentiels/add-referentiels/add-referentiels.component';
import { ListeReferentielsComponent } from './admin/parametres/referentiels/liste-referentiels/liste-referentiels.component';
import { UpdateReferentielsComponent } from './admin/parametres/referentiels/update-referentiels/update-referentiels.component';
import { DetailleReferentielsComponent } from './admin/parametres/referentiels/detaille-referentiels/detaille-referentiels.component';
import { AddPromoComponent } from './parametres/promos/add-promo/add-promo.component';
import { UpdatePromosComponent } from './parametres/promos/update-promos/update-promos.component';
import { ListePromosComponent } from './parametres/promos/liste-promos/liste-promos.component';
import { DetaillesPromosComponent } from './parametres/promos/detailles-promos/detailles-promos.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DetaillesProfileComponent } from './profil-sortie/detailles-profile/detailles-profile.component';
import { CdkColumnDef } from '@angular/cdk/table';
import * as $ from 'jquery';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { DefaultcompetencevaluesComponent } from './competence/defaultcompetencevalues/defaultcompetencevalues.component';
import { ListeApprennantsComponent } from './promos/liste-apprennants/liste-apprennants.component';
import { ApprenantStatistiqueComponent } from './promos/apprenant-statistique/apprenant-statistique.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UsersListComponent,
    UserItemComponent,
    AdminComponent,
    ParametresComponent,
    PromosComponent,
    ReferentielsComponent,
    UserAdminComponent,
    LoginComponent,
    AddUserComponent,
    UpdateUserComponent,
    DetillesUserComponent,
    ProfilsComponent,
    AddProfilComponent,
    UpdateProfilComponent,
    ListeProfilComponent,
    ProfilSortieComponent,
    AddProfilSortieComponent,
    UpdateProfilSortieComponent,
    ListeProfilSortieComponent,
    GrpcompetencesComponent,
    CompetenceComponent,
    AddCompetencesComponent,
    DetaillesCompetencesComponent,
    UpdateCompetencesComponent,
    ListeCompetencesComponent,
    AddGrpcompetencesComponent,
    UpdateGrpcompetencesComponent,
    ListeGrpcompetencesComponent,
    DetaillesGrpcompetencesComponent,
    AddReferentielsComponent,
    ListeReferentielsComponent,
    UpdateReferentielsComponent,
    DetailleReferentielsComponent,
    AddPromoComponent,
    UpdatePromosComponent,
    ListePromosComponent,
    DetaillesPromosComponent,
    DetaillesProfileComponent,
    NotfoundpageComponent,
    DefaultcompetencevaluesComponent,
    ListeApprennantsComponent,
    ApprenantStatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialFileInputModule,
    MatExpansionModule,
    MatChipsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    CdkColumnDef
  ],
  bootstrap: [AppComponent]
})
export class AppModule{
 }
