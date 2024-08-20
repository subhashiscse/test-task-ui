import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { ExecutionTimePipe } from './pipes/execution-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskDashboardComponent,
    ExecutionTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ExecutionTimePipe]
})
export class AppModule { }
