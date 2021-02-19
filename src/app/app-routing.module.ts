import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ParametresComponent } from './admin/parametres/parametres.component';
import { PromosComponent } from './admin/parametres/promos/promos.component';
import { ReferentielsComponent } from './admin/parametres/referentiels/referentiels.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { AddGrpcompetencesComponent } from './grpcompetences/add-grpcompetences/add-grpcompetences.component';
import { AddCompetencesComponent } from './competence/add-competences/add-competences.component';
import { CompetenceComponent } from './competence/competence.component';
import { DetaillesCompetencesComponent } from './competence/detailles-competences/detailles-competences.component';
import { UpdateCompetencesComponent } from './competence/update-competences/update-competences.component';
import { DetaillesGrpcompetencesComponent } from './grpcompetences/detailles-grpcompetences/detailles-grpcompetences.component';
import { GrpcompetencesComponent } from './grpcompetences/grpcompetences.component';
import { UpdateGrpcompetencesComponent } from './grpcompetences/update-grpcompetences/update-grpcompetences.component';
import { LoginComponent } from './login/login.component';
import { DetillesUserComponent } from './user/detilles-user/detilles-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { UpdateProfilSortieComponent } from './profil-sortie/update-profil-sortie/update-profil-sortie.component';
import { DetaillesProfileComponent } from './profil-sortie/detailles-profile/detailles-profile.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { DefaultcompetencevaluesComponent } from './competence/defaultcompetencevalues/defaultcompetencevalues.component';
import { DetaillesPromosComponent } from './parametres/promos/detailles-promos/detailles-promos.component';
import { UpdatePromosComponent } from './parametres/promos/update-promos/update-promos.component';
import { ApprenantStatistiqueComponent } from './promos/apprenant-statistique/apprenant-statistique.component';
import { DetailleReferentielsComponent } from './admin/parametres/referentiels/detaille-referentiels/detaille-referentiels.component';
import { UpdateReferentielsComponent } from './admin/parametres/referentiels/update-referentiels/update-referentiels.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/users', component: UserAdminComponent,
  children: [
    { path: '', redirectTo: '/admin/users/user', pathMatch: 'full' },
    { path: 'user', component: UsersComponent,
         children:
          [
           {path: ':id/user-update', component: UpdateUserComponent},
           {path: ':id', component: DetillesUserComponent}
         ]
    }
    ]
},
{ path: 'admin/parametres', component: ParametresComponent,
children: [
  { path: '', redirectTo: '/admin/parametres/promos', pathMatch: 'full' },
  { path: 'promos', component: PromosComponent,
  children : [
    { path: ':id/detailles', component : DetaillesPromosComponent,
  children: [
    { path: 'apprenant/:id/statistique', component : ApprenantStatistiqueComponent}
  ]
  },
    { path: ':id/update', component : UpdatePromosComponent}
  ]
  },
  { path: 'referentiels', component: ReferentielsComponent,
  children : [
    { path: ':id', component : DetailleReferentielsComponent},
    { path: ':id/update', component : UpdateReferentielsComponent}
   ]
},
  { path: 'competences', component: CompetenceComponent,
   children : [
    { path: '', component : DefaultcompetencevaluesComponent},
    { path: ':id/detailles', component : DetaillesCompetencesComponent},
    { path: ':id/update', component : UpdateCompetencesComponent}
   ]
  },
  { path: 'groupecompetences', component : GrpcompetencesComponent,
   children: [
     {path: ':id', component: DetaillesGrpcompetencesComponent},
     {path: ':id/update', component: UpdateGrpcompetencesComponent},
   ]
  },
  { path: 'profil-sortie', component: ProfilSortieComponent,
    children:
    [
      {path: ':id', component: DetaillesProfileComponent},
     {path: ':id/update', component: UpdateProfilSortieComponent}
   ]}
]},
  {path : 'page-Tampon', component: NotfoundpageComponent},
  {path : '**', redirectTo: '/page-Tampon'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
