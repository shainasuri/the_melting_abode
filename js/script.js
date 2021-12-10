var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    type: 'carousel', 
    startAt: 0, 
    perView: 1.6,
    perTouch: 1,
    gap: 100,
    autoplay: 3000,
    animationDuration: 1000,
    breakpoints: {
        750: {
            perView: 1,
        }
    } 
  });
  
  glide.mount();
}

// new Glide('.glide', {
//     type: 'carousel', 
//     startAt: 0, 
//     perView: 1.6,
//     perTouch: 1,
//     gap: 100,
//     // autoplay: 2000,
//     // breakpoints: {
//     //     1400: {
//     //         perView: 5,
//     //     },
//     //     1024: {
//     //         perView: 3,
//     //         gap: 200,
//     //     },
//     //     600: {
//     //         perView: 1,
//     //     }
//     // }
// }).mount();


