import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './components/output/output.component';
import { IconModule } from 'src/app/shared/icon/icon.module';

@NgModule({
  declarations: [OutputComponent],
  imports: [CommonModule, IconModule],
  exports: [OutputComponent],
})
export class OutputModule {}
