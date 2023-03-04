import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaesarService {
  private alphabetSize = 1200;

  cipher(text: string, step): string {
    return text
      .split('')
      .map((char) => char.charCodeAt(0))
      .map((code) => code + step)
      .map((code) => code % this.alphabetSize)
      .map((code) => String.fromCharCode(code))
      .join('');
  }

  decipher(text: string, step): string {
    return text
      .split('')
      .map((char) => char.charCodeAt(0))
      .map((code) => code - (step % this.alphabetSize))
      .map((code) => code % this.alphabetSize)
      .map((code) => String.fromCharCode(code))
      .join('');
  }
}
