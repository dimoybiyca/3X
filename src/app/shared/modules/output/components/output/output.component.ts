import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Input('text') textProps: string;
  @Input('isButton') isButtonProps: string;
  @Input('iconName') iconNameProps: string;

  @Output('btnClicked') btnClickedEvent: EventEmitter<string> =
    new EventEmitter<string>();

  onButtonClick(): void {
    this.btnClickedEvent.emit(this.textProps);
  }
}
