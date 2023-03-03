import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Output('value') value: EventEmitter<boolean> = new EventEmitter<boolean>();

  onValueChange($event: Event) {
    this.value.emit($event.target['checked']);
  }

  ngOnInit(): void {
    this.value.emit(false);
  }
}
