


ScrollReveal().reveal('.slideshow-container');
// // ScrollReveal().reveal('.contenedor-items', { delay: 200 });
// ScrollReveal().reveal('.information-cards', { delay: 200 });
// ScrollReveal().reveal('.elegir-container', { delay: 200 });
// ScrollReveal().reveal('.servicios-ofrecidos', { delay: 200 });
// ScrollReveal().reveal('.proyectos', { delay: 650 });
// ScrollReveal().reveal('.formulario-contacto', { delay: 200 });
// ScrollReveal().reveal('.footer-links', { delay: 200 });
// ScrollReveal().reveal('.lista-eleccion', { delay: 700 });


window.sr = ScrollReveal();

sr.reveal(".colecciones", {
    duration: 4000,
    origin: 'left',
    distance: '-100px'
})

sr.reveal(".ofertas", {
    origin: 'right',
    interval: 400,
    duration: 3000,
    distance: '-100px'
})


sr.reveal(".categoria", {
    origin: 'left',
    interval: 400,
    duration: 3000,
    distance: '-100px'
})

sr.reveal(".acerca-de", {
    origin: 'right',
    interval: 400,
    duration: 3000,
    distance: '-100px'
});

sr.reveal(".container-contacto", {
    origin: 'left',
    interval: 400,
    duration: 3000,
    distance: '-100px'
});

// sr.reveal(".formulario-contacto", {
//     origin: 'bottom',
//     interval: 400,
//     duration: 3000,
//     distance: '1000px'
// })