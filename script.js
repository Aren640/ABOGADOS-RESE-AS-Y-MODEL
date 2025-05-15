 const frases = [
    "Excelente asesoría legal, siempre atentos y eficientes.",
    "Me ayudaron a resolver mi caso con gran profesionalismo.",
    "Confianza y compromiso en cada paso del proceso.",
    "El equipo es muy dedicado y siempre disponible para responder.",
    "Gracias a ellos, obtuve el mejor resultado posible.",
    "Abogados con experiencia que realmente se preocupan por sus clientes.",
    "Comunicación clara y asesoramiento honesto en todo momento.",
    "Un servicio legal de primera, muy recomendados.",
    "Resolutivos y cercanos, me hicieron sentir respaldado.",
    "Profesionales que hacen la diferencia cuando más lo necesitas."
  ];

  function cargarReseñas() {
    $("#contenedor-usuarios").empty();

    $.getJSON("https://randomuser.me/api/?results=4", function (data) {
      $.each(data.results, function (index, elemento) {
        const nombre = `${elemento.name.first} ${elemento.name.last}`;
        const imagen = elemento.picture.medium;
        const texto = frases[Math.floor(Math.random() * frases.length)];

        const htmlRober = `
          <div class="usuario">
            <div class="fila-superior">
              <img class="foto" src="${imagen}" alt="Foto de ${nombre}">
              <p class="nombre"><strong>${nombre}</strong></p>
            </div>
            <p class="texto-personalizado">"${texto}"</p>
          </div>
        `;

        $("#contenedor-usuarios").append(htmlRober);
      });
    }).fail(function (error) {
      console.error("Error al cargar los usuarios", error);
    });
  }

  $(document).ready(function () {
    cargarReseñas();
    $("#resetear-reseñas").click(cargarReseñas);
  });


  //Sace como hacer un modal al final despues de el formulario
  $(document).ready(function () {

  $('#abrir-modal').click(function () {
    $('#modal').fadeIn();
  });

  $('.cerrar').click(function () {
    $('#modal').fadeOut();
  });

  $(window).click(function (e) {
    if ($(e.target).is('#modal')) {
      $('#modal').fadeOut();
    }
  });
});



