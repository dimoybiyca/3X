import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit {
  @Output('isActive') isActive = new EventEmitter<boolean>();
  isBurgerOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.changeState();
      }
    });
  }

  onBurgerClick() {
    this.changeState();
  }

  changeState(): void {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isActive.emit(this.isBurgerOpen);
  }
}
