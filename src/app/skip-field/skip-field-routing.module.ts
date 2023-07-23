import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkipFieldPage } from './skip-field.page';

const routes: Routes = [
  {
    path: '',
    component: SkipFieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkipFieldPageRoutingModule {}
