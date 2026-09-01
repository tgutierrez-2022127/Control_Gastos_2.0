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
            <img src="assets/Logo_Fin.jpg" alt="FinVanguard" class="sidebar-logo-img">
          </div>
          <nav class="sidebar-menu">
            <button class="sidebar-icon active" title="Tarjeta de credito">
              <i class="fas fa-credit-card"></i>
            </button>
            <button class="sidebar-icon" title="Banco" (click)="irIngresos()">
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
                <span class="profile-name">Admin</span>
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
              <p class="main-subtitle">Controlamos sus gastos</p>
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
                <p class="card-amount green">Q0.00</p>

                <div class="balance-row">
                  <div class="row-icon"><i class="fas fa-arrow-circle-down"></i></div>
                  <span class="row-label">Dinero disponible</span>
                  <span class="row-value">Q 0.00</span>
                </div>
                <div class="balance-row">
                  <div class="row-icon"><i class="fas fa-arrow-circle-down"></i></div>
                  <span class="row-label">Dinero Guardado</span>
                  <span class="row-value">Q 0.00</span>
                </div>
              </div>

              <!-- TOTAL GASTADO -->
              <div class="card gastado-card">
                <div class="card-header">
                  <span class="card-label">Total gastado en el mes actual</span>
                </div>
                <p class="card-amount green">Q0.00</p>

                <!-- LINE CHART -->
                <svg class="line-chart" viewBox="0 0 320 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#D4FF00" stop-opacity="0.3"/>
                      <stop offset="100%" stop-color="#D4FF00" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,78 20,78 40,78 60,78 80,78 100,78 120,78 140,78 160,78 180,78 200,78 220,78 240,78 260,78 280,78 300,78 320,78" fill="none" stroke="#D4FF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0,78 20,78 40,78 60,78 80,78 100,78 120,78 140,78 160,78 180,78 200,78 220,78 240,78 260,78 280,78 300,78 320,78 L320,80 L0,80 Z" fill="url(#lineGrad)"/>
                </svg>
              </div>
            </div>

            <!-- ========== COL 2 ========== -->
            <div class="col col-2">
              <div class="card gastos-card">
                <div class="card-header">
                  <span class="card-label">Gastos Mensuales</span>
                </div>
                <p class="card-amount green">Q0.00</p>

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
                      <div class="bar green-bar" style="height:0%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">01</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar dark-bar" style="height:0%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">02</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar green-bar" style="height:0%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">03</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar dark-bar" style="height:0%">
                        <div class="bar-top"></div>
                      </div>
                      <span class="bar-label">04</span>
                    </div>
                    <div class="bar-group">
                      <div class="bar green-bar" style="height:0%">
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
                    <path d="M20,100 A80,80 0 0,1 22,96" fill="none" stroke="#D4FF00" stroke-width="14" stroke-linecap="round"/>
                    <!-- Needle -->
                    <line x1="100" y1="100" x2="30" y2="95" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="100" cy="100" r="6" fill="#FFFFFF"/>
                    <!-- Tick marks -->
                    <circle cx="28" cy="92" r="2.5" fill="#A0AABC"/>
                    <circle cx="52" cy="58" r="2.5" fill="#A0AABC"/>
                    <circle cx="100" cy="36" r="2.5" fill="#A0AABC"/>
                    <circle cx="148" cy="58" r="2.5" fill="#A0AABC"/>
                    <circle cx="172" cy="92" r="2.5" fill="#A0AABC"/>
                  </svg>
                </div>

                <p class="card-amount green">Q0.00</p>

                <div class="categories">
                  <div class="category-row">
                    <span class="cat-dot blue"></span>
                    <span class="cat-name">Shopping</span>
                    <span class="cat-amount red">(Q0)</span>
                  </div>
                  <div class="category-row">
                    <span class="cat-dot green"></span>
                    <span class="cat-name">Transport</span>
                    <span class="cat-amount red">(Q0)</span>
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
       KEYFRAMES
    ============================ */
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-left {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slide-right {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes bar-grow {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }

    @keyframes gauge-draw {
      from { stroke-dashoffset: 251; }
    }

    @keyframes line-draw {
      from { stroke-dashoffset: 600; }
    }

    @keyframes line-glow-pulse {
      0%, 100% { filter: drop-shadow(0 0 2px rgba(212,255,0,0.3)); }
      50% { filter: drop-shadow(0 0 8px rgba(212,255,0,0.6)); }
    }

    @keyframes needle-swing {
      0% { transform: rotate(-60deg); }
      60% { transform: rotate(5deg); }
      80% { transform: rotate(-2deg); }
      100% { transform: rotate(0deg); }
    }

    @keyframes card-border-glow {
      0%, 100% { border-color: rgba(255,255,255,0.04); }
      50% { border-color: rgba(0,230,118,0.12); }
    }

    @keyframes amount-count {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes icon-spin-in {
      from { transform: rotate(-90deg) scale(0.5); opacity: 0; }
      to { transform: rotate(0deg) scale(1); opacity: 1; }
    }

    @keyframes dot-pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,230,118,0.3); }
      50% { transform: scale(1.15); box-shadow: 0 0 0 4px rgba(0,230,118,0); }
    }

    @keyframes bar-shine {
      0% { left: -100%; }
      100% { left: 200%; }
    }

    @keyframes gauge-ring-spin {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes hud-grid-scroll {
      from { background-position: 0 0; }
      to { background-position: 60px 60px; }
    }

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
      position: relative;
    }

    .app-layout::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(22,160,133,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(22,160,133,0.02) 1px, transparent 1px);
      background-size: 60px 60px;
      animation: hud-grid-scroll 30s linear infinite;
      pointer-events: none;
      z-index: 0;
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
      animation: slide-left 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      border-right: 1px solid rgba(22,160,133,0.06);
    }

    .sidebar-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      width: 100%;
    }

    .sidebar-logo {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      background: rgba(22,160,133,0.06);
      border: 1px solid rgba(22,160,133,0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      transition: all 0.3s ease;
      animation: sidebar-hud-pulse 3s ease-in-out infinite;
    }

    @keyframes sidebar-hud-pulse {
      0%, 100% { box-shadow: 0 0 10px rgba(22,160,133,0.08); }
      50%      { box-shadow: 0 0 18px rgba(22,160,133,0.15); }
    }

    .sidebar-logo:hover {
      background: rgba(22,160,133,0.12);
      border-color: rgba(22,160,133,0.3);
      box-shadow: 0 0 25px rgba(22,160,133,0.15);
    }

    .sidebar-hud-corners {
      position: absolute;
      inset: -5px;
      pointer-events: none;
      z-index: 1;
    }

    .shc {
      position: absolute;
      width: 10px;
      height: 10px;
    }

    .shc::before,
    .shc::after {
      content: '';
      position: absolute;
      background: rgba(22,160,133,0.45);
    }

    .shc::before { width: 100%; height: 1.5px; }
    .shc::after { width: 1.5px; height: 100%; }

    .shc-tl { top: 0; left: 0; }
    .shc-tl::before { top: 0; left: 0; }
    .shc-tl::after { top: 0; left: 0; }

    .shc-tr { top: 0; right: 0; }
    .shc-tr::before { top: 0; right: 0; }
    .shc-tr::after { top: 0; right: 0; }

    .shc-bl { bottom: 0; left: 0; }
    .shc-bl::before { bottom: 0; left: 0; }
    .shc-bl::after { bottom: 0; left: 0; }

    .shc-br { bottom: 0; right: 0; }
    .shc-br::before { bottom: 0; right: 0; }
    .shc-br::after { bottom: 0; right: 0; }

    .sidebar-logo-img {
      width: 100%;
      height: 100%;
      padding: 10px;
      object-fit: contain;
      background: transparent !important;
      position: relative;
      z-index: 2;
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
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      position: relative;
      overflow: hidden;
      animation: slide-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
    }

    .sidebar-icon:nth-child(1) { animation-delay: 0.1s; }
    .sidebar-icon:nth-child(2) { animation-delay: 0.2s; }
    .sidebar-icon:nth-child(3) { animation-delay: 0.3s; }
    .sidebar-icon:nth-child(4) { animation-delay: 0.4s; }

    .sidebar-icon::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 12px;
      background: radial-gradient(circle at center, rgba(0,230,118,0.2), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .sidebar-icon:hover {
      color: #FFFFFF;
      transform: scale(1.1);
    }

    .sidebar-icon:hover::before { opacity: 1; }

    .sidebar-icon.active {
      background: rgba(0,230,118,0.1);
      color: #00E676;
    }

    .sidebar-icon.active::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background: #00E676;
      border-radius: 0 3px 3px 0;
      box-shadow: 0 0 8px rgba(0,230,118,0.5);
    }

    .sidebar-settings {
      margin-top: auto;
      animation: slide-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s backwards;
    }

    /* ============================
       CONTENT AREA
    ============================ */
    .content {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 0;
      position: relative;
      z-index: 1;
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
      animation: fade-in 0.6s ease-out 0.2s backwards;
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #1F2430;
      border-radius: 20px;
      padding: 10px 18px;
      width: 280px;
      border: 1px solid rgba(255,255,255,0.04);
      transition: all 0.3s ease;
    }

    .search-box:focus-within {
      border-color: rgba(22,160,133,0.3);
      box-shadow: 0 0 16px rgba(22,160,133,0.08);
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

    .search-input::placeholder { color: #A0AABC; }

    .header-right {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .header-action {
      width: 38px;
      height: 38px;
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 10px;
      background: rgba(255,255,255,0.05);
      color: #A0AABC;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .header-action:hover {
      background: rgba(0,230,118,0.08);
      border-color: rgba(0,230,118,0.2);
      color: #00E676;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 4px 16px rgba(0,230,118,0.12);
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
      background: linear-gradient(135deg, rgba(22,160,133,0.15), rgba(52,152,219,0.1));
      border: 1.5px solid rgba(22,160,133,0.2);
      color: #00E676;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .profile-photo:hover {
      border-color: rgba(0,230,118,0.5);
      box-shadow: 0 0 12px rgba(0,230,118,0.15);
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

    .title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 22px;
      position: relative;
      animation: slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s backwards;
    }

    .main-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #00E676;
      margin: 0;
      line-height: 1.1;
      text-shadow: 0 0 30px rgba(0,230,118,0.15);
    }

    .main-subtitle {
      font-size: 15px;
      color: #A0AABC;
      margin: 4px 0 0;
    }

    .title-right { position: relative; }

    .acceso-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      background: #121212;
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .acceso-btn:hover {
      background: #1a1a1a;
      border-color: rgba(0,230,118,0.2);
    }

    .acceso-btn .fa-chevron-down {
      font-size: 10px;
      transition: transform 0.3s ease;
    }

    .acceso-btn .fa-chevron-down.rotated { transform: rotate(180deg); }

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
      animation: slide-up 0.3s cubic-bezier(0.22, 1, 0.36, 1);
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
      transition: all 0.25s ease;
      text-align: left;
    }

    .menu-item:hover {
      background: rgba(0,230,118,0.06);
      padding-left: 18px;
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
      background: linear-gradient(160deg, #151515 0%, #121212 50%, #0f0f0f 100%);
      border-radius: 16px;
      padding: 22px;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255,255,255,0.04);
      animation: slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards;
      transition: all 0.35s ease;
      position: relative;
      overflow: hidden;
    }

    .card::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0,230,118,0.02), transparent);
      transition: left 0.8s ease;
      pointer-events: none;
    }

    .card:hover {
      border-color: rgba(0,230,118,0.1);
      box-shadow: 0 4px 24px rgba(0,0,0,0.2), 0 0 40px rgba(0,230,118,0.03);
      transform: translateY(-2px);
    }

    .card:hover::after {
      left: 150%;
    }

    .col-1 .card:nth-child(1) { animation-delay: 0.4s; }
    .col-1 .card:nth-child(2) { animation-delay: 0.55s; }
    .col-2 .card { animation-delay: 0.5s; }
    .col-3 .card { animation-delay: 0.6s; }

    .card-label {
      font-size: 13px;
      color: #A0AABC;
      font-weight: 500;
    }

    .card-amount {
      font-size: 28px;
      font-weight: 800;
      margin: 8px 0 0;
      animation: amount-count 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s backwards;
    }

    .card-amount.green {
      color: #00E676;
      text-shadow: 0 0 20px rgba(0,230,118,0.15);
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
      animation: icon-spin-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s backwards;
    }

    .card-icon.yellow-circle {
      background: linear-gradient(135deg, #D4FF00, #b8d400);
      color: #0B132B;
      box-shadow: 0 0 12px rgba(212,255,0,0.2);
    }

    /* ============================
       COL 1 — BALANCE + GASTADO
    ============================ */
    .col-1 {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .balance-card { flex: 1; }

    .balance-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      animation: slide-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
    }

    .balance-row:nth-child(2) { animation-delay: 0.9s; }
    .balance-row:nth-child(3) { animation-delay: 1s; }

    .balance-row:last-child { border-bottom: none; }

    .row-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(0,230,118,0.08);
      color: #00E676;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
      border: 1px solid rgba(0,230,118,0.12);
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

    .gastado-card { flex: 1; }

    .line-chart {
      width: 100%;
      height: 60px;
      margin-top: 12px;
      animation: line-glow-pulse 4s ease-in-out infinite;
    }

    .line-chart path:first-child {
      stroke-dasharray: 600;
      animation: line-draw 2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
      stroke-dashoffset: 600;
    }

    .line-chart path:last-child {
      opacity: 0;
      animation: fade-in 1s ease 2s forwards;
    }

    /* ============================
       COL 2 — GASTOS MENSUALES
    ============================ */
    .gastos-card { height: 100%; }

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
      transform-origin: bottom;
      animation: bar-grow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      position: relative;
      overflow: hidden;
    }

    .bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
      animation: bar-shine 3s ease-in-out infinite;
    }

    .bar-group:nth-child(1) .bar { animation-delay: 0.5s; }
    .bar-group:nth-child(2) .bar { animation-delay: 0.65s; }
    .bar-group:nth-child(3) .bar { animation-delay: 0.8s; }
    .bar-group:nth-child(4) .bar { animation-delay: 0.95s; }
    .bar-group:nth-child(5) .bar { animation-delay: 1.1s; }

    .bar-group:nth-child(1) .bar::after { animation-delay: 2s; }
    .bar-group:nth-child(2) .bar::after { animation-delay: 2.2s; }
    .bar-group:nth-child(3) .bar::after { animation-delay: 2.4s; }
    .bar-group:nth-child(4) .bar::after { animation-delay: 2.6s; }
    .bar-group:nth-child(5) .bar::after { animation-delay: 2.8s; }

    .bar-top {
      width: 100%;
      height: 6px;
      border-radius: 10px 10px 0 0;
    }

    .green-bar {
      background: linear-gradient(180deg, #00E676, #00D285);
      box-shadow: 0 0 10px rgba(0,230,118,0.15);
    }

    .green-bar .bar-top {
      background: #00E676;
      box-shadow: 0 0 6px rgba(0,230,118,0.4);
    }

    .dark-bar {
      background: linear-gradient(180deg, #2A3040, #1F2430);
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
    .cartera-card { justify-content: flex-start; }

    .gauge-wrap {
      display: flex;
      justify-content: center;
      margin: 8px 0;
      position: relative;
    }

    .gauge {
      width: 170px;
      height: 100px;
      animation: fade-in 0.8s ease-out 0.6s backwards;
    }

    .gauge path:first-child {
      opacity: 0.5;
    }

    .gauge path:nth-child(2) {
      stroke-dasharray: 251;
      stroke-dashoffset: 251;
      animation: gauge-draw 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
      filter: drop-shadow(0 0 4px rgba(212,255,0,0.4));
    }

    .gauge line {
      transform-origin: 100px 100px;
      animation: needle-swing 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.8s backwards;
    }

    .gauge circle:first-of-type {
      filter: drop-shadow(0 0 4px rgba(255,255,255,0.3));
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
      border: 1px solid rgba(255,255,255,0.03);
      transition: all 0.3s ease;
      animation: slide-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
    }

    .category-row:nth-child(1) { animation-delay: 1s; }
    .category-row:nth-child(2) { animation-delay: 1.15s; }

    .category-row:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.06);
    }

    .cat-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
      animation: dot-pulse 2s ease-in-out infinite;
    }

    .cat-dot.blue {
      background: #3498DB;
      box-shadow: 0 0 6px rgba(52,152,219,0.4);
      animation-delay: 0s;
    }

    .cat-dot.green {
      background: #00E676;
      box-shadow: 0 0 6px rgba(0,230,118,0.4);
      animation-delay: 1s;
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

    .cat-amount.green { color: #00E676; }
    .cat-amount.red { color: #E74C3C; }

    /* ============================
       RESPONSIVE
    ============================ */
    @media (max-width: 1100px) {
      .cards-grid { grid-template-columns: 1fr 1fr; }
      .col-3 { grid-column: 1 / -1; }
    }

    @media (max-width: 768px) {
      .app-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .cards-grid { grid-template-columns: 1fr; }
      .header { padding: 14px 16px; }
      .search-box { width: 180px; }
      .profile-text { display: none; }
      .main-title { font-size: 1.8rem; }
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

  irIngresos(): void {
    this.router.navigate(['/ingresos']);
  }
}
