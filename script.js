//
for(let i = 0; i < 16; i++){
  $("body").append(`<div class="box"></div>`)
}

$(".box").on('click', function(){
  $(this).toggleClass("lightbox");
})

console.log($("body")[0]);
