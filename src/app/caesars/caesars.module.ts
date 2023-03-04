import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaesarsComponent } from './components/caesars/caesars.component';
import { RouterModule } from '@angular/router';
import { OutputModule } from 'src/app/shared/modules/output/output.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { SliderModule } from 'src/app/shared/modules/slider/slider.module';

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
