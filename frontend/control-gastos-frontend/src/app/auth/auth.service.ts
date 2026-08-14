import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log(' Enviando login:', { email, password });
    
    return this.http.post(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap({
          next: (response: any) => {
            console.log('📥 Respuesta completa:', response);
            
            if (response && response.success) {
              const { user, token } = response.data;
              localStorage.setItem('token', token);
              localStorage.setItem('user', JSON.stringify(user));
              this.currentUserSubject.next(user);
              console.log(' Login exitoso, token guardado');
            } else {
              console.error(' Respuesta sin success:', response);
            }
          },
          error: (error) => {
            console.error(' Error en petición:', error);
          }
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    console.log(' Sesión cerrada');
  }
}