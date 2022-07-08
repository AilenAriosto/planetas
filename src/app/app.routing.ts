import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planetas', component: PlanetasComponent},
  { path: 'planetas/:peso/:planeta', component: PlanetasComponent},
  { path: '**', component: NotFoundComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
