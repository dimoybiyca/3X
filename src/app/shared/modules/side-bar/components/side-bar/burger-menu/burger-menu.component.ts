import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  @Output('isActive') isActive = new EventEmitter<boolean>();
  isBurgerOpen: boolean = false;

  onBurgerClick() {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isActive.emit(this.isBurgerOpen);
  }
}
