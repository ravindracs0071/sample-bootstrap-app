import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinfoComponent } from './cardinfo/cardinfo.component';

import { RouterModule } from '@angular/router';

const appRoutes = [
  {
      path: '', component: CardinfoComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [CardinfoComponent],
  exports : [CardinfoComponent]
})
export class CommonSharedModule { }
