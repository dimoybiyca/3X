import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CaesarService } from 'src/app/caesars/services/caesar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input('message') messageProps: string;
  @Input('step') stepProps: number;

  cipheredMessage: string;
  decipheredMessage: string;

  constructor(private caesarsService: CaesarService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initData();
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.cipheredMessage = this.caesarsService.cipher(
      this.messageProps,
      this.stepProps
    );
    this.decipheredMessage = this.caesarsService.decipher(
      this.cipheredMessage,
      this.stepProps
    );
  }
}
