window.indexHover = {
  hover: function(elem) {
    elem.addClass('active')
      .siblings().removeClass('active');
  },
  init: function() {
    var self = this;
    var block = $('.js-index-hover');
    block.on('mouseenter', function(){
      self.hover($(this));
    });
    self.hover(block.eq(1));
  }
};
window.indexAnimation = {
  init: function() {
    $(window).on('load', function(){
      $('.js-index').addClass('active');
      setTimeout(function(){
        $('.js-index').addClass('loaded');
        setTimeout(function(){
          $('.js-header, .js-footer, .js-anim-logo').addClass('loaded');
          setTimeout(function(){
            var translateY = $('.js-index-logo').offset().top - $('.js-anim-logo').offset().top;
            $('.js-anim-logo').css({
              'transform': 'scale(1) translateY(' + translateY + 'px)'
            });
            setTimeout(function(){
              $('.js-index-content').addClass('loaded');
              setTimeout(function(){
                $('.js-anim-logo').removeClass('loaded');
              }, 500);
            }, 1000);
          }, 1500);
        }, 1500);
      }, 2000);
    });
  }
};
window.footerCenter = {
  setLeft: function() {
    var left = $('.footer__left').offset().left + $('.footer__left').width();
    var right = $('.link-min').first().offset().left;
    var diff = right - left;
    var margin = diff/2 - $('.js-footer-left').width()/2;
    $('.js-footer-left').css({
      'margin-right': margin-15
    });
  },
  setRight: function() {
    var right = $('.footer__right').offset().left;
    var left = $('.link-min').last().offset().left + $('.link-min').last().width();
    var diff = right - left;
    var margin = diff/2 - $('.js-footer-right').width()/2;
    $('.js-footer-right').css({
      'margin-left': margin-15
    });
  },
  init: function() {
    var t = this;
    t.setLeft();
    t.setRight();
    $(window).on('resize', function(){
      t.setLeft();
      t.setRight();
    });
  }
}
window.grayscaleImg = function(src) {
  var supportsCanvas = !!document.createElement('canvas').getContext;
  if(supportsCanvas) {
    var canvas = document.createElement('canvas'), 
    context = canvas.getContext('2d'), 
    imageData, px, length, i = 0, gray, 
    img = new Image();
    
    img.src = src;
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
      
    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    px = imageData.data;
    length = px.length;
    
    for (; i < length; i += 4) {
      gray = px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11;
      px[i] = px[i + 1] = px[i + 2] = gray;
    }
        
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
  } else {
    return src;
  }
}
window.grayscale = {
  init: function() {
    $(window).on('load', function(){
      $('.js-gray').each(function(){
        var t = $(this);
        var img = t.attr('src');
        t.after('<img src="' + grayscaleImg(img) + '">');
        /*var width = t.width();
        var height = t.height();
        var jCanvas = t.after('<canvas width="' + width + '" height="' + height + '" class="js-gray-canvas"></canvas>');
        var canvas = $('.js-gray-canvas').last().get(0);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(t[0], 0, 0, width, height);*/
        //t.after('<img src="' + img + '">');
      });
    });
  }
}
window.hoverText = function() {
  var maxHeight = 0;
  var setHeight = function() {
    $('.js-hover-text').each(function(){
      if($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $('.js-hover-cont').css('height', maxHeight);
  }
  var show = function(eq) {
    $('.js-hover-text').eq(eq).addClass('active')
      .siblings().removeClass('active');
  }
  var init = function() {
    setHeight();
    $(window).on('load', setHeight);
    $('.js-index-hovers').on('mouseleave', function(){
      show(0);
    });
    $('.js-index-hover').on('mouseenter', function(){
      show($(this).index() + 1);
    });
  }
  init();
}
$(function(){
  footerCenter.init();
  grayscale.init();
  hoverText();
  if($('.js-index-body').length) {
    indexAnimation.init();
  }
});
