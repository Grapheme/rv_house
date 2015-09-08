window.ContactMap = {
  center: {
    x: 55.742772,
    y: 37.598043
  },
  style: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
  init: function() {
    if(!$('#contacts-map').length) return;
    var self = ContactMap;
    var myLatlng = new google.maps.LatLng(self.center.x, self.center.y);
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: self.style,
      scrollwheel: false, disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(document.getElementById("contacts-map"),
        mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Всеволожский переулок, 5',
      icon: 'data:image/png;base64,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'
    });
  }
}
window.Placeholder = {
  enable: function(elem) {
    elem.parents('.js-input').addClass('active');
  },
  disable: function(elem) {
    var parent = elem.parents('.js-input');
    if(elem.val() == '') {
      parent.removeClass('active');
    } else {
      parent.addClass('active');
    }
  },
  check: function() {
    var self = this;
    $('.js-input').each(function(){
      self.disable($(this).find('input'));
      $(this).addClass('loaded');
    });
  },
  init: function() {
    var self = this;
    var inputs = $('.js-input');
    inputs.find('input').on('focus', function(){
      self.enable($(this));
    });
    inputs.find('input').on('focusout', function(){
      self.disable($(this));
    });
    self.check();
  }
}
$(function(){
  google.maps.event.addDomListener(window, 'load', ContactMap.init);
  Placeholder.init();
});