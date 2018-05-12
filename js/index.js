;(function(){
  //第一屏跟随滑动视角
  $(window).scroll(function(event){
    var top = $(document).scrollTop()
    if(top < 1000){
      $('.ht_bg_box').css('transform',`translate(0px,${top}px)`)
    }
  })
})()