import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BurgerMenuComponent } from './components/side-bar/burger-menu/burger-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideBarComponent, BurgerMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
