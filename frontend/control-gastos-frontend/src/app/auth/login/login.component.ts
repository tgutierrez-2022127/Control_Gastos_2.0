import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #0a0a1a, #1a0a2e, #0a1a2e); padding: 20px; font-family: Arial, sans-serif;">
      <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 30px; padding: 40px; width: 100%; max-width: 400px; border: 1px solid rgba(0,240,255,0.2); box-shadow: 0 0 60px rgba(0,240,255,0.1);">
        
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #00f0ff, #8b00ff); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 30px; color: white; box-shadow: 0 0 30px rgba(0,240,255,0.3);">
            <i class="fas fa-coins"></i>
          </div>
          <h1 style="color: white; font-size: 28px; font-weight: 700; text-shadow: 0 0 20px rgba(0,240,255,0.3);">Control de Gastos</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin-top: 5px;">Controlamos tus gastos</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" style="display: flex; flex-direction: column; gap: 20px;">
          
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <label style="color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500;">Correo Electrónico</label>
            <input
              type="email"
              formControlName="email"
              placeholder="admin@kinal.org"
              style="padding: 12px 16px; background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; font-size: 16px; transition: all 0.3s ease;"
              [style.borderColor]="emailControl?.invalid && emailControl?.touched ? '#ff0040' : ''"
            >
            <div style="font-size: 12px; color: #ff0040;" *ngIf="emailControl?.invalid && emailControl?.touched">
              <span *ngIf="emailControl?.errors?.['required']">El correo es obligatorio</span>
              <span *ngIf="emailControl?.errors?.['email']">Ingresa un correo válido</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 5px;">
            <label style="color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500;">Contraseña</label>
            <div style="position: relative;">
              <input
                [type]="showPassword ? 'text' : 'password'"
                formControlName="password"
                placeholder="••••••••"
                style="width: 100%; padding: 12px 16px; padding-right: 50px; background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; font-size: 16px; transition: all 0.3s ease;"
                [style.borderColor]="passwordControl?.invalid && passwordControl?.touched ? '#ff0040' : ''"
              >
              <button type="button" (click)="togglePasswordVisibility()" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: none; border: none; color: rgba(255,255,255,0.4); cursor: pointer; font-size: 16px;">
                <i [class]="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
            <div style="font-size: 12px; color: #ff0040;" *ngIf="passwordControl?.invalid && passwordControl?.touched">
              <span *ngIf="passwordControl?.errors?.['required']">La contraseña es obligatoria</span>
              <span *ngIf="passwordControl?.errors?.['minlength']">Mínimo 6 caracteres</span>
            </div>
          </div>

          <div *ngIf="errorMessage" style="background: rgba(255,0,64,0.1); color: #ff0040; padding: 12px 16px; border-radius: 12px; font-size: 14px; border: 1px solid rgba(255,0,64,0.2); text-align: center;">
            {{ errorMessage }}
          </div>

          <button type="submit" [disabled]="isLoading || loginForm.invalid" style="padding: 14px; border: none; border-radius: 12px; background: linear-gradient(135deg, #00f0ff, #8b00ff); color: white; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 0 30px rgba(0,240,255,0.3);">
            <span *ngIf="!isLoading">Iniciar Sesión</span>
            <span *ngIf="isLoading">Cargando...</span>
          </button>

          <div style="display: flex; gap: 12px; justify-content: center;">
            <button type="button" (click)="loginForm.patchValue({ email: 'admin@kinal.org', password: 'Admin123!' })" style="padding: 6px 20px; border-radius: 9999px; border: 1px solid rgba(0,240,255,0.3); background: rgba(0,240,255,0.05); color: rgba(255,255,255,0.7); cursor: pointer; font-size: 13px; transition: all 0.3s ease;">
              Admin
            </button>
            <button type="button" (click)="loginForm.patchValue({ email: 'usuario@kinal.org', password: 'User123!' })" style="padding: 6px 20px; border-radius: 9999px; border: 1px solid rgba(0,240,255,0.3); background: rgba(0,240,255,0.05); color: rgba(255,255,255,0.7); cursor: pointer; font-size: 13px; transition: all 0.3s ease;">
              Usuario
            </button>
          </div>
        </form>

        <div style="margin-top: 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
          <p style="font-size: 12px; color: rgba(255,255,255,0.2);">Sistema seguro con JWT</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Error al iniciar sesion';
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  get emailControl() { return this.loginForm.get('email'); }
  get passwordControl() { return this.loginForm.get('password'); }
}