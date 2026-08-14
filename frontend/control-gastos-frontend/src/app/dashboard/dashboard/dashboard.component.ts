import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #0a0a1a; flex-direction: column;">
      <h1 style="color: white; font-size: 40px; text-shadow: 0 0 20px #00f0ff;">Dashboard</h1>
      <p style="color: #00f0ff; font-size: 20px;">Bienvenido al sistema</p>
      <button (click)="logout()" style="background: linear-gradient(135deg, #ff0040, #8b00ff); border: none; padding: 15px 50px; border-radius: 16px; color: white; font-size: 18px; margin-top: 20px; cursor: pointer;">
        Cerrar Sesión
      </button>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}