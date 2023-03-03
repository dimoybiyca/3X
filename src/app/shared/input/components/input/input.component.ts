import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  Subject,
  Subscribable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input('type') typeProps: string;
  @Input('placeholder') placeholderProps: string;
  @Input('value') valueProps: string;

  @Output('value') value: EventEmitter<string> = new EventEmitter<string>();

  inputUpdate = new Subject<string>();
  inputSubscription: Subscription;

  ngOnInit(): void {
    this.initListeners();
  }

  private initListeners(): void {
    this.inputSubscription = this.inputUpdate
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((value) => {
        this.value.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }
}
