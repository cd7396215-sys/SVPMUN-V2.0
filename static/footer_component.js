(function () {
    const { useState } = React;

    // Iconos SVG minimalistas integrados
    const IconArrowUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    );
    const IconInstagram = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    );
    const IconTikTok = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    );
    const IconGlobe = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    );

    const Footer = () => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const navLinks = [
            {
                title: "Navegación Principal",
                links: [
                    { name: "Inicio", href: "/" },
                    { name: "Comités", href: "#comites" },
                    { name: "Cronograma", href: "#cronograma" },
                    { name: "Reglamento", href: "#reglamento" },
                    { name: "Delegaciones", href: "#delegaciones" },
                ]
            },
            {
                title: "Comités Destacados",
                links: [
                    { name: "Corte Internacional (CORTE)", href: "/CORTE" },
                    { name: "Senado de España", href: "/Senado" },
                    { name: "MI6 (Inteligencia)", href: "/MI6" },
                    { name: "Asamblea General (AG)", href: "/AG" },
                    { name: "Crisis Bicameral", href: "/CRISIS" },
                ]
            },
            {
                title: "Documentación & Recursos",
                links: [
                    { name: "Ver Matrices (Canva)", href: "https://canva.link/s2wzeriuwq9rykd", external: true },
                    { name: "Formulario de Inscripción", href: "https://forms.gle/XPGrTfzEHKx9S5ph8", external: true },
                    { name: "Manual de Protocolo", href: "#" },
                    { name: "Guías Académicas", href: "#" },
                ]
            }
        ];

        return (
            <footer className="w-full bg-[#050507] text-white border-t border-white/10 relative overflow-hidden font-sans pt-16 pb-12">
                {/* Glow ambiental sutil de fondo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Fila superior: Branding + Grid de Navegación */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
                        
                        {/* Columna Marca & Logo */}
                        <div className="lg:col-span-4 flex flex-col justify-between items-start">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-black border border-white/20 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                                        <img 
                                            src="static/SVPMUN.png" 
                                            alt="SVPMUN Logo" 
                                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                                        />
                                    </div>
                                    <div>
                                        <span className="font-space font-bold tracking-tight text-xl block leading-none text-white">SVPMUN</span>
                                        <span className="font-instrument-serif italic text-white/60 text-sm tracking-widest block mt-1">Edición IV · 2026</span>
                                    </div>
                                </div>
                                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
                                    Simulación del Modelo de Naciones Unidas del Colegio San Vicente de Paúl. Forjando la diplomacia, pensamiento crítico y liderazgo ético de la nueva generación.
                                </p>
                            </div>

                            {/* Redes Sociales Minimalistas */}
                            <div className="flex items-center gap-3">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                    <IconInstagram />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                    <IconTikTok />
                                </a>
                                <a href="#" aria-label="Sitio Web" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                    <IconGlobe />
                                </a>
                            </div>
                        </div>

                        {/* Columna Navigations Links (3 Bloques) */}
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {navLinks.map((section, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <h4 className="font-space uppercase tracking-[0.2em] text-xs font-bold text-white/90 mb-4 pb-2 border-b border-white/10">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <a 
                                                    href={link.href}
                                                    target={link.external ? "_blank" : "_self"}
                                                    rel={link.external ? "noopener noreferrer" : ""}
                                                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group font-sans"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Fila inferior: Copyright + Volver Arriba */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
                            <p className="font-space text-xs text-white/40 tracking-wider">
                                © 2026 SVPMUN. TODOS LOS DERECHOS RESERVADOS.
                            </p>
                            <span className="hidden sm:inline text-white/20">|</span>
                            <p className="font-sans text-xs text-white/40 font-light">
                                San Vicente de Paúl · Barquisimeto, Venezuela
                            </p>
                        </div>

                        {/* Botón Volver Arriba */}
                        <button 
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 font-space uppercase text-xs tracking-widest text-white/60 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                        >
                            <span>Subir</span>
                            <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                                <IconArrowUp />
                            </span>
                        </button>
                    </div>

                </div>
            </footer>
        );
    };

    // Exportar al ámbito global para poder renderizarlo o incluirlo facilmente
    window.SVPMUNFooter = Footer;
})();