import { useEffect, useRef } from 'react';

export default function SketchfabAstronaut() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create iframe for Sketchfab model
    const iframe = document.createElement('iframe');
    iframe.src = 'https://sketchfab.com/models/6QS7K/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_inspector=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_animations=0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; fullscreen; vr';
    iframe.allowFullscreen = true;

    if (containerRef.current) {
      containerRef.current.appendChild(iframe);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
} 