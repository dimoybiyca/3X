import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarsComponent } from './components/caesars/caesars.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/shared/input/input.module';
import { OutputModule } from 'src/app/shared/output/output.module';
import { SliderModule } from 'src/app/shared/slider/slider.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

const routes = [
  {
    path: 'caesar',
    component: CaesarsComponent,
  },
];

@NgModule({
  declarations: [CaesarsComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    OutputModule,
    SliderModule,
    FormsModule,
  ],
})
export class CaesarsModule {}
