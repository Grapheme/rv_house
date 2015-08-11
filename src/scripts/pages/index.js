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
indexHover.init();