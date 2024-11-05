// Función para alternar la visibilidad del dropdown
function toggleDropdown(element) {
    // Encontrar el elemento padre del dropdown
    const menuItem = element.parentElement;
    
    // Alternar la clase 'active' en el elemento del menú
    menuItem.classList.toggle('active');
    
    // Ocultar cualquier otro dropdown abierto
    document.querySelectorAll('.menu-item').forEach(item => {
      if (item !== menuItem) {
        item.classList.remove('active');
      }
    });
  }
  