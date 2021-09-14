import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TosComponent } from './pages/tos/tos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingpageComponent },
  { path: 'tos', component: TosComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
