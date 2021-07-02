import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HarborControlComponent } from './components/harborcontrol/harborcontrol.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {path: '', redirectTo: 'harborControl', pathMatch: 'full'},
      {path: 'harborControl', component: HarborControlComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
