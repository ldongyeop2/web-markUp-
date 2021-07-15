window.addEventListener("wheel",function(e) {
  e.preventDefault();
},{passive : false});

var $html = $("html");

var page =1;

var lastPage = $('section').length;

var down = $('.downBtn');
var up = $('.upBtn');

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
  if($html.is(":animated")) return;

  if(e.originalEvent.deltaY > 0){   // 마우스 휠을 어느 방향으로 굴렸는지 양수이면 아래쪽으로, 음수이면 위쪽으로
    if(page === lastPage) return;
    page++;
  } else if(e.originalEvent.deltaY < 0) {
    if(page === 1)  return;
    page--;
  } 

  var posTop = (page-1) * $(window).height();
  $html.animate({scrollTop : posTop});
})

$(down).on("click", function() {
  console.log(page);
  var posTop = (page) * $(window).height();
  $html.animate({scrollTop : posTop});
  page++;
})

$(up).on("click",function() {
  $html.animate({scrollTop : 0});
  page =1;
})