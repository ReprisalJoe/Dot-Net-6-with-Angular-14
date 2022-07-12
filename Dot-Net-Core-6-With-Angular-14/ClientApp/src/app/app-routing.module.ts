import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { MaterialComponent } from './material/material.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'font-awesome', component: FontAwesomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'bootstrap', component: BootstrapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
