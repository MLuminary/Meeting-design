;(function(){
  //首页直接展示
  $('.ht_section_0_info').addClass('show');

  $(window).scroll(function(event){
      //第一屏跟随滑动视角
    var top = $(document).scrollTop()
    if(top < 1000){
      $('.ht_bg_box').css('transform',`translate(0px,${top}px)`)
    }

    console.log(top)
    //第二屏文字延时出现
    if( top >$('.ht_section_0').height()/2){
      $('.ht_section_1 .row').addClass('show');
    }

    if(top >$('.ht_section_2').offset().top){
      $('.ht_section_3 .row img').addClass('show');
    }

    if(top > $('.ht_section_3').offset().top){
      $('.ht_section_4 .row').addClass('show')
    }
    if(top > $('.ht_section_4').offset().top){
      $('.ht_section_5 .row').addClass('show')
    }
  })
})()