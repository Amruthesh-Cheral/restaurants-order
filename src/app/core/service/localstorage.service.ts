import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  set currentTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  get currentTheme(): string {
    return localStorage.getItem('theme') || 'light'
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? "dark" : 'light'
    this.currentTheme = newTheme;
  }

}
