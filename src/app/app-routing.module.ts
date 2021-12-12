import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent} from "./views/time/time.component";
import {GalacticComponent} from "./views/galactic/galactic.component";
import {AboutusComponent} from "./views/aboutus/aboutus.component";

const routes: Routes = [
  { path: '', component: TimeComponent },
  {path: 'gt', component: GalacticComponent},
  {path: 'about', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
