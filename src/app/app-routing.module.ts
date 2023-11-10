import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabTamplateComponent } from './lab-tamplate/lab-tamplate.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [  
  { path: '', component: MainPageComponent },
  { path: 'lab/:labNumber', component: LabTamplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
