window.addEventListener('load', () => {

  var miniaturas = document.querySelectorAll('.galeria a');
  var modal = document.querySelector('.modal');
  var enlacesModal = document.querySelectorAll('.modal a');
  var imagenModal = document.querySelector('.modal img');
  var imagenActiva = 0;
  var rutasImg = [];

  // Mueve las imagenes
  function cambiarImagen(direccion) {
    if (direccion < 1) {
      // hacia atras
      imagenActiva = imagenActiva > 0 ? imagenActiva - 1 : miniaturas.length - 1;
    } else {
      // hacia adelante
      imagenActiva = imagenActiva < miniaturas.length - 1 ? imagenActiva + 1 : 0;
    }
    imagenModal.setAttribute('src', rutasImg[imagenActiva]);
  };

  // Al hacer click en cualquiera de las miniaturas --> abrir la modal
  for (let i = 0; i < miniaturas.length; i++) {
    rutasImg.push(`${miniaturas[i].querySelector('img').getAttribute('src').split('tn')[0]}.jpg`);
    miniaturas[i].addEventListener('click', e => {
      e.preventDefault();
      imagenModal.setAttribute('src', rutasImg[i]);
      modal.classList.add('visible');
    });
  };

  // Al hacer click en la modal, se cierra
  modal.addEventListener('click', e => {
    e.target.classList.remove('visible');
  });

  // Navegacion
  enlacesModal.forEach(function (item, indice) {
    item.addEventListener('click', e => {
      e.preventDefault();
      cambiarImagen(indice);
    })
  });

  // Teclado
  document.body.addEventListener('keyup', e => {
    switch (e.keyCode) {
      case 27:
        modal.classList.remove('visible');
        break;
      case 37:
        cambiarImagen(0);
        break;
      case 39:
        cambiarImagen(1);
        break;
    }
  });
});
