// /static/navbar.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Maquetación del Menú (HTML)
    const navbarHTML = `
        <div id="svpmun-global-nav">
            <nav class="svp-nav-glass">
                <a href="/" class="svp-logo">SVPMUN</a>
                
                <div class="svp-links desktop-only">
                    <a href="/"><span>Inicio</span></a>
                    <a href="/AG"><span>A. General</span></a>
                    <a href="/Senado"><span>Senado</span></a>
                    <a href="/CORTE"><span>Corte TSJ</span></a>
                    <a href="/CRISIS"><span>Crisis</span></a>
                    <a href="/MI6"><span>MI6</span></a>
                    <a href="/ICE"><span>I.C.E.</span></a>
                    <a href="/APA"><span>APA</span></a>
                    <a href="/Investigacion"><span>Investigación</span></a>
                    <a href="/OMC"><span>OMC</span></a>
                </div>
                
                <button class="svp-btn-movil mobile-only" id="svpMenuBtn">
                    Comités <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
            </nav>

            <!-- Menú a Pantalla Completa Móvil -->
            <div class="svp-pantalla-movil" id="svpMobileMenu">
                <div class="svp-movil-contenido">
                    <a href="/" style="--delay: 0.1s">Inicio</a>
                    <a href="/AG" style="--delay: 0.15s">Asamblea General</a>
                    <a href="/Senado" style="--delay: 0.2s">Senado de España</a>
                    <a href="/CORTE" style="--delay: 0.25s">Corte TSJ</a>
                    <a href="/CRISIS" style="--delay: 0.3s">Crisis Colombia 26'</a>
                    <a href="/MI6" style="--delay: 0.35s">Mando MI6</a>
                    <a href="/ICE" style="--delay: 0.4s">Dirección I.C.E.</a>
                    <a href="/APA" style="--delay: 0.45s">Directorio APA</a>
                    <a href="/Investigacion" style="--delay: 0.5s">Reporte NSA / CIA</a>
                    <button class="svp-btn-cerrar" id="svpCloseBtn" style="--delay: 0.6s">✖ Cerrar Opciones</button>
                </div>
            </div>
        </div>

        <style>
            /* Fuente Importada de tu Index (Inter) */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

            #svpmun-global-nav {
                position: fixed; top: 25px; left: 0; right: 0; 
                z-index: 9999999; display: flex; justify-content: center;
                pointer-events: none;
                font-family: 'Inter', system-ui, sans-serif; /* Tipografía oficial */
            }

            /* --- Animación de Entrada de la barra --- */
            .svp-nav-glass {
                pointer-events: auto;
                background: rgba(10, 10, 10, 0.75);
                backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                padding: 6px; border-radius: 100px;
                display: flex; align-items: center; gap: 8px;
                animation: slideDownFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            @keyframes slideDownFade {
                0% { transform: translateY(-50px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            /* --- Enlaces Normales y Animación Hover Minimalista --- */
            .svp-links a {
                position: relative;
                text-decoration: none; color: rgba(255, 255, 255, 0.65);
                font-size: 13px; font-weight: 500;
                padding: 8px 16px; border-radius: 100px;
                display: inline-block;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
            }

            /* El truco animado al pasar el ratón (Hover) */
            .svp-links a::before {
                content: '';
                position: absolute; inset: 0;
                background: rgba(255, 255, 255, 0.12);
                border-radius: 100px;
                transform: scale(0.8); opacity: 0;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .svp-links a:hover {
                color: #ffffff;
                transform: translateY(-2px); /* Pequeña levitación de botón */
            }
            .svp-links a:hover::before {
                transform: scale(1); opacity: 1; /* Burbuja gris transparente se expande y rodea el texto */
            }
            .svp-links a span {
                position: relative; z-index: 2; /* Mantiene la letra sobre la burbuja animada */
            }

            /* --- El Logo Principal Animado --- */
            .svp-logo {
                background: #ffffff; color: #000000;
                font-weight: 700; padding: 8px 20px;
                border-radius: 100px; text-decoration: none;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .svp-logo:hover {
                transform: scale(1.05); /* Ligeramente más grande al pasarlo */
                box-shadow: 0 0 20px rgba(255,255,255,0.4); /* Reflejo blanco puro */
            }

            /* --- Ocultadores móviles --- */
            .mobile-only { display: none; }
            @media (max-width: 960px) {
                .desktop-only { display: none; }
                .mobile-only { display: flex; }
                .svp-nav-glass { padding: 5px; gap: 4px; }
                .svp-logo { font-size: 12px; padding: 8px 16px; }
                
                .svp-btn-movil {
                    background: transparent; border: 1px solid rgba(255,255,255,0.1);
                    color: white; border-radius: 100px; padding: 7px 18px;
                    font-size: 13px; cursor: pointer; align-items: center; gap: 8px; font-weight: 600;
                    transition: 0.3s ease;
                }
                .svp-btn-movil:active { background: white; color: black; }
                .svp-btn-movil svg { width: 16px; height: 16px; }
            }

            /* --- Diseño Menú Móvil Espectacular --- */
            .svp-pantalla-movil {
                position: fixed; inset: 0; background: rgba(5,5,5,0.96);
                backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
                z-index: 99999999; opacity: 0; visibility: hidden; pointer-events: auto;
                transition: all 0.5s ease; display: flex; align-items: center; justify-content: center;
            }
            
            /* Esta clase lanza las animaciones de Cascada del móvil */
            .svp-pantalla-movil.open { opacity: 1; visibility: visible; }
            .svp-pantalla-movil.open a, 
            .svp-pantalla-movil.open button {
                animation: popUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                animation-delay: var(--delay);
            }

            @keyframes popUpFade {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            
            .svp-movil-contenido { 
                display: flex; flex-direction: column; gap: 14px; 
                width: 100%; align-items: center; padding: 20px; 
                max-height: 90vh; overflow-y: auto; 
            }

            .svp-movil-contenido a { 
                font-size: 1.3rem; font-weight: 700; color: #f2f2f2;
                border: 1px solid rgba(255,255,255,0.05); width: 100%; max-width: 340px; 
                text-align: center; padding: 18px; border-radius: 12px; text-decoration: none;
                opacity: 0; /* Preparación para la animación en cascada */
                background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
            }
            
            .svp-movil-contenido a:active { background: #fff; color: #000; }
            
            .svp-btn-cerrar { 
                margin-top: 20px; background: #b30000; color: white; 
                border: none; padding: 16px 40px; border-radius: 100px; 
                font-weight: 700; cursor: pointer; font-size: 14px;
                opacity: 0; transition: transform 0.2s;
            }
            .svp-btn-cerrar:active { transform: scale(0.95); }
        </style>
    `;

    // 2. Inyectar Componente Automáticamente (Sin Tocar tus plantillas individualmente)
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 3. Scripting Seguro: Cierre/Apertura de Celular (Niño de 5 Años Proofer)
    const btnMenu = document.getElementById("svpMenuBtn");
    const btnClose = document.getElementById("svpCloseBtn");
    const overlay = document.getElementById("svpMobileMenu");
    
    // Evitar que interactuen bruscamente con fallas:
    if(btnMenu && overlay) {
        btnMenu.addEventListener("click", () => {
            overlay.classList.add("open");
            document.body.style.overflow = "hidden"; // Deshabilita bajar por error la web abajo del panel oscuro
        });

        const closeNav = () => {
            overlay.classList.remove("open");
            document.body.style.overflow = "auto";
        };

        btnClose.addEventListener("click", closeNav);

        // EXTRA DE CUIDADO: Ocultarlo tras hacer un click a una opción si deciden no cambiar de pestaña real
        overlay.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeNav);
        });
    }
});