import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'events', redirectTo: 'event/index', pathMatch: 'full'},
  { path: 'event/index', component: IndexComponent },
  { path: 'event/:eventId', component: ActionsComponent },
  { path: 'event', component: ActionsComponent },
  { path: '**',component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
