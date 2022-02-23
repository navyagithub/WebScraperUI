import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EventRoutingModule } from './event-routing.module';
import { IndexComponent } from './index/index.component';
import { ActionsComponent } from './actions/actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    IndexComponent,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    EventRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class EventModule { }
