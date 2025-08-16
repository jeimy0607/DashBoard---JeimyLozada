const btn = document.getElementById('btnMenu');
    const sidebar = document.getElementById('menu-lateral');

    btn.addEventListener('click', () => {
      const activo = sidebar.classList.toggle('activo');
      btn.setAttribute('aria-expanded', activo ? 'true' : 'false');
    });

    // Cierra el menú si se hace click fuera en móvil
    document.addEventListener('click', (e) => {
      const clickFuera = !sidebar.contains(e.target) && !btn.contains(e.target);
      if (window.matchMedia('(max-width: 768px)').matches && sidebar.classList.contains('activo') && clickFuera) {
        sidebar.classList.remove('activo');
        btn.setAttribute('aria-expanded', 'false');
      }
    });