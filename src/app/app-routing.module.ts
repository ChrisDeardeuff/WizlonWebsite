import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent} from "./views/time/time.component";
import {GalacticComponent} from "./views/galactic/galactic.component";

const routes: Routes = [
  { path: '', component: TimeComponent },
  {path: 'gt', component: GalacticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
