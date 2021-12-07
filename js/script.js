var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    type: 'carousel', 
    startAt: 0, 
    perView: 1.6,
    perTouch: 1,
    gap: 100,
    autoplay: 2500,
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


let view_1 = document.querySelector('#view-1');
let view_2 = document.querySelector('#view-2');
let view_3 = document.querySelector('#view-3');
let view_4 = document.querySelector('#view-4');
let view_5 = document.querySelector('#view-5');
let view_6 = document.querySelector('#view-6');
let view_7 = document.querySelector('#view-7');
let view_8 = document.querySelector('#image-8');
let view = document.querySelector('#image-9');

// view.addEventListener('click', function(e){
//     console.log("hello");
// })

view_8.addEventListener('click', function(e){
    console.log("hi");
})

$(document).ready(function(){
    $("#image-1").click(function(){
        $("#view-1").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-1").click(function(){
        $("#view-1").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
                $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-2").click(function(){
        $("#view-2").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-2").click(function(){
        $("#view-2").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-3").click(function(){
        $("#view-3").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-3").click(function(){
        $("#view-3").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-4").click(function(){
        $("#view-4").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-4").click(function(){
        $("#view-4").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-5").click(function(){
        $("#view-5").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-5").click(function(){
        $("#view-5").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-6").click(function(){
        $("#view-6").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-6").click(function(){
        $("#view-6").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-7").click(function(){
        $("#view-7").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-7").click(function(){
        $("#view-7").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-8").click(function(){
        $("#view-8").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-8").click(function(){
        $("#view-8").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#image-9").click(function(){
        $("#view-9").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#view-9").click(function(){
        $("#view-9").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});

$(document).ready(function(){
    $("#info-button").click(function(){
        $("#info").css("display", "block");
        $(".footer").css("display", "block");
        $(".art-container").css("filter", "blur(8px)");
        $(".navbar").css("filter", "blur(8px)");
        $(".glide__arrows").css("filter", "blur(8px)");
    });
    $("#info").click(function(){
        $("#info").css("display", "none");
        $(".footer").css("display", "none");
        $(".art-container").css("filter", "none");
        $(".navbar").css("filter", "none");
        $(".glide__arrows").css("filter", "none");
    });
});





// $(document).ready(function(){
//     $("#image-10").click(function(){
//         $("#view-10").css("display", "block");
//         $(".footer").css("display", "block");
//         $(".art-container").css("filter", "blur(8px)");
//         $(".navbar").css("filter", "blur(8px)");
//         $(".glide__arrows").css("filter", "blur(8px)");
//     });
//     $("#view-10").click(function(){
//         $("#view-10").css("display", "none");
//         $(".footer").css("display", "none");
//         $(".art-container").css("filter", "none");
//         $(".navbar").css("filter", "none");
//         $(".glide__arrows").css("filter", "none");
//     });
// });