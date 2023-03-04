import { Component, OnInit } from '@angular/core';
import { CaesarService } from 'src/app/caesars/services/caesar.service';
import { CaesarStateInterface } from 'src/app/caesars/types/caesar-state.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Component({
  selector: 'app-caesars',
  templateUrl: './caesars.component.html',
  styleUrls: ['./caesars.component.scss'],
})
export class CaesarsComponent implements OnInit {
  isCipherMode: boolean = false;
  step: number = 10;
  result: string;
  message: string;

  constructor(private caesarService: CaesarService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    let value: CaesarStateInterface = PersistenceService.get('caesar');
    if (value) {
      this.message = value.message;
      this.step = value.step;
      this.isCipherMode = value.isCipher;
      this.callService();
    }
  }

  onMessageChanged($event: string): void {
    this.message = $event;
    this.callService();
    this.saveState();
  }

  onSliderChange($event: boolean): void {
    this.isCipherMode = $event;
    this.callService();
    this.saveState();
  }

  onStepChange($event: string): void {
    this.step = +$event;
    this.callService();
    this.saveState();
  }

  moveText($event: string): void {
    this.message = $event;
  }

  private callService(): void {
    if (!this.message) {
      return;
    }

    if (this.isCipherMode) {
      this.result = this.caesarService.cipher(this.message, this.step);
    } else {
      this.result = this.caesarService.decipher(this.message, this.step);
    }
  }

  private saveState(): void {
    const value: CaesarStateInterface = {
      message: this.message,
      step: this.step,
      isCipher: this.isCipherMode,
    };

    PersistenceService.set('caesar', value);
  }
}
