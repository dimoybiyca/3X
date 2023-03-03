import { Component, EventEmitter } from '@angular/core';
import { CaesarService } from 'src/app/caesars/services/caesar.service';

@Component({
  selector: 'app-caesars',
  templateUrl: './caesars.component.html',
  styleUrls: ['./caesars.component.scss'],
})
export class CaesarsComponent {
  isCipherMode: boolean;
  step: number = 10;
  result: string;
  message: string;

  constructor(private caesarService: CaesarService) {}

  onMessageChanged($event: string): void {
    this.message = $event;
    this.callService();
  }

  onSliderChange($event: boolean): void {
    this.isCipherMode = $event;
    this.callService();
  }

  onStepChange($event: string): void {
    this.step = +$event;
    this.callService();
  }

  moveText($event: string): void {
    this.message = $event;
  }

  callService(): void {
    if (!this.message) {
      return;
    }

    if (this.isCipherMode) {
      this.result = this.caesarService.cipher(this.message, this.step);
    } else {
      this.result = this.caesarService.decipher(this.message, this.step);
    }
  }
}
