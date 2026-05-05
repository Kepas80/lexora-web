import { useEffect, useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export function CameraSection() {
  const shutterRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const digitalTextRef = useRef<HTMLDivElement>(null);
  const statusPillRef = useRef<HTMLDivElement>(null);
  const cardsLayerRef = useRef<HTMLDivElement>(null);
  const paperPreviewRef = useRef<HTMLDivElement>(null);
  const uiTopRef = useRef<HTMLDivElement>(null);
  const uiBottomRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let isMounted = true;

    const startDemo = () => {
      if (!isMounted) return;

      const shutterBtn = shutterRef.current;
      const flash = flashRef.current;
      const beam = beamRef.current;
      const digitalText = digitalTextRef.current;
      const statusPill = statusPillRef.current;
      const cardsLayer = cardsLayerRef.current;
      const paperPreview = paperPreviewRef.current;
      const uiTop = uiTopRef.current;
      const uiBottom = uiBottomRef.current;

      if (!shutterBtn || !flash || !beam || !digitalText || !statusPill || !cardsLayer || !paperPreview || !uiTop || !uiBottom) return;

      // 1. Disparo
      timeouts.push(setTimeout(() => {
        if (!isMounted) return;
        shutterBtn.parentElement?.classList.add('shutter-clicked');
        timeouts.push(setTimeout(() => {
          if (isMounted) shutterBtn.parentElement?.classList.remove('shutter-clicked');
        }, 150));
      }, 800));

      // 2. Flash
      timeouts.push(setTimeout(() => {
        if (isMounted) flash.classList.add('flash-active');
      }, 950));

      // 3. Escaneo
      timeouts.push(setTimeout(() => {
        if (!isMounted) return;
        uiTop.classList.add('ui-hidden');
        uiBottom.classList.add('ui-hidden');
        statusPill.innerText = language === 'es' ? "Digitalizando..." : "Scanning...";
        statusPill.classList.add('active');
        beam.classList.add('scan-active');
        digitalText.classList.add('reveal');
      }, 1800));

      // 4. Generando
      timeouts.push(setTimeout(() => {
        if (isMounted) statusPill.innerText = language === 'es' ? "Creando Flashcards..." : "Creating Flashcards...";
      }, 3800));

      // 5. Transformación 3D
      timeouts.push(setTimeout(() => {
        if (!isMounted) return;
        statusPill.classList.remove('active');
        paperPreview.style.transition = "all 0.5s";
        paperPreview.style.opacity = "0";
        paperPreview.style.transform = "scale(0.8)";
        cardsLayer.classList.add('cards-appear');
      }, 4500));

      // 6. Reset Loop
      timeouts.push(setTimeout(() => {
        if (!isMounted) return;
        flash.classList.remove('flash-active');
        beam.classList.remove('scan-active');
        digitalText.classList.remove('reveal');
        cardsLayer.classList.remove('cards-appear');
        uiTop.classList.remove('ui-hidden');
        uiBottom.classList.remove('ui-hidden');
        
        paperPreview.style.transition = ""; 
        paperPreview.style.opacity = "1";
        paperPreview.style.transform = "rotate(-2deg)";
        
        startDemo();
      }, 9000));
    };

    startDemo();

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, [language]);

  return (
    <section className="py-24 px-6 bg-sky-50 overflow-hidden font-sans border-t border-sky-100">
      <style dangerouslySetInnerHTML={{ __html: `
        .scene-container { perspective: 1000px; }
        .physical-doc-stack { z-index: 1; }
        .phone-frame { box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25); z-index: 10; transition: transform 0.5s ease; }
        .screen { mask-image: -webkit-radial-gradient(white, black); }
        .shutter-button::after { transition: transform 0.1s; }
        .shutter-clicked .shutter-button::after { transform: translate(-50%, -50%) scale(0.9); }
        .ui-hidden { opacity: 0; pointer-events: none; }
        .digital-lines { clip-path: inset(0 0 100% 0); transition: clip-path 2s cubic-bezier(0.4, 0, 0.2, 1); }
        .digital-lines.reveal { clip-path: inset(0 0 0 0); }
        .scan-beam { opacity: 0; box-shadow: 0 0 15px #00c6ff, 0 0 30px #007aff; }
        .scan-active { animation: scanMove 2s cubic-bezier(0.4, 0, 0.2, 1) forwards; opacity: 1; }
        @keyframes scanMove { 0% { top: 10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
        .flash-active { animation: cameraFlash 0.8s ease-out; }
        @keyframes cameraFlash { 0% { opacity: 0; } 10% { opacity: 1; } 40% { opacity: 1; } 100% { opacity: 0; } }
        .flashcards-layer { perspective: 800px; pointer-events: none; }
        .flashcard-wrapper { transform-style: preserve-3d; opacity: 0; transform: translateY(40px) rotateX(20deg); }
        .flashcard-back { transform: rotateX(180deg); backface-visibility: hidden; }
        .flashcard-front { backface-visibility: hidden; }
        .cards-appear .flashcard-wrapper { animation: cardEnterAndFlip 5s ease-in-out infinite; }
        @keyframes cardEnterAndFlip {
            0% { opacity: 0; transform: translateY(60px) scale(0.8) rotateY(0deg); }
            10% { opacity: 1; transform: translateY(0) scale(1) rotateY(0deg); }
            40% { transform: translateY(0) scale(1) rotateY(0deg); }
            50% { transform: translateY(0) scale(1) rotateY(180deg); }
            90% { transform: translateY(0) scale(1) rotateY(180deg); }
            100% { transform: translateY(0) scale(1) rotateY(360deg); }
        }
        .status-pill { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity: 0; transform: scale(0.9); }
        .status-pill.active { opacity: 1; transform: scale(1); }
      `}} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="inline-block py-1.5 px-3.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            {t('features.camera.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {t('features.camera.title')}<br />
            <span className="text-[#2D6BFF]">{t('features.camera.subtitle')}</span>
          </h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('features.camera.desc')}
          </p>

          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <div className="flex gap-5 items-start text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('features.camera.step1.title')}</h3>
                <p className="text-slate-500 leading-snug">{t('features.camera.step1.desc')}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 items-start text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 10.5"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('features.camera.step2.title')}</h3>
                <p className="text-slate-500 leading-snug">{t('features.camera.step2.desc')}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 items-start text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('features.camera.step3.title')}</h3>
                <p className="text-slate-500 leading-snug">{t('features.camera.step3.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div className="relative flex justify-center h-[650px] order-1 lg:order-2 scale-[0.8] sm:scale-90 md:scale-100 origin-center">
          <div className="scene-container relative w-[480px] h-[600px] flex justify-center items-center">
            
            {/* Physical Doc Stack */}
            <div className="physical-doc-stack absolute left-5 top-1/2 -translate-y-1/2 -rotate-3 w-[220px] h-[300px] bg-white shadow-2xl rounded p-5 flex flex-col gap-4 border border-slate-200">
              <div className="absolute inset-1 bg-white border border-slate-200 -z-10 rounded rotate-3"></div>
              <div className="w-2/5 h-2.5 bg-slate-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-slate-200 rounded"></div>
              <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
              <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
              <div className="w-full h-2 bg-slate-200 rounded"></div>
              <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
              <div className="w-full h-2 bg-slate-200 rounded"></div>
            </div>

            {/* Phone Frame */}
            <div className="phone-frame w-[280px] h-[560px] bg-black rounded-[44px] p-3 relative translate-x-16 lg:translate-x-16">
              <div className="screen w-full h-full bg-white rounded-[34px] relative overflow-hidden flex flex-col items-center">
                <div className="notch absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-7 bg-black rounded-full z-20"></div>
                <div ref={flashRef} className="flash-overlay absolute inset-0 bg-white opacity-0 z-50 pointer-events-none"></div>
                <div ref={statusPillRef} className="status-pill absolute top-16 bg-black/75 backdrop-blur-md text-white py-2 px-5 rounded-full text-sm font-semibold z-30 shadow-lg">{t('features.camera.demo.processing')}</div>

                <div ref={uiTopRef} className="camera-ui-top absolute top-5 w-[85%] flex justify-between text-white text-xs font-medium z-10 transition-opacity duration-500">
                  <span>Flash Auto</span><span>RAW</span>
                </div>

                <div className="document-container w-full h-full bg-[#dadade] relative flex justify-center items-center">
                  {/* Paper Preview on Screen */}
                  <div ref={paperPreviewRef} className="paper-preview w-[220px] h-[310px] bg-white shadow-lg p-5 flex flex-col gap-4 relative -rotate-2 origin-center">
                    <div ref={beamRef} className="scan-beam absolute top-0 -left-5 -right-5 h-[3px] bg-white z-10"></div>
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                    
                    {/* Digital Text Overlay */}
                    <div ref={digitalTextRef} className="digital-lines absolute top-5 left-5 right-5 bottom-5 flex flex-col gap-4 z-10">
                      <div className="h-2 w-full rounded bg-gradient-to-r from-blue-500 to-sky-400 shadow-[0_0_8px_rgba(0,122,255,0.4)]"></div>
                      <div className="h-2 w-3/5 rounded bg-gradient-to-r from-blue-500 to-sky-400 shadow-[0_0_8px_rgba(0,122,255,0.4)]"></div>
                      <div className="h-2 w-full rounded bg-gradient-to-r from-blue-500 to-sky-400 shadow-[0_0_8px_rgba(0,122,255,0.4)]"></div>
                      <div className="h-2 w-4/5 rounded bg-gradient-to-r from-blue-500 to-sky-400 shadow-[0_0_8px_rgba(0,122,255,0.4)]"></div>
                    </div>
                  </div>

                  {/* Flashcards 3D Layer */}
                  <div ref={cardsLayerRef} className="flashcards-layer absolute inset-0 flex justify-center items-center">
                    {/* Card 1 (Bottom) */}
                    <div className="absolute w-40 h-56 z-10" style={{ transform: 'rotate(-5deg)' }}>
                      <div className="flashcard-wrapper w-full h-full relative" style={{ animationDelay: '0.1s' }}>
                        <div className="flashcard-face flashcard-front bg-white shadow-md rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Concepto</div>
                           <p className="text-xs font-bold text-slate-800 leading-tight">La Guerra Fría</p>
                        </div>
                        <div className="flashcard-face flashcard-back bg-gradient-to-br from-blue-600 to-indigo-600 text-white justify-center rounded-xl p-4 flex flex-col items-center text-center">
                          <span className="text-[10px] font-bold tracking-wider opacity-75 mb-1">RESPUESTA</span>
                          <p className="text-[10px] leading-snug font-medium">Conflicto ideológico entre EE.UU. y la URSS tras la 2ª GM.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 (Middle) */}
                    <div className="absolute w-40 h-56 z-20" style={{ transform: 'rotate(3deg) translateY(-5px)' }}>
                       <div className="flashcard-wrapper w-full h-full relative" style={{ animationDelay: '0.3s' }}>
                        <div className="flashcard-face flashcard-front bg-white shadow-md rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Concepto</div>
                           <p className="text-xs font-bold text-slate-800 leading-tight">Fotosíntesis</p>
                        </div>
                        <div className="flashcard-face flashcard-back bg-gradient-to-br from-blue-600 to-indigo-600 text-white justify-center rounded-xl p-4 flex flex-col items-center text-center">
                          <span className="text-[10px] font-bold tracking-wider opacity-75 mb-1">RESPUESTA</span>
                          <p className="text-[10px] leading-snug font-medium">Proceso químico que convierte luz solar en energía química.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 (Top) */}
                    <div className="absolute w-40 h-56 z-30" style={{ transform: 'rotate(-2deg) translateY(-10px)' }}>
                       <div className="flashcard-wrapper w-full h-full relative" style={{ animationDelay: '0.5s' }}>
                        <div className="flashcard-face flashcard-front bg-white shadow-md rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center">
                           <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 mb-3 flex items-center justify-center font-bold text-sm">A</div>
                           <p className="text-xs font-bold text-slate-800 leading-tight">Revolución Francesa</p>
                           <div className="w-10 h-0.5 bg-slate-200 mt-2 rounded"></div>
                        </div>
                        <div className="flashcard-face flashcard-back bg-gradient-to-br from-blue-600 to-indigo-600 text-white justify-center rounded-xl p-4 flex flex-col items-center text-center">
                          <span className="text-[10px] font-bold tracking-wider opacity-75 mb-2">CORRECTO</span>
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl mb-1">✨</div>
                          <p className="text-[10px] opacity-90">1789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div ref={uiBottomRef} className="camera-ui-bottom absolute bottom-9 w-full flex justify-center items-center z-10 transition-opacity duration-500">
                  <div className="shutter-button w-16 h-16 rounded-full border-4 border-white bg-transparent relative cursor-pointer">
                    <div ref={shutterRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}