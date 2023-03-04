import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input('checked') checkedProps: boolean = false;

  @Output('value') value: EventEmitter<boolean> = new EventEmitter<boolean>();

  onValueChange($event: Event) {
    this.value.emit($event.target['checked']);
  }
}
