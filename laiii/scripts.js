window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed'); // 獲取速度參數
      const offset = scrollY * speed; // 計算偏移
      layer.style.transform = `translateY(${offset}px)`; // 應用偏移
    });
  });