'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('timelineContainer');
    const milestones = document.querySelectorAll('.milestone');
    let ticking = false;
    
    // Optimizado el efecto parallax con requestAnimationFrame
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
          container.style.transform = `rotateY(${xAxis}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    };
  
    // Optimizado el observer con opciones de rendimiento
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);
  
    // Agregar event listeners solo si no es dispositivo móvil
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
  
    // Observar los milestones
    milestones.forEach(milestone => observer.observe(milestone));
  
    // Cleanup
    return () => {
      if (window.innerWidth > 768) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      observer.disconnect();
    };
  });