import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-layout">
      <!-- ===== SIDEBAR ===== -->
      <aside class="sidebar">
        <div class="sidebar-top">
          <div class="sidebar-logo">
            <img src="assets/logo.png" alt="FinVanguard" class="sidebar-logo-img">
          </div>
          <nav class="sidebar-menu">
            <button class="sidebar-icon active" title="Tarjeta de credito">
              <i class="fas fa-credit-card"></i>
            </button>
            <button class="sidebar-icon" title="Banco">
              <i class="fas fa-university"></i>
            </button>
            <button class="sidebar-icon" title="Transferencia">
              <i class="fas fa-exchange-alt"></i>
            </button>
            <button class="sidebar-icon" title="Alcancia">
              <i class="fas fa-piggy-bank"></i>
            </button>
          </nav>
        </div>
        <button class="sidebar-icon sidebar-settings" title="Configuracion">
          <i class="fas fa-cog"></i>
        </button>
      </aside>

      <!-- ===== CONTENT ===== -->
      <div class="content">
        <!-- HEADER -->
        <header class="header">
          <div class="search-box">
            <i class="fas fa-search search-icon"></i>
            <input type="text" placeholder="Buscar..." class="search-input">
          </div>
          <div class="header-right">
            <button class="header-action" title="Notificaciones">
              <i class="fas fa-bell"></i>
            </button>
            <button class="header-action" title="Mensajes">
              <i class="fas fa-envelope"></i>
            </button>
            <div class="profile">
              <div class="profile-photo">
                <i class="fas fa-user"></i>
              </div>
              <div class="profile-text">
                <span class="profile-greeting">Hola</span>
                <span class="profile-name">Pedro Armas</span>
              </div>
            </div>
          </div>
        </header>

        <!-- DASHBOARD BODY -->
        <main class="dashboard">
          <!-- TITLE ROW -->
          <div class="title-row">
            <div class="title-left">
              <h1 class="main-title">FinVanguard</h1>
              <p class="main-subtitle">Controlamos tus gastos</p>
            </div>
            <div class="title-right">
              <button class="acceso-btn" (click)="menuAbierto = !menuAbierto">
                <span>Acceso Rapido</span>
                <i class="fas fa-chevron-down" [class.rotated]="menuAbierto"></i>
              </button>
              <div class="acceso-menu" *ngIf="menuAbierto">
                <button class="menu-item" (click)="menuAbierto = false"><i class="fas fa-plus-circle"></i> Agregar Gasto</button>
                <button class="menu-item" (click)="menuAbierto = false"><i class="fas fa-arrow-down"></i> Ingresos</button>
                <button class="menu-item" (click)="menuAbierto = false"><i class="fas fa-file-alt"></i> Reportes Mensuales</button>
                <button class="menu-item" (click)="menuAbierto = false"><i class="fas fa-bullseye"></i> Metas de Ahorro</button>
                <button class="menu-item" (click)="menuAbierto = false"><i class="fas fa-exclamation-triangle"></i> Alertas</button>
              </div>
            </div>
          </div>

          <!-- 3-COLUMN GRID -->
          <div class="cards-grid">

            <!-- ========== COL 1 ========== -->
            <div class="col col-1">
              <!-- TOTAL BALANCE -->
              <div class="card balance-card">
                <div class="card-header">
                  <span class="card-label">Total Balance</span>
                  <div class="card-icon yellow-circle">
                    <i class="fas fa-shopping-bag"></i>
                  </div>
                </div>
                <p class="card-amount green">Q12,580.45</p>

                <div class="balance-row">
                  <div class="row-icon"><i class="fas fa-arrow-circle-down"></i></div>
                  <span class="row-label">Dinero disponible</span>
                  <span class="row-value">$ 5,240.10</span>
                </div>
                <div class="balance-row">
                  <div class="row-icon"><i class="fas fa-arrow-circle-down"></i></div>
                  <span class="row-label">Dinero Guardado</span>
                  <span class="row-value">$ 6,800.00</span>
                </div>
              </div>

              <!-- TOTAL GASTADO -->
              <div class="card gastado-card">
                <div class="card-header">
                  <span class="card-label">Total gastado en el mes actual</span>
                </div>
                <p class="card-amount green">Q540.35</p>

                <!-- LINE CHART -->
                <svg class="line-chart" viewBox="0 0 320 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#D4FF00" stop-opacity="0.3"/>
                      <stop offset="100%" stop-color="#D4FF00" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,55 20,48 40,52 60,30 80,35 100,18 120,22 140,12 160,28 180,20 200,38 220,32 240,45 260,40 280,50 300,42 320,38" fill="none" stroke="#D4FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0,55 20,48 40,52 60,30 80,35 100,18 120,22 140,12 160,28 180,20 200,38 220,32 240,45 260,40 280,50 300,42 320,38 L320,80 L0,80 Z" fill="url(#lineGrad)"/>
                </svg>
              </div>
            </div>

            <!-- ========== COL 2 ========== -->
            <div class="col col-2">
              <div class="card gastos-card">
                <div class="card-header">
                  <span class="card-label">Gastos Mensuales</span>
                </div>
                <p class="card-amount green">Q2,340</p>

                <!-- BAR CHART -->
                <div class="bar-chart-area">
                  <div class="y-axis">
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                  </div>
                  <div class="bars-container">
                    <div class="bar-group">
                      <div class="bar green-bar" style="height:75%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">01</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar dark-bar" style="height:40%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">02</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar green-bar" style="height:90%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">03</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar dark-bar" style="height:30%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">04</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar green-bar" style="height:55%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">05</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ========== COL 3 ========== -->
            <div class="col col-3">
              <div class="card cartera-card">
                <div class="card-header">
                  <span class="card-label">Valor de Cartera</span>
                </div>

                <!-- GAUGE / TACOMETRO -->
                <div class="gauge-wrap">
                  <svg class="gauge" viewBox="0 0 200 120">
                    <!-- Background arc -->
                    <path d="M20,100 A80,80 0 0,1 180,100" fill="none" stroke="#1F2430" stroke-width="14" stroke-linecap="round"/>
                    <!-- Colored arc (yellow) -->
                    <path d="M20,100 A80,80 0 0,1 140,32" fill="none" stroke="#D4FF00" stroke-width="14" stroke-linecap="round"/>
                    <!-- Needle -->
                    <line x1="100" y1="100" x2="135" y2="48" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="100" cy="100" r="6" fill="#FFFFFF"/>
                    <!-- Tick marks -->
                    <circle cx="28" cy="92" r="2.5" fill="#A0AABC"/>
                    <circle cx="52" cy="58" r="2.5" fill="#A0AABC"/>
                    <circle cx="100" cy="36" r="2.5" fill="#A0AABC"/>
                    <circle cx="148" cy="58" r="2.5" fill="#A0AABC"/>
                    <circle cx="172" cy="92" r="2.5" fill="#A0AABC"/>
                  </svg>
                </div>

                <p class="card-amount green">Q540.35</p>

                <div class="categories">
                  <div class="category-row">
                    <span class="cat-dot blue"></span>
                    <span class="cat-name">Shopping</span>
                    <span class="cat-amount red">($540)</span>
                  </div>
                  <div class="category-row">
                    <span class="cat-dot green"></span>
                    <span class="cat-name">Transport</span>
                    <span class="cat-amount red">($280)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    /* ============================
       APP LAYOUT
    ============================ */
    :host {
      display: block;
      height: 100vh;
      overflow: hidden;
    }

    .app-layout {
      display: grid;
      grid-template-columns: 90px 1fr;
      height: 100vh;
      background: #0B132B;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      color: #FFFFFF;
      overflow: hidden;
    }

    /* ============================
       SIDEBAR
    ============================ */
    .sidebar {
      background: #121212;
      border-radius: 0 20px 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      z-index: 10;
    }

    .sidebar-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      width: 100%;
    }

    .sidebar-logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .sidebar-logo-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: transparent !important;
      mix-blend-mode: multiply;
    }

    .sidebar-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .sidebar-icon {
      width: 42px;
      height: 42px;
      border: none;
      border-radius: 12px;
      background: transparent;
      color: #A0AABC;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .sidebar-icon:hover {
      background: rgba(255,255,255,0.06);
      color: #FFFFFF;
    }

    .sidebar-icon.active {
      background: rgba(0,230,118,0.1);
      color: #00E676;
    }

    .sidebar-settings {
      margin-top: auto;
    }

    /* ============================
       CONTENT AREA
    ============================ */
    .content {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 0;
    }

    /* ============================
       HEADER
    ============================ */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 28px;
      flex-shrink: 0;
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #1F2430;
      border-radius: 20px;
      padding: 10px 18px;
      width: 280px;
    }

    .search-icon {
      color: #A0AABC;
      font-size: 13px;
    }

    .search-input {
      background: transparent;
      border: none;
      outline: none;
      color: #FFFFFF;
      font-size: 13px;
      font-family: inherit;
      width: 100%;
    }

    .search-input::placeholder {
      color: #A0AABC;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .header-action {
      width: 38px;
      height: 38px;
      border: none;
      border-radius: 10px;
      background: rgba(255,255,255,0.05);
      color: #A0AABC;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .header-action:hover {
      background: rgba(255,255,255,0.1);
      color: #FFFFFF;
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 6px;
    }

    .profile-photo {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #1F2430;
      color: #A0AABC;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      overflow: hidden;
    }

    .profile-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .profile-greeting {
      font-size: 12px;
      color: #A0AABC;
    }

    .profile-name {
      font-size: 13px;
      font-weight: 700;
      color: #00E676;
    }

    /* ============================
       DASHBOARD
    ============================ */
    .dashboard {
      flex: 1;
      padding: 0 28px 24px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    /* TITLE ROW */
    .title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 22px;
      position: relative;
    }

    .main-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #00E676;
      margin: 0;
      line-height: 1.1;
    }

    .main-subtitle {
      font-size: 15px;
      color: #A0AABC;
      margin: 4px 0 0;
    }

    .title-right {
      position: relative;
    }

    .acceso-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border: none;
      border-radius: 14px;
      background: #121212;
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .acceso-btn:hover {
      background: #1a1a1a;
    }

    .acceso-btn .fa-chevron-down {
      font-size: 10px;
      transition: transform 0.3s ease;
    }

    .acceso-btn .fa-chevron-down.rotated {
      transform: rotate(180deg);
    }

    .acceso-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      background: #181818;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 6px;
      min-width: 210px;
      z-index: 20;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }

    .menu-item {
      width: 100%;
      padding: 11px 14px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.2s ease;
      text-align: left;
    }

    .menu-item:hover {
      background: rgba(255,255,255,0.05);
    }

    .menu-item i {
      color: #00E676;
      width: 16px;
      text-align: center;
      font-size: 13px;
    }

    .menu-item:not(:last-child) {
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }

    /* ============================
       CARDS GRID
    ============================ */
    .cards-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr;
      gap: 18px;
      flex: 1;
    }

    .card {
      background: #121212;
      border-radius: 16px;
      padding: 22px;
      display: flex;
      flex-direction: column;
    }

    .card-label {
      font-size: 13px;
      color: #A0AABC;
      font-weight: 500;
    }

    .card-amount {
      font-size: 28px;
      font-weight: 800;
      margin: 8px 0 0;
    }

    .card-amount.green {
      color: #00E676;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .card-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
    }

    .card-icon.yellow-circle {
      background: #D4FF00;
      color: #0B132B;
    }

    /* ============================
       COL 1 — BALANCE + GASTADO
    ============================ */
    .col-1 {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .balance-card {
      flex: 1;
    }

    .balance-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .balance-row:last-child {
      border-bottom: none;
    }

    .row-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
      color: #A0AABC;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
    }

    .row-label {
      flex: 1;
      font-size: 13px;
      color: #A0AABC;
    }

    .row-value {
      font-size: 14px;
      font-weight: 700;
      color: #00E676;
    }

    .gastado-card {
      flex: 1;
    }

    .line-chart {
      width: 100%;
      height: 60px;
      margin-top: 12px;
    }

    /* ============================
       COL 2 — GASTOS MENSUALES
    ============================ */
    .gastos-card {
      height: 100%;
    }

    .bar-chart-area {
      display: flex;
      gap: 10px;
      flex: 1;
      margin-top: 16px;
      align-items: flex-end;
    }

    .y-axis {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 24px;
      flex-shrink: 0;
    }

    .y-axis span {
      font-size: 11px;
      color: #A0AABC;
      text-align: right;
      width: 20px;
    }

    .bars-container {
      display: flex;
      align-items: flex-end;
      gap: 14px;
      flex: 1;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      height: 100%;
      min-height: 150px;
    }

    .bar-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      height: 100%;
      justify-content: flex-end;
    }

    .bar {
      width: 100%;
      max-width: 40px;
      border-radius: 10px 10px 4px 4px;
      transition: height 0.5s ease;
    }

    .bar-top {
      width: 100%;
      height: 6px;
      border-radius: 10px 10px 0 0;
    }

    .green-bar {
      background: #00D285;
    }

    .green-bar .bar-top {
      background: #00E676;
    }

    .dark-bar {
      background: #1F2430;
    }

    .dark-bar .bar-top {
      background: #2A3040;
    }

    .bar-label {
      font-size: 11px;
      color: #A0AABC;
    }

    /* ============================
       COL 3 — VALOR DE CARTERA
    ============================ */
    .cartera-card {
      justify-content: flex-start;
    }

    .gauge-wrap {
      display: flex;
      justify-content: center;
      margin: 8px 0;
    }

    .gauge {
      width: 170px;
      height: 100px;
    }

    .categories {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 12px;
    }

    .category-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      background: rgba(255,255,255,0.03);
      border-radius: 10px;
    }

    .cat-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cat-dot.blue {
      background: #3498DB;
    }

    .cat-dot.green {
      background: #00E676;
    }

    .cat-name {
      flex: 1;
      font-size: 13px;
      color: #FFFFFF;
    }

    .cat-amount {
      font-size: 13px;
      font-weight: 600;
    }

    .cat-amount.green {
      color: #00E676;
    }

    .cat-amount.red {
      color: #E74C3C;
    }

    /* ============================
       RESPONSIVE
    ============================ */
    @media (max-width: 1100px) {
      .cards-grid {
        grid-template-columns: 1fr 1fr;
      }
      .col-3 {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 768px) {
      .app-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        display: none;
      }

      .cards-grid {
        grid-template-columns: 1fr;
      }

      .header {
        padding: 14px 16px;
      }

      .search-box {
        width: 180px;
      }

      .profile-text {
        display: none;
      }

      .main-title {
        font-size: 1.8rem;
      }
    }
  `]
})
export class DashboardComponent {
  menuAbierto = false;

  constructor(private router: Router) {}

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
