window.onload = () => {
        document.body.classList.remove("container");
    
        // Configurar el botón para iniciar la música al hacer clic
        const music = document.getElementById("background-music");
        const playButton = document.getElementById("play-button");
        const imageGallery = document.getElementById("image-gallery");

        // Evento de click para reproducir la música y mostrar imágenes
        playButton.addEventListener("click", () => {
            music.play().then(() => {
                playButton.disabled = true; // Deshabilitar botón después de hacer clic
                //imageGallery.style.display = "flex"; // Mostrar las imágenes
                if (window.innerWidth <= 768) {
                    imageGallery.style.display = "grid"; // Muestra la galería en grid en pantallas pequeñas
                  } else {
                    imageGallery.style.display = "flex"; // Muestra la galería en flex en pantallas grandes
                  }
            }).catch(error => {
                console.log("Autoplay bloqueado: ", error);
            });
        });
    };