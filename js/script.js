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


function openNav() {
    document.querySelector('#myNav').style.width = "100%";
  }

  function closeNav() {
      document.querySelector('#myNav').style.width = "0%";
      document.querySelector('.content-part').style.width = "0%";
  }




//   // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }