import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Pantalla de Login -->
    <div *ngIf="!logueado" style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #0a0a1a; padding: 20px; font-family: Arial, sans-serif;">
      <div style="background: rgba(255,255,255,0.05); border-radius: 30px; padding: 50px; width: 100%; max-width: 400px; border: 1px solid rgba(0,240,255,0.2); text-align: center;">
        
        <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #00f0ff, #8b00ff); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 30px; color: white;">
          <i class="fas fa-coins"></i>
        </div>
        
        <h1 style="color: white; font-size: 28px;">Control de Gastos</h1>
        <p style="color: rgba(255,255,255,0.5); margin-bottom: 30px;">Controlamos tus gastos</p>
        
        <div *ngIf="mensaje" style="padding: 10px; border-radius: 10px; margin-bottom: 15px; background: {{ esError ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)' }}; color: {{ esError ? '#ff0040' : '#00ff88' }};">
          {{ mensaje }}
        </div>
        
        <div style="text-align: left;">
          <label style="color: rgba(255,255,255,0.7);">Correo</label>
          <input type="email" [(ngModel)]="email" placeholder="admin@kinal.org" style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; margin: 5px 0 15px;">
          
          <label style="color: rgba(255,255,255,0.7);">Contraseña</label>
          <input type="password" [(ngModel)]="password" placeholder="••••••••" style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; margin: 5px 0 15px;">
        </div>
        
        <button (click)="iniciarSesion()" [disabled]="cargando" style="width: 100%; padding: 14px; border: none; border-radius: 10px; background: linear-gradient(135deg, #00f0ff, #8b00ff); color: white; font-size: 16px; font-weight: bold; cursor: pointer;">
          {{ cargando ? 'Cargando...' : 'Iniciar Sesión' }}
        </button>
        
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
          <button (click)="cargarAdmin()" style="padding: 5px 15px; border: 1px solid rgba(0,240,255,0.3); background: transparent; color: rgba(255,255,255,0.7); border-radius: 20px; cursor: pointer;">Admin</button>
          <button (click)="cargarUsuario()" style="padding: 5px 15px; border: 1px solid rgba(0,240,255,0.3); background: transparent; color: rgba(255,255,255,0.7); border-radius: 20px; cursor: pointer;">Usuario</button>
        </div>
        
        <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
          <p style="font-size: 11px; color: rgba(255,255,255,0.2);">Sistema seguro con JWT</p>
        </div>
      </div>
    </div>

    <!-- Dashboard -->
    <div *ngIf="logueado" style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #0a0a1a; padding: 20px;">
      <div style="background: rgba(255,255,255,0.05); border-radius: 30px; padding: 50px; width: 100%; max-width: 450px; border: 1px solid rgba(0,240,255,0.2); text-align: center;">
        
        <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #00ff88, #00f0ff); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 30px; color: white;">
          <i class="fas fa-check-circle"></i>
        </div>
        
        <h1 style="color: white; font-size: 28px;">¡Bienvenido!</h1>
        
        <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 20px 0; text-align: left;">
          <p style="color: white;"><strong> Usuario:</strong> {{ usuario?.fullName }}</p>
          <p style="color: white;"><strong> Email:</strong> {{ usuario?.email }}</p>
          <p style="color: white;"><strong> Rol:</strong> {{ usuario?.role }}</p>
        </div>
        
        <button (click)="cerrarSesion()" style="width: 100%; padding: 14px; border: none; border-radius: 10px; background: linear-gradient(135deg, #ff0040, #8b00ff); color: white; font-size: 16px; font-weight: bold; cursor: pointer;">
          Cerrar Sesión
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  email: string = '';
  password: string = '';
  cargando: boolean = false;
  mensaje: string = '';
  esError: boolean = false;
  logueado: boolean = false;
  usuario: any = null;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('🚀 APP INICIADA');
    // Limpiar cualquier sesión anterior
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.logueado = false;
    this.usuario = null;
  }

  cargarAdmin() {
    this.email = 'admin@kinal.org';
    this.password = 'Admin123!';
    this.mensaje = '';
    this.esError = false;
  }

  cargarUsuario() {
    this.email = 'usuario@kinal.org';
    this.password = 'User123!';
    this.mensaje = '';
    this.esError = false;
  }

  async iniciarSesion() {
    console.log('🔐 Iniciando login...');
    
    if (!this.email || !this.password) {
      this.mensaje = '⚠️ Completa todos los campos';
      this.esError = true;
      this.cdr.detectChanges();
      return;
    }

    this.cargando = true;
    this.mensaje = '';
    this.esError = false;
    this.cdr.detectChanges();

    try {
      const respuesta = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });

      const datos = await respuesta.json();
      console.log('📥 Respuesta:', datos);

      this.cargando = false;

      if (datos && datos.success) {
        // Guardar en localStorage
        localStorage.setItem('token', datos.data.token);
        localStorage.setItem('user', JSON.stringify(datos.data.user));
        
        // ACTUALIZAR ESTADO
        this.logueado = true;
        this.usuario = datos.data.user;
        this.mensaje = ' ¡Bienvenido ' + this.usuario.fullName + '!';
        this.esError = false;
        this.email = '';
        this.password = '';
        
        console.log('Login exitoso, usuario:', this.usuario);
        console.log(' Estado actual - logueado:', this.logueado);
        
        // FORZAR ACTUALIZACIÓN DE LA VISTA
        this.cdr.detectChanges();
        
        setTimeout(() => {
          this.mensaje = '';
          this.cdr.detectChanges();
        }, 3000);
      } else {
        this.mensaje = ' ' + (datos?.message || 'Error al iniciar sesión');
        this.esError = true;
        this.cdr.detectChanges();
      }
    } catch (error) {
      console.error(' Error:', error);
      this.cargando = false;
      this.mensaje = ' Error de conexión con el servidor';
      this.esError = true;
      this.cdr.detectChanges();
    }
  }

  cerrarSesion() {
    console.log(' Cerrando sesión...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.logueado = false;
    this.usuario = null;
    this.email = '';
    this.password = '';
    this.mensaje = '';
    this.esError = false;
    this.cdr.detectChanges();
    console.log(' Sesión cerrada');
  }
}