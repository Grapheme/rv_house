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
  var galleryItems = gallery.find('.preview');
  galleryItems.on('click', function() {
    var slideId = $(this).data().slideId;
    if (slideId !== undefined) {
      slider.goToSlide(slideId);
    }
  });

  gallery.on('mousemove', function(e) {
    var overActive = $(e.target).closest('.preview').is('.active');
    sliderWrapper.toggleClass('faded', !overActive);
  });

  gallery.on('mouseleave', function() {
    sliderWrapper.removeClass('faded');
  });


  function onSlideChange(currentSlide) {
    sliderWrapper.removeClass('faded');
    galleryItems.removeClass('active');
    var active = galleryItems.filter('[data-slide-id="'+ currentSlide +'"]').addClass('active');
    
    // scroll into view slowly
  }

  onSlideChange(0);

  gallery.perfectScrollbar({ 
    minScrollbarLength: 16,
    maxScrollbarLength: 16,
    suppressScrollY: true
  });


});