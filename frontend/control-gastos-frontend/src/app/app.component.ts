import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- ========== LOGIN ========== -->
    <div *ngIf="!logueado" class="login-page">
      <div class="bg-grid"></div>

      <div class="bg-particles">
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
        <div class="particle p4"></div>
        <div class="particle p5"></div>
        <div class="particle p6"></div>
        <div class="particle p7"></div>
        <div class="particle p8"></div>
      </div>

      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>

      <div class="login-card">
        <div class="card-border-glow"></div>

        <div class="logo-area">
          <div class="logo-glow-bg"></div>
          <div class="shield-logo">
            <div class="shield-inner">
              <i class="fas fa-chart-line"></i>
            </div>
          </div>
          <div class="orbit-ring ring-1"></div>
          <div class="orbit-ring ring-2"></div>
        </div>

        <h1 class="brand-name">FinVanguard</h1>
        <p class="brand-tagline">Gestion financiera inteligente</p>

        <div *ngIf="mensajeSesionExpirada" class="alert alert-warning session-alert">
          <div class="alert-icon-wrap">
            <i class="fas fa-clock"></i>
          </div>
          <div class="alert-body">
            <strong>Sesion expirada</strong>
            <span>Tu sesion ha caducado. Por favor, inicia sesion nuevamente.</span>
          </div>
        </div>

        <div *ngIf="mensaje && !mensajeSesionExpirada" [class]="esError ? 'alert alert-error' : 'alert alert-success'">
          <i [class]="esError ? 'fas fa-exclamation-circle' : 'fas fa-check-circle'"></i>
          <span>{{ mensaje }}</span>
        </div>

        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-envelope"></i>
            Correo Electronico
          </label>
          <div class="input-wrapper">
            <input
              type="email"
              [(ngModel)]="email"
              placeholder="admin@kinal.org"
              class="form-input"
              (keyup.enter)="iniciarSesion()"
            >
            <div class="input-focus-line"></div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-lock"></i>
            Contrasena
          </label>
          <div class="input-wrapper">
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="password"
              placeholder="••••••••"
              class="form-input"
              (keyup.enter)="iniciarSesion()"
            >
            <button type="button" class="toggle-pw" (click)="showPassword = !showPassword">
              <i [class]="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
            <div class="input-focus-line"></div>
          </div>
        </div>

        <button
          (click)="iniciarSesion()"
          [disabled]="cargando"
          class="btn-primary"
          [class.loading]="cargando"
        >
          <span *ngIf="!cargando" class="btn-content">
            <span>Iniciar Sesion</span>
            <i class="fas fa-arrow-right"></i>
          </span>
          <span *ngIf="cargando" class="btn-content">
            <div class="spinner"></div>
            <span>Autenticando...</span>
          </span>
        </button>

        <div class="quick-actions">
          <button (click)="cargarAdmin()" class="quick-btn">
            <i class="fas fa-user-shield"></i>
            Admin
          </button>
          <button (click)="cargarUsuario()" class="quick-btn">
            <i class="fas fa-user"></i>
            Usuario
          </button>
        </div>

        <div class="card-footer">
          <div class="footer-line"></div>
          <p class="footer-label">
            <i class="fas fa-shield-alt"></i>
            Protegido por JWT
          </p>
        </div>
      </div>
    </div>

    <!-- ========== DASHBOARD ========== -->
    <div *ngIf="logueado" class="login-page">
      <div class="bg-grid"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>

      <div class="login-card dashboard-card">
        <div class="logo-area">
          <div class="logo-glow-bg success-glow"></div>
          <div class="shield-logo success-logo">
            <div class="shield-inner">
              <i class="fas fa-check"></i>
            </div>
          </div>
        </div>

        <h1 class="brand-name">Bienvenido</h1>
        <p class="brand-tagline">{{ usuario?.fullName }}</p>

        <div class="user-card">
          <div class="user-row">
            <div class="user-row-icon"><i class="fas fa-user"></i></div>
            <div class="user-row-data">
              <span class="user-row-label">Nombre</span>
              <span class="user-row-value">{{ usuario?.fullName }}</span>
            </div>
          </div>
          <div class="user-row">
            <div class="user-row-icon"><i class="fas fa-envelope"></i></div>
            <div class="user-row-data">
              <span class="user-row-label">Correo</span>
              <span class="user-row-value">{{ usuario?.email }}</span>
            </div>
          </div>
          <div class="user-row">
            <div class="user-row-icon"><i class="fas fa-id-badge"></i></div>
            <div class="user-row-data">
              <span class="user-row-label">Rol</span>
              <span class="user-row-value role-badge">{{ usuario?.role }}</span>
            </div>
          </div>
        </div>

        <div class="session-timer" *ngIf="tokenExpiryTime">
          <i class="fas fa-hourglass-half"></i>
          <span>Sesion expira en: <strong>{{ tiempoRestante }}</strong></span>
        </div>

        <button (click)="cerrarSesion()" class="btn-logout">
          <i class="fas fa-sign-out-alt"></i>
          <span>Cerrar Sesion</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    /* ================================================================
       FinVanguard Design System
       Palette:
         Navy:    #0F2A4A
         Cobalt:  #1F4E79
         Emerald: #16A085 / #1ABC9C
         Ice:     #EBF3F9 / #FFFFFF
    ================================================================ */

    /* ========== KEYFRAMES ========== */
    @keyframes gradient-rotate {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes slide-in {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes float-particle {
      0%   { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
      15%  { opacity: 1; transform: scale(1); }
      85%  { opacity: 0.8; }
      100% { transform: translateY(-100vh) translateX(var(--drift)) scale(0.3); opacity: 0; }
    }

    @keyframes orb-move {
      0%   { transform: translate(0, 0) scale(1); }
      33%  { transform: translate(40px, -40px) scale(1.08); }
      66%  { transform: translate(-30px, 30px) scale(0.92); }
      100% { transform: translate(0, 0) scale(1); }
    }

    @keyframes pulse-ring {
      0%   { transform: scale(1) rotate(0deg); opacity: 0.6; }
      50%  { transform: scale(1.12) rotate(180deg); opacity: 0.2; }
      100% { transform: scale(1) rotate(360deg); opacity: 0.6; }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    @keyframes shake-alert {
      0%, 100% { transform: translateX(0); }
      15% { transform: translateX(-6px); }
      30% { transform: translateX(5px); }
      45% { transform: translateX(-4px); }
      60% { transform: translateX(3px); }
      75% { transform: translateX(-2px); }
    }

    @keyframes btn-shimmer {
      0%   { left: -100%; }
      100% { left: 200%; }
    }

    @keyframes tick {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.5; }
    }

    @keyframes border-dance {
      0%   { background-position: 0% 0%; }
      100% { background-position: 200% 0%; }
    }

    /* ========== PAGE ========== */
    .login-page {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(160deg, #060e18 0%, #0F2A4A 40%, #0a1c30 70%, #060e18 100%);
      padding: 20px;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      position: relative;
      overflow: hidden;
    }

    .bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(22, 160, 133, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(22, 160, 133, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
    }

    /* ========== PARTICLES ========== */
    .bg-particles {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      bottom: -10px;
      border-radius: 50%;
      animation: float-particle linear infinite;
    }

    .p1 { width: 4px; height: 4px; background: rgba(26, 188, 156, 0.7); left: 8%;  --drift: 60px;  animation-duration: 14s; animation-delay: 0s; }
    .p2 { width: 3px; height: 3px; background: rgba(31, 78, 121, 0.8);  left: 18%; --drift: -40px; animation-duration: 18s; animation-delay: 2s; }
    .p3 { width: 5px; height: 5px; background: rgba(22, 160, 133, 0.6); left: 32%; --drift: 50px;  animation-duration: 12s; animation-delay: 1s; }
    .p4 { width: 3px; height: 3px; background: rgba(235, 243, 249, 0.4); left: 48%; --drift: -30px; animation-duration: 20s; animation-delay: 4s; }
    .p5 { width: 6px; height: 6px; background: rgba(26, 188, 156, 0.5); left: 60%; --drift: 45px;  animation-duration: 16s; animation-delay: 0.5s; }
    .p6 { width: 3px; height: 3px; background: rgba(31, 78, 121, 0.6);  left: 72%; --drift: -55px; animation-duration: 22s; animation-delay: 3s; }
    .p7 { width: 4px; height: 4px; background: rgba(22, 160, 133, 0.5); left: 85%; --drift: 35px;  animation-duration: 15s; animation-delay: 5s; }
    .p8 { width: 3px; height: 3px; background: rgba(235, 243, 249, 0.3); left: 55%; --drift: -25px; animation-duration: 19s; animation-delay: 6s; }

    /* ========== ORBS ========== */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      pointer-events: none;
      animation: orb-move 25s ease-in-out infinite;
    }

    .orb-1 {
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(22, 160, 133, 0.12), transparent 70%);
      top: -150px; right: -150px;
      animation-delay: 0s;
    }

    .orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(31, 78, 121, 0.15), transparent 70%);
      bottom: -120px; left: -100px;
      animation-delay: -8s;
    }

    .orb-3 {
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(15, 42, 74, 0.2), transparent 70%);
      top: 40%; left: 40%;
      animation-delay: -16s;
    }

    /* ========== CARD ========== */
    .login-card {
      background: rgba(15, 42, 74, 0.45);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-radius: 28px;
      padding: 50px 42px;
      width: 100%;
      max-width: 430px;
      border: 1px solid rgba(26, 188, 156, 0.08);
      box-shadow:
        0 0 0 1px rgba(235, 243, 249, 0.03),
        0 8px 32px rgba(0, 0, 0, 0.4),
        0 2px 8px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(235, 243, 249, 0.04);
      position: relative;
      z-index: 10;
      animation: slide-in 0.9s cubic-bezier(0.22, 1, 0.36, 1);
      overflow: hidden;
    }

    .card-border-glow {
      position: absolute;
      top: 0;
      left: -100%;
      width: 200%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(26, 188, 156, 0.5), rgba(31, 78, 121, 0.5), transparent);
      animation: border-dance 4s linear infinite;
    }

    .dashboard-card {
      text-align: center;
    }

    /* ========== LOGO ========== */
    .logo-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 24px;
      position: relative;
      height: 100px;
    }

    .logo-glow-bg {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(26, 188, 156, 0.35), rgba(31, 78, 121, 0.35));
      filter: blur(22px);
      animation: pulse-ring 4s ease-in-out infinite;
    }

    .success-glow {
      background: linear-gradient(135deg, rgba(26, 188, 156, 0.4), rgba(22, 160, 133, 0.3)) !important;
    }

    .shield-logo {
      width: 78px;
      height: 78px;
      background: linear-gradient(135deg, #1ABC9C, #1F4E79, #0F2A4A);
      background-size: 200% 200%;
      animation: gradient-rotate 5s ease infinite;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      box-shadow:
        0 0 24px rgba(26, 188, 156, 0.25),
        0 0 48px rgba(31, 78, 121, 0.12),
        0 10px 20px rgba(0, 0, 0, 0.3);
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .shield-logo:hover {
      transform: scale(1.08) rotate(3deg);
    }

    .success-logo {
      background: linear-gradient(135deg, #1ABC9C, #16A085);
      background-size: 200% 200%;
    }

    .shield-inner {
      font-size: 30px;
      color: #EBF3F9;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .orbit-ring {
      position: absolute;
      border-radius: 22px;
      border: 1.5px solid;
      animation: pulse-ring 5s ease-in-out infinite;
      z-index: 1;
    }

    .ring-1 {
      width: 94px; height: 94px;
      border-color: rgba(26, 188, 156, 0.2);
      animation-delay: 0s;
    }

    .ring-2 {
      width: 112px; height: 112px;
      border-color: rgba(31, 78, 121, 0.12);
      animation-delay: -2.5s;
    }

    /* ========== TEXT ========== */
    .brand-name {
      font-size: 28px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 4px;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, #EBF3F9 30%, #1ABC9C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand-tagline {
      color: rgba(235, 243, 249, 0.35);
      font-size: 13px;
      text-align: center;
      margin-bottom: 36px;
      letter-spacing: 0.5px;
      font-weight: 400;
    }

    /* ========== ALERTS ========== */
    .alert {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 13px;
      margin-bottom: 20px;
      animation: slide-in 0.4s ease-out;
      border: 1px solid;
    }

    .alert i {
      font-size: 16px;
      flex-shrink: 0;
    }

    .alert-error {
      background: rgba(231, 76, 60, 0.08);
      color: #e74c3c;
      border-color: rgba(231, 76, 60, 0.15);
    }

    .alert-success {
      background: rgba(26, 188, 156, 0.08);
      color: #1ABC9C;
      border-color: rgba(26, 188, 156, 0.15);
    }

    .session-alert {
      background: rgba(243, 156, 18, 0.08);
      color: #f39c12;
      border-color: rgba(243, 156, 18, 0.2);
      flex-direction: column;
      text-align: center;
      gap: 8px;
      padding: 18px 16px;
      animation: shake-alert 0.6s ease-in-out;
    }

    .alert-icon-wrap {
      font-size: 32px;
      animation: tick 2s ease-in-out infinite;
    }

    .alert-body {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .alert-body strong {
      font-size: 15px;
      font-weight: 600;
    }

    .alert-body span {
      font-size: 12px;
      opacity: 0.8;
    }

    /* ========== FORM ========== */
    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(235, 243, 249, 0.5);
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 8px;
      letter-spacing: 0.3px;
    }

    .form-label i {
      font-size: 11px;
      color: rgba(26, 188, 156, 0.6);
    }

    .input-wrapper {
      position: relative;
    }

    .form-input {
      width: 100%;
      padding: 14px 16px;
      background: rgba(15, 42, 74, 0.5);
      border: 1.5px solid rgba(235, 243, 249, 0.06);
      border-radius: 14px;
      color: #EBF3F9;
      font-size: 15px;
      font-family: inherit;
      outline: none;
      transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      box-sizing: border-box;
    }

    .form-input::placeholder {
      color: rgba(235, 243, 249, 0.18);
    }

    .form-input:focus {
      border-color: rgba(26, 188, 156, 0.45);
      background: rgba(15, 42, 74, 0.7);
      box-shadow: 0 0 0 3px rgba(26, 188, 156, 0.06), 0 0 24px rgba(26, 188, 156, 0.04);
    }

    .input-focus-line {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #1ABC9C, #1F4E79);
      border-radius: 0 0 14px 14px;
      transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      transform: translateX(-50%);
    }

    .form-input:focus ~ .input-focus-line {
      width: 100%;
    }

    .toggle-pw {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: rgba(235, 243, 249, 0.25);
      cursor: pointer;
      padding: 4px;
      font-size: 14px;
      transition: color 0.25s ease;
    }

    .toggle-pw:hover {
      color: rgba(26, 188, 156, 0.8);
    }

    /* ========== BUTTONS ========== */
    .btn-primary {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 14px;
      background: linear-gradient(135deg, #1ABC9C, #16A085, #1F4E79);
      background-size: 200% 200%;
      animation: gradient-rotate 4s ease infinite;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      position: relative;
      overflow: hidden;
      margin-top: 6px;
      letter-spacing: 0.3px;
    }

    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(235, 243, 249, 0.18), transparent);
    }

    .btn-primary:hover:not(:disabled)::before {
      animation: btn-shimmer 0.7s ease-out;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow:
        0 8px 28px rgba(26, 188, 156, 0.3),
        0 4px 12px rgba(31, 78, 121, 0.2);
    }

    .btn-primary:active:not(:disabled) {
      transform: translateY(0);
    }

    .btn-primary:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .btn-primary.loading {
      background: rgba(15, 42, 74, 0.6);
      border: 1.5px solid rgba(26, 188, 156, 0.2);
    }

    .btn-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(235, 243, 249, 0.15);
      border-top-color: #1ABC9C;
      border-radius: 50%;
      animation: spin 0.75s linear infinite;
    }

    /* ========== QUICK FILL ========== */
    .quick-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 20px;
    }

    .quick-btn {
      padding: 8px 20px;
      border-radius: 9999px;
      border: 1px solid rgba(235, 243, 249, 0.06);
      background: rgba(15, 42, 74, 0.3);
      color: rgba(235, 243, 249, 0.4);
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      font-family: inherit;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      letter-spacing: 0.2px;
    }

    .quick-btn:hover {
      background: rgba(26, 188, 156, 0.1);
      border-color: rgba(26, 188, 156, 0.25);
      color: #1ABC9C;
      transform: translateY(-1px);
    }

    .quick-btn i {
      font-size: 10px;
    }

    /* ========== CARD FOOTER ========== */
    .card-footer {
      margin-top: 28px;
    }

    .footer-line {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(26, 188, 156, 0.12), transparent);
      margin-bottom: 16px;
    }

    .footer-label {
      font-size: 11px;
      color: rgba(235, 243, 249, 0.18);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      letter-spacing: 0.3px;
    }

    .footer-label i {
      font-size: 10px;
      color: rgba(26, 188, 156, 0.3);
    }

    /* ========== USER CARD (Dashboard) ========== */
    .user-card {
      background: rgba(15, 42, 74, 0.4);
      border: 1px solid rgba(235, 243, 249, 0.05);
      border-radius: 16px;
      padding: 8px;
      margin: 28px 0 20px;
    }

    .user-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      border-radius: 12px;
      transition: background 0.2s ease;
    }

    .user-row:hover {
      background: rgba(26, 188, 156, 0.04);
    }

    .user-row:not(:last-child) {
      border-bottom: 1px solid rgba(235, 243, 249, 0.04);
    }

    .user-row-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, rgba(26, 188, 156, 0.12), rgba(31, 78, 121, 0.12));
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .user-row-icon i {
      font-size: 13px;
      color: #1ABC9C;
    }

    .user-row-data {
      display: flex;
      flex-direction: column;
      gap: 1px;
      text-align: left;
    }

    .user-row-label {
      font-size: 11px;
      color: rgba(235, 243, 249, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }

    .user-row-value {
      font-size: 14px;
      color: #EBF3F9;
      font-weight: 500;
    }

    .role-badge {
      display: inline-block;
      padding: 2px 10px;
      background: rgba(26, 188, 156, 0.12);
      border: 1px solid rgba(26, 188, 156, 0.2);
      border-radius: 6px;
      color: #1ABC9C !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      letter-spacing: 0.5px;
    }

    /* ========== SESSION TIMER ========== */
    .session-timer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 11px 16px;
      background: rgba(243, 156, 18, 0.06);
      border: 1px solid rgba(243, 156, 18, 0.12);
      border-radius: 12px;
      margin-bottom: 16px;
      font-size: 13px;
      color: rgba(243, 156, 18, 0.75);
      animation: tick 2.5s ease-in-out infinite;
    }

    .session-timer strong {
      color: #f39c12;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    .session-timer i {
      font-size: 12px;
    }

    /* ========== LOGOUT ========== */
    .btn-logout {
      width: 100%;
      padding: 14px;
      border: 1.5px solid rgba(231, 76, 60, 0.2);
      border-radius: 14px;
      background: rgba(231, 76, 60, 0.05);
      color: #e74c3c;
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .btn-logout:hover {
      background: rgba(231, 76, 60, 0.1);
      border-color: rgba(231, 76, 60, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(231, 76, 60, 0.12);
    }

    .btn-logout:active {
      transform: translateY(0);
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 480px) {
      .login-card {
        padding: 38px 26px;
        border-radius: 22px;
      }
      .brand-name {
        font-size: 24px;
      }
    }
  `]
})
export class AppComponent {
  email: string = '';
  password: string = '';
  cargando: boolean = false;
  mensaje: string = '';
  esError: boolean = false;
  logueado: boolean = false;
  usuario: any = null;
  showPassword: boolean = false;
  mensajeSesionExpirada: boolean = false;
  private tokenTimer: any = null;
  tokenExpiryTime: number | null = null;
  tiempoRestante: string = '';
  private countdownTimer: any = null;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('APP INICIADA');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.logueado = false;
    this.usuario = null;
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }

  private programarExpiracion(token: string) {
    if (this.tokenTimer) clearTimeout(this.tokenTimer);
    if (this.countdownTimer) clearInterval(this.countdownTimer);

    const decoded = this.decodeToken(token);
    if (decoded && decoded.exp) {
      this.tokenExpiryTime = decoded.exp * 1000;
      const expMs = this.tokenExpiryTime - Date.now();

      if (expMs <= 0) {
        this.cerrarSesion(true);
        return;
      }

      console.log('Token expira en', Math.round(expMs / 1000), 'segundos');

      this.tokenTimer = setTimeout(() => {
        this.cerrarSesion(true);
      }, expMs);

      this.countdownTimer = setInterval(() => {
        this.actualizarTiempoRestante();
        this.cdr.detectChanges();
      }, 1000);
    }
  }

  private actualizarTiempoRestante() {
    if (!this.tokenExpiryTime) return;
    const restante = Math.max(0, this.tokenExpiryTime - Date.now());
    const segundos = Math.floor(restante / 1000);
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    this.tiempoRestante = `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  cargarAdmin() {
    this.email = 'admin@kinal.org';
    this.password = 'Admin123!';
    this.mensaje = '';
    this.esError = false;
    this.mensajeSesionExpirada = false;
  }

  cargarUsuario() {
    this.email = 'usuario@kinal.org';
    this.password = 'User123!';
    this.mensaje = '';
    this.esError = false;
    this.mensajeSesionExpirada = false;
  }

  async iniciarSesion() {
    if (!this.email || !this.password) {
      this.mensaje = 'Completa todos los campos';
      this.esError = true;
      this.mensajeSesionExpirada = false;
      this.cdr.detectChanges();
      return;
    }

    this.cargando = true;
    this.mensaje = '';
    this.esError = false;
    this.mensajeSesionExpirada = false;
    this.cdr.detectChanges();

    try {
      const respuesta = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      });

      const datos = await respuesta.json();
      this.cargando = false;

      if (datos && datos.success) {
        localStorage.setItem('token', datos.data.token);
        localStorage.setItem('user', JSON.stringify(datos.data.user));

        this.logueado = true;
        this.usuario = datos.data.user;
        this.mensaje = '';
        this.email = '';
        this.password = '';
        this.mensajeSesionExpirada = false;

        this.cdr.detectChanges();
        this.programarExpiracion(datos.data.token);
      } else {
        this.mensaje = datos?.message || 'Error al iniciar sesion';
        this.esError = true;
        this.cdr.detectChanges();
      }
    } catch (error) {
      console.error('Error:', error);
      this.cargando = false;
      this.mensaje = 'Error de conexion con el servidor';
      this.esError = true;
      this.cdr.detectChanges();
    }
  }

  cerrarSesion(sesionExpirada: boolean = false) {
    if (this.tokenTimer) { clearTimeout(this.tokenTimer); this.tokenTimer = null; }
    if (this.countdownTimer) { clearInterval(this.countdownTimer); this.countdownTimer = null; }

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.logueado = false;
    this.usuario = null;
    this.email = '';
    this.password = '';
    this.esError = false;
    this.tokenExpiryTime = null;
    this.tiempoRestante = '';
    this.mensajeSesionExpirada = sesionExpirada;
    this.mensaje = '';
    this.cdr.detectChanges();
  }
}
