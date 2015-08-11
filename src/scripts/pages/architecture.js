$(function () {

  var sliderWrapper = $('.slider-wrapper');
  var sliderEl = sliderWrapper.find('.slider');
  var slider = sliderEl.bxSlider({
    pager: false,
    prevText: '',
    nextText: '',

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

  galleryItems.on('mouseleave', function() {
    sliderWrapper.removeClass('faded');
  });


  function onSlideChange(currentSlide) {
    sliderWrapper.removeClass('faded');
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


  var dayNight = $('.day-night');
  var dayNightButton = dayNight.find('.switch');
  dayNightButton.on('click', function() {
    dayNight.removeClass('show-tip');
    // switch?
  });




});