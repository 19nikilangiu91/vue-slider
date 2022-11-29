// Descrizione:
// Partendo dal markup dato, rifare lo slider
// ma questa volta usando Vue
// con le thumbnails.

const { createApp } = Vue

  createApp({
    data() {
      return {
        activeImage: 0,
        changeInterval: 0,
        slides: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
      }
    },
    methods: {
        // Metodo di navigazione immagine successiva.
        nextImage(){
            // Incrementiamo l'immagine.
            this.activeImage++;
            // Se siamo oltre l'indice ritorniamo alla 0.
            if(this.activeImage > this.slides.length - 1){
                this.activeImage = 0;
            }
        },

        prevImage(){
            // Decrementiamo l'immagine.
            this.activeImage--;
            // Se siamo sotto l'indice ritorniamo all'ultima immagine.
            if(this.activeImage < 0){
                this.activeImage = this.slides.length - 1;
            }
        },

        // Bonus:
        // 1- Al click su una thumb, visualizzare in grande l’immagine corrispondente.

        clickThumbSelect(indexMiniature){
            this.activeImage = indexMiniature;
        },

        // 2- Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
        
        autoPLayOn(){
            changeInterval = setInterval(this.nextImage, 3000);
        },

        // 3- Quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce.
        
        autoPlayOff(){
            clearInterval(changeInterval);
        },

    },
    
    mounted() {
        changeInterval = setInterval(this.nextImage, 3000);
    }
    
}).mount("#myApp")