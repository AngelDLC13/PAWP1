(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const archivoInput = document.getElementById('archivoInput');
        const subirButton = document.getElementById('subirButton');
        const listaArchivos = document.getElementById('listaArchivos');
    
        subirButton.addEventListener('click', function () {
            const archivo = archivoInput.files[0];
    
            if (archivo) {
                // Crear un elemento de lista para el archivo
                const listItem = document.createElement('li');
                listItem.textContent = archivo.name;
    
                // Agregar el elemento de lista a la lista de archivos
                listaArchivos.appendChild(listItem);
    
                // Limpiar el input de archivo
                archivoInput.value = '';
            }
        });
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    function mostrarMensaje() {
        const mensaje = document.getElementById("mensaje-subida");
        mensaje.style.display = "block";
    }


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });




    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    document.addEventListener("DOMContentLoaded", function () {
    
        const subirButton = document.getElementById('subirButton');
        subirButton.addEventListener('click', function () {
            window.location.href = 'lgn.html'; 
        });
    
    });

    

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("file-input");
    const fileStatus = document.getElementById("file-status");
    const viewFileLink = document.getElementById("view-file-link");

    if (fileInput.files.length === 0) {
        alert("Selecciona un archivo primero.");
        return;
    }

    const uploadedFile = fileInput.files[0];
    
    // Simulando una solicitud de carga de archivo
    setTimeout(() => {
        fileStatus.style.display = "block";
        viewFileLink.href = URL.createObjectURL(uploadedFile);
        viewFileLink.textContent = "Ver archivo";
    }, 2000); // Simula una carga de archivo (puedes reemplazar esto con tu lógica real)

    // Puedes enviar el archivo al servidor aquí
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', function () {
        window.location.href = 'index.html'; // Cambia 'index.html' si es el nombre de tu página principal
    });
});