(function() {
    const { useState } = React;

    const SVPMUNFooter = () => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <footer className="w-full bg-[#050507] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden font-sans">
                {/* Glow de fondo difuminado minimalista */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                        
                        {/* Columna 1: Logo y Descripción */}
                        <div className="md:col-span-5 flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-6">
                                <img 
                                    src="static/SVPMUN.png" 
                                    alt="SVPMUN Logo" 
                                    className="w-12 h-12 object-contain rounded-full bg-black p-1 border border-white/20 shadow-lg"
                                />
                                <span className="font-space text-2xl font-bold tracking-tighter uppercase text-white">SVPMUN '26</span>
                            </div>
                            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm mb-6">
                                Modelo de Naciones Unidas del Colegio San Vicente de Paúl. Forjando diplomacia, liderazgo y resolución estratégica de crisis globales al más alto nivel.
                            </p>
                            <div className="flex items-center gap-3 font-space text-xs text-white/40 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Barquisimeto, Venezuela
                            </div>
                        </div>

                        {/* Columna 2: Enlaces Rápidos */}
                        <div className="md:col-span-3 flex flex-col">
                            <h4 className="font-space uppercase tracking-[0.2em] text-xs font-bold text-white mb-6">Navegación</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                                <li><a href="https://canva.link/s2wzeriuwq9rykd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ver Matrices</a></li>
                                <li><a href="https://forms.gle/XPGrTfzEHKx9S5ph8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Registro Oficial</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Comités Globales</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cronograma Táctico</a></li>
                            </ul>
                        </div>

                        {/* Columna 3: Contacto Directo */}
                        <div className="md:col-span-4 flex flex-col">
                            <h4 className="font-space uppercase tracking-[0.2em] text-xs font-bold text-white mb-6">Contacto Directo</h4>
                            <p className="text-sm text-white/60 font-light mb-4">
                                ¿Dudas sobre acreditaciones o delegaciones? Conecta con nuestro equipo de soporte institucional.
                            </p>
                            <a 
                                href="https://wa.me/584125620158?text=Hola,%20tengo%20una%20consulta%20sobre%20SVPMUN." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-space font-bold uppercase tracking-widest bg-white/10 hover:bg-white hover:text-black transition-all px-5 py-3.5 rounded-full w-fit text-white border border-white/15"
                            >
                                Soporte vía WhatsApp
                            </a>
                        </div>

                    </div>

                    {/* Fila Inferior: Copyright y Botón Subir */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-space uppercase tracking-widest">
                        <p>© 2026 SVPMUN IV. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-6">
                            <span>Desarrollo Técnico: Ahmed Smaili</span>
                            <button 
                                onClick={scrollToTop}
                                className="hover:text-white transition-colors underline cursor-pointer"
                            >
                                Volver Arriba ↑
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

    window.SVPMUNFooter = SVPMUNFooter;
})();