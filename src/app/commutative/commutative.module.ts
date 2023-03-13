import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommutativeComponent } from './components/commutative/commutative.component';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { OutputModule } from 'src/app/shared/modules/output/output.module';
import { SliderModule } from 'src/app/shared/modules/slider/slider.module';
import { TableComponent } from './components/commutative/table/table.component';

const routes = [
  {
    path: 'commutative',
    component: CommutativeComponent,
  },
];

@NgModule({
  declarations: [CommutativeComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    OutputModule,
    SliderModule,
  ],
})
export class CommutativeModule {}
