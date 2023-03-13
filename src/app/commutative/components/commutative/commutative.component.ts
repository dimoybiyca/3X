import { Component, OnInit } from '@angular/core';
import { CommutativeService } from 'src/app/commutative/services/commutative.service';
import { CommutativeStateInterface } from 'src/app/commutative/types/commutative-state.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Component({
  selector: 'app-commutative',
  templateUrl: './commutative.component.html',
  styleUrls: ['./commutative.component.scss'],
})
export class CommutativeComponent implements OnInit {
  message: string;
  passes: number = 1;
  result: string;
  isCipherMode: boolean = false;
  tables: string[];

  constructor(private commutativeService: CommutativeService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    let value: CommutativeStateInterface =
      PersistenceService.get('commutative');
    if (value) {
      this.message = value?.message;
      this.isCipherMode = value?.isCipherMode;
      this.passes = value?.passes;
      this.updateState();
    }
  }

  onMessageChange($event: string): void {
    this.message = $event;
    this.updateState();
  }

  onModeChange($event: boolean): void {
    this.isCipherMode = $event;
    this.updateState();
  }

  onPassesChange($event: string): void {
    this.passes = +$event || 1;
    this.updateState();
  }

  updateState(): void {
    this.result = this.isCipherMode
      ? this.commutativeService.cipher(this.message, this.passes)
      : this.commutativeService.decipher(this.message, this.passes);

    this.saveState();
    this.initTableData();
  }

  saveState(): void {
    const value: CommutativeStateInterface = {
      message: this.message,
      passes: this.passes,
      isCipherMode: this.isCipherMode,
    };

    PersistenceService.set('commutative', value);
  }

  moveText($event: string): void {
    this.message = $event;
    this.updateState();
  }

  initTableData(): void {
    this.tables = [];
    for (let i = 0; i < this.passes; i++) {
      this.tables.push(
        this.isCipherMode
          ? this.commutativeService.cipher(this.message, i + 1)
          : this.commutativeService.decipher(this.message, i + 1)
      );
    }
  }
}
