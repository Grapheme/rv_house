function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;
  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

$(function () {

  if (!$('body').is('.architecture')) return;

  var sliderWrapper = $('.slider-wrapper');
  var sliderEl = sliderWrapper.find('.slider');
  var dayNight = $('.day-night');
  var slider = sliderEl.bxSlider({
    mode: 'fade',
    pager: false,
    prevText: '',
    nextText: '',
    speed: 500,
    preloadImages: 'visible',
    onSlideBefore: function() {
      var current = slider.getCurrentSlide();
      onSlideChange(current);
    }
  });



  var gallery = $('.preview-gallery');
  var galleryConent = gallery.find('.container');
  var galleryItems = gallery.find('.preview');
  galleryItems.on('click', function() {
    var slideId = $(this).data().slideId;
    if (slideId !== undefined) {
      slider.goToSlide(slideId);
    }
  });

  galleryItems.on('mousemove', function(e) {
    var overActive = $(e.target).closest('.preview').is('.active');
    sliderWrapper.toggleClass('faded', !overActive);
  });

  var allowDisableFade = false;

  galleryItems.on('mouseenter', function() {
    allowDisableFade = true;
  });

  galleryItems.on('mouseleave', function() {
    if(allowDisableFade) {
      sliderWrapper.removeClass('faded');
      allowDisableFade = false;
    }
  });


  function onSlideChange(currentSlide) {
    if(getCookie('sliderTip') == 'showed') {
    } else {
      var allowDeleteFade = false;
      sliderWrapper.addClass('faded');
      dayNight.addClass('show-tip');
      $(window).on('load', function(){
        setTimeout(function(){
          allowDeleteFade = true;
        }, 3000);
      });
      $(window).on('mousemove click scroll', function(){
        if(!allowDisableFade && allowDeleteFade) {
          sliderWrapper.removeClass('faded');
          dayNight.removeClass('show-tip');
          allowDeleteFade = false;
          setCookie('sliderTip', 'showed', {
            expires: 3600*24
          });
        }
      });
    }
    if(!$('.preview-gallery').length) return;
    galleryItems.removeClass('active');
    var active = galleryItems.filter('[data-slide-id="'+ currentSlide +'"]').addClass('active');
    
    // active[0].scrollIntoView();
    var scrollTo = active.position().left + gallery.scrollLeft() - gallery.width() / 2;
    gallery.animate({ scrollLeft: scrollTo });
  }

  onSlideChange(0);

  gallery.perfectScrollbar({ 
    minScrollbarLength: 16,
    maxScrollbarLength: 16,
    suppressScrollY: true
  });


  var SHADOW_INACTIVE = 40; // пикселей от края когда тень не нужна
  var galleryWrapper = gallery.parent();
  var galleryOnScroll = function() {
    galleryWrapper.toggleClass('shadow-left', gallery.scrollLeft() > SHADOW_INACTIVE);
    galleryWrapper.toggleClass('shadow-right', galleryConent.width() - gallery.width() - gallery.scrollLeft() > SHADOW_INACTIVE);
  };

  gallery.on('scroll', galleryOnScroll);
  galleryOnScroll();



  function debounce(f, timeout) {
    var timerId;
    return function () {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(function() {
        f();
      },timeout);
    };
  }

  var OnResizeDebounced = debounce(function() {
    // console.log('resize!!!');
    gallery.perfectScrollbar('update');
  }, 300);


  $(window).resize(OnResizeDebounced);


  var dayNightButton = dayNight.find('.switch');
  dayNightButton.on('click', function() {
    dayNight.removeClass('show-tip');

    // сделать что-то с мобильными - после клика подсказка не исчезает
  });

  $('.js-switch-time').on('click', function(){
    $('.js-slider-container').toggleClass('show-night');
  });
});