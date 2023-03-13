import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommutativeService {
  cipher(message: string, passes: number): string {
    let temp = message;
    for (let k = 0; k < passes; k++) {
      let letters = temp.split('');
      let p = [];
      let n = [];

      for (let i = 0; i < letters.length; i++) {
        if (i % 2 === 0) {
          p.push(letters[i]);
        } else {
          n.push(letters[i]);
        }
      }

      console.log(p, n);

      temp = p.join('').concat(n.join(''));
    }

    return temp;
  }

  decipher(message: string, passes: number): string {
    let temp = message;

    for (let k = 0; k < passes; k++) {
      let letters = temp.split('');
      let p = letters.slice(0, Math.ceil(letters.length / 2));
      let n = letters.slice(Math.ceil(letters.length / 2));

      console.log(p, n);

      temp = '';
      for (let i = 0; i < p.length; i++) {
        temp += p[i];
        if (n[i]) {
          temp += n[i];
        }
      }
    }

    return temp;
  }
}
