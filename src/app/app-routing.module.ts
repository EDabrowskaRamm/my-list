import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartpageComponent } from './startpage/startpage.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  { path: 'list', component: ListComponent },
  { path: '',   redirectTo: '/startpage', pathMatch: 'full' },
  { path: '**', component: StartpageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule  { }