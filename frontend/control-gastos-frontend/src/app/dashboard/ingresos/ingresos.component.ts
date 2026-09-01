import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
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
            <button class="sidebar-icon" title="Tarjeta de credito" (click)="irDashboard()">
              <i class="fas fa-credit-card"></i>
            </button>
            <button class="sidebar-icon active" title="Ingresos">
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

        <!-- INGRESOS BODY -->
        <main class="dashboard">
          <!-- TITLE ROW -->
          <div class="title-row">
            <div class="title-left">
              <h1 class="main-title">Mis Ingresos</h1>
              <p class="main-subtitle">Controla sus ingresos</p>
            </div>
            <div class="title-right">
              <button class="btn-excel">
                <i class="fas fa-file-excel"></i>
                Exportar a Excel
              </button>
              <button class="acceso-btn">
                <i class="fas fa-plus"></i>
                <span>Agregar ingreso</span>
              </button>
            </div>
          </div>

          <!-- FILA 1: METRICAS -->
          <div class="cards-grid metrics-grid">
            <div class="card metric-card">
              <div class="card-header">
                <span class="card-label">Total de ingresos</span>
                <div class="card-icon yellow-circle">
                  <i class="fas fa-arrow-up"></i>
                </div>
              </div>
              <p class="card-amount green">Q0.00</p>
              <p class="metric-diff positive"><i class="fas fa-arrow-up"></i> +0% vs. mes anterior</p>
            </div>
            <div class="card metric-card">
              <div class="card-header">
                <span class="card-label">Ingresos este mes</span>
                <div class="card-icon blue-circle">
                  <i class="fas fa-calendar-check"></i>
                </div>
              </div>
              <p class="card-amount green">Q0.00</p>
              <p class="metric-diff muted">0 registros</p>
            </div>
            <div class="card metric-card">
              <div class="card-header">
                <span class="card-label">Ingresos este ano</span>
                <div class="card-icon violet-circle">
                  <i class="fas fa-chart-line"></i>
                </div>
              </div>
              <p class="card-amount green">Q0.00</p>
              <p class="metric-diff muted">0 registros</p>
            </div>
          </div>

          <!-- FILA 2: GRAFICOS -->
          <div class="cards-grid charts-grid">
            <div class="card chart-card chart-7">
              <div class="card-header">
                <div>
                  <span class="card-label">Evolucion de ingresos</span>
                  <p class="card-subtitle">Ultimos 5 meses</p>
                </div>
                <span class="month-badge">Este mes</span>
              </div>
              <div class="bar-chart-container">
                <div class="chart-y-axis">
                  <span>Q500</span><span>Q400</span><span>Q300</span><span>Q200</span><span>Q100</span><span>Q0</span>
                </div>
                <div class="bar-chart">
                  <div class="bar-group">
                    <div class="bar bar-empty"><div class="bar-top"></div></div>
                    <span class="bar-label">Abr</span>
                  </div>
                  <div class="bar-group">
                    <div class="bar bar-empty"><div class="bar-top"></div></div>
                    <span class="bar-label">May</span>
                  </div>
                  <div class="bar-group">
                    <div class="bar bar-empty"><div class="bar-top"></div></div>
                    <span class="bar-label">Jun</span>
                  </div>
                  <div class="bar-group">
                    <div class="bar bar-empty"><div class="bar-top"></div></div>
                    <span class="bar-label">Jul</span>
                  </div>
                  <div class="bar-group">
                    <div class="bar green-bar" style="height:2%"><div class="bar-top"></div></div>
                    <span class="bar-label">Ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card chart-card chart-5">
              <div class="card-header">
                <div>
                  <span class="card-label">Distribucion por categoria</span>
                  <p class="card-subtitle">Ingresos del mes actual</p>
                </div>
              </div>
              <div class="dona-wrap">
                <svg viewBox="0 0 200 200" class="dona-svg">
                  <circle class="dona-track" cx="100" cy="100" r="78" />
                  <circle class="dona-seg" cx="100" cy="100" r="78" stroke="#16A085" stroke-dasharray="0 490" />
                </svg>
                <div class="dona-center">
                  <strong>Q0</strong>
                  <span>Este mes</span>
                </div>
              </div>
              <div class="dona-legend">
                <div class="legend-row"><span class="legend-dot salario-dot"></span><span class="legend-name">Salario</span><span class="legend-val">Q0</span></div>
                <div class="legend-row"><span class="legend-dot freelance-dot"></span><span class="legend-name">Freelance</span><span class="legend-val">Q0</span></div>
                <div class="legend-row"><span class="legend-dot bono-dot"></span><span class="legend-name">Bono</span><span class="legend-val">Q0</span></div>
                <div class="legend-row"><span class="legend-dot otros-dot"></span><span class="legend-name">Otros</span><span class="legend-val">Q0</span></div>
              </div>
            </div>
          </div>

          <!-- FILA 3: TABLAS Y WIDGETS -->
          <div class="cards-grid widgets-grid">
            <div class="card widget-card widget-6">
              <div class="card-header">
                <div>
                  <span class="card-label">Registro de ingresos</span>
                  <p class="card-subtitle">Tus ingresos recientes</p>
                </div>
                <button class="view-all">Ver todos</button>
              </div>
              <table class="income-table">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th>Categoria</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="empty-row">
                    <td colspan="4">
                      <div class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <p>Sin ingresos registrados</p>
                        <span>Agrega tu primer ingreso con el boton superior</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card widget-card widget-4">
              <div class="card-header">
                <div>
                  <span class="card-label">Metas de ingresos</span>
                  <p class="card-subtitle">Progreso hacia tus objetivos</p>
                </div>
              </div>
              <div class="goals-list">
                <div class="goal-item">
                  <div class="goal-top"><span>Meta mensual</span><span>Q0 / Q0</span></div>
                  <div class="progress-bar"><div class="progress-fill progress-empty"></div></div>
                  <span class="goal-percent">0%</span>
                </div>
                <div class="goal-item">
                  <div class="goal-top"><span>Meta anual</span><span>Q0 / Q0</span></div>
                  <div class="progress-bar"><div class="progress-fill progress-empty"></div></div>
                  <span class="goal-percent">0%</span>
                </div>
              </div>
            </div>

            <div class="card widget-card widget-2">
              <div class="card-header">
                <span class="card-label">Acciones rapidas</span>
              </div>
              <div class="quick-actions">
                <button class="quick-action"><i class="fas fa-plus-circle"></i><span>Nuevo ingreso</span></button>
                <button class="quick-action"><i class="fas fa-file-invoice"></i><span>Generar reporte</span></button>
                <button class="quick-action"><i class="fas fa-bullseye"></i><span>Definir meta</span></button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
    /* ============================
       KEYFRAMES (mismos del dashboard)
    ============================ */
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slide-left {
      from { opacity: 0; transform: translateX(-20px); }
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

    @keyframes bar-shine {
      0% { left: -100%; }
      100% { left: 200%; }
    }

    @keyframes icon-spin-in {
      from { transform: rotate(-90deg) scale(0.5); opacity: 0; }
      to { transform: rotate(0deg) scale(1); opacity: 1; }
    }

    @keyframes amount-count {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes dot-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }

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

    /* ============================
       SIDEBAR (igual al dashboard)
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
      50% { box-shadow: 0 0 18px rgba(22,160,133,0.15); }
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

    .shc { position: absolute; width: 10px; height: 10px; }
    .shc::before, .shc::after { content: ''; position: absolute; background: rgba(22,160,133,0.45); }
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

    .sidebar-icon:hover { color: #FFFFFF; transform: scale(1.1); }
    .sidebar-icon:hover::before { opacity: 1; }

    .sidebar-icon.active {
      background: rgba(212,255,0,0.12);
      color: #D4FF00;
    }

    .sidebar-icon.active::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background: #D4FF00;
      border-radius: 0 3px 3px 0;
      box-shadow: 0 0 8px rgba(212,255,0,0.5);
    }

    .sidebar-settings { margin-top: auto; }

    /* ============================
       CONTENT / HEADER
    ============================ */
    .content {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-width: 0;
    }

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

    .search-icon { color: #A0AABC; font-size: 13px; }

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

    .header-right { display: flex; align-items: center; gap: 14px; }

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

    .profile { display: flex; align-items: center; gap: 10px; margin-left: 6px; }

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
    }

    .profile-text { display: flex; flex-direction: column; line-height: 1.2; }
    .profile-greeting { font-size: 12px; color: #A0AABC; }
    .profile-name { font-size: 13px; font-weight: 700; color: #00E676; }

    /* ============================
       DASHBOARD BODY
    ============================ */
    .dashboard {
      flex: 1;
      padding: 0 28px 24px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      animation: slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s backwards;
    }

    .title-left { display: flex; flex-direction: column; }

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

    .title-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-excel {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 11px 20px;
      border: 1px solid rgba(39,167,49,0.3);
      border-radius: 14px;
      background: rgba(39,167,49,0.08);
      color: #4CAF50;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .btn-excel i { color: #4CAF50; font-size: 15px; }

    .btn-excel:hover {
      background: rgba(39,167,49,0.15);
      border-color: #4CAF50;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(39,167,49,0.15);
    }

    .acceso-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 11px 20px;
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

    .acceso-btn i { color: #00E676; }

    .acceso-btn:hover {
      background: #1a1a1a;
      border-color: rgba(0,230,118,0.2);
    }

    /* ============================
       CARDS GENERALES
    ============================ */
    .cards-grid {
      display: grid;
      gap: 18px;
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

    .card:hover::after { left: 150%; }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .card-label {
      font-size: 13px;
      color: #A0AABC;
      font-weight: 500;
    }

    .card-amount {
      font-size: 28px;
      font-weight: 800;
      margin: 8px 0 6px;
      animation: amount-count 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s backwards;
    }

    .card-amount.green {
      color: #00E676;
      text-shadow: 0 0 20px rgba(0,230,118,0.15);
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

    .card-icon.blue-circle {
      background: linear-gradient(135deg, #3498DB, #2980b9);
      color: #FFFFFF;
      box-shadow: 0 0 12px rgba(52,152,219,0.2);
    }

    .card-icon.violet-circle {
      background: linear-gradient(135deg, #9B59B6, #8e44ad);
      color: #FFFFFF;
      box-shadow: 0 0 12px rgba(155,89,182,0.2);
    }

    .metric-diff {
      font-size: 12px;
      font-weight: 500;
      margin: 0;
    }

    .metric-diff.positive { color: #00E676; }
    .metric-diff.muted { color: #A0AABC; }

    /* ============================
       METRICAS
    ============================ */
    .metrics-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .metrics-grid .card:nth-child(1) { animation-delay: 0.4s; }
    .metrics-grid .card:nth-child(2) { animation-delay: 0.5s; }
    .metrics-grid .card:nth-child(3) { animation-delay: 0.6s; }

    /* ============================
       GRAFICOS
    ============================ */
    .charts-grid {
      grid-template-columns: 7fr 5fr;
    }

    .charts-grid .chart-7 { animation-delay: 0.5s; }
    .charts-grid .chart-5 { animation-delay: 0.6s; }

    .card-subtitle {
      font-size: 12px;
      color: #A0AABC;
      margin: 3px 0 0;
    }

    .month-badge {
      font-size: 12px;
      color: #3498DB;
      background: rgba(52,152,219,0.12);
      border: 1px solid rgba(52,152,219,0.25);
      padding: 4px 12px;
      border-radius: 9999px;
    }

    .bar-chart-container {
      display: flex;
      gap: 12px;
      height: 240px;
      align-items: stretch;
    }

    .chart-y-axis {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
      padding-bottom: 24px;
      flex-shrink: 0;
    }

    .chart-y-axis span { font-size: 11px; color: #A0AABC; }

    .bar-chart {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      flex: 1;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
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
      max-width: 48px;
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

    .bar-empty {
      height: 2px;
      background: rgba(52,152,219,0.15);
    }

    .bar-empty::after { display: none; }

    .green-bar {
      background: linear-gradient(180deg, #00E676, #00D285);
      box-shadow: 0 0 10px rgba(0,230,118,0.15);
    }

    .bar-top {
      width: 100%;
      height: 6px;
      border-radius: 10px 10px 0 0;
      background: #00E676;
      box-shadow: 0 0 6px rgba(0,230,118,0.4);
    }

    .bar-label { font-size: 11px; color: #A0AABC; }

    /* Dona */
    .dona-wrap {
      display: flex;
      justify-content: center;
      margin: 8px 0;
    }

    .dona-svg { width: 160px; height: 160px; transform: rotate(-90deg); }

    .dona-track,
    .dona-seg {
      fill: none;
      stroke-width: 16;
    }

    .dona-track {
      stroke: rgba(52,152,219,0.1);
      animation: fade-in 0.8s ease-out 0.6s backwards;
    }

    .dona-seg {
      stroke-linecap: round;
      opacity: 0.4;
      animation: fade-in 0.8s ease-out 0.8s backwards;
    }

    .dona-legend {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 8px;
    }

    .legend-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      color: #FFFFFF;
      animation: slide-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
    }

    .legend-row:nth-child(1) { animation-delay: 0.9s; }
    .legend-row:nth-child(2) { animation-delay: 1s; }
    .legend-row:nth-child(3) { animation-delay: 1.1s; }
    .legend-row:nth-child(4) { animation-delay: 1.2s; }

    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      animation: dot-pulse 2s ease-in-out infinite;
    }

    .salario-dot { background: #16A085; }
    .freelance-dot { background: #3498DB; animation-delay: 0.5s; }
    .bono-dot { background: #BE2ED6; animation-delay: 1s; }
    .otros-dot { background: #F1C40F; animation-delay: 1.5s; }

    .legend-name { flex: 1; color: #A0AABC; }

    .legend-val {
      font-weight: 700;
      color: #00E676;
    }

    /* ============================
       FILA 3: TABLAS Y WIDGETS
    ============================ */
    .widgets-grid {
      grid-template-columns: 6fr 4fr 2fr;
    }

    .widgets-grid .widget-6 { animation-delay: 0.6s; }
    .widgets-grid .widget-4 { animation-delay: 0.7s; }
    .widgets-grid .widget-2 { animation-delay: 0.8s; }

    .view-all {
      border: none;
      background: transparent;
      color: #3498DB;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      padding: 0;
      transition: color 0.3s ease;
    }

    .view-all:hover { color: #00E676; }

    .income-table {
      width: 100%;
      border-collapse: collapse;
    }

    .income-table th {
      text-align: left;
      font-size: 12px;
      color: #A0AABC;
      font-weight: 500;
      padding: 10px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .income-table td {
      padding: 12px 8px;
      font-size: 13px;
      color: #FFFFFF;
    }

    .empty-row td { padding: 0; }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px 0;
      text-align: center;
      gap: 6px;
    }

    .empty-state i {
      font-size: 32px;
      color: rgba(52,152,219,0.3);
      margin-bottom: 8px;
      animation: dot-pulse 2.5s ease-in-out infinite;
    }

    .empty-state p {
      font-size: 14px;
      color: #A0AABC;
      margin: 0;
      font-weight: 500;
    }

    .empty-state span {
      font-size: 12px;
      color: rgba(160,170,188,0.6);
    }

    .goals-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .goal-item { display: flex; flex-direction: column; gap: 8px; }

    .goal-top {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #FFFFFF;
    }

    .goal-top span:last-child { color: #A0AABC; }

    .progress-bar {
      height: 8px;
      border-radius: 9999px;
      background: rgba(255,255,255,0.06);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 9999px;
      width: 0%;
    }

    .progress-empty {
      background: linear-gradient(90deg, #16A085, #3498DB);
      opacity: 0.3;
    }

    .goal-percent { font-size: 12px; color: #00E676; font-weight: 600; }

    .quick-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .quick-action {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      background: rgba(255,255,255,0.03);
      color: #FFFFFF;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
    }

    .quick-action i { color: #00E676; font-size: 14px; }

    .quick-action:hover {
      border-color: #00E676;
      background: rgba(0,230,118,0.08);
      transform: translateX(4px);
    }

    /* ============================
       RESPONSIVE
    ============================ */
    @media (max-width: 1200px) {
      .charts-grid { grid-template-columns: 1fr; }
      .widgets-grid { grid-template-columns: 1fr 1fr; }
      .widget-2 { grid-column: 1 / -1; }
    }

    @media (max-width: 768px) {
      .app-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .metrics-grid { grid-template-columns: 1fr; }
      .widgets-grid { grid-template-columns: 1fr; }
      .widget-2 { grid-column: auto; }
      .search-box { width: 180px; }
      .profile-text { display: none; }
      .main-title { font-size: 1.8rem; }
    }
    `
  ]
})
export class IngresosComponent {
  constructor(private router: Router) {}

  irDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
