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
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABlCAMAAAA2wz6jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACKFBMVEUAAACNlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ6NlZ4AAADnPltQAAAAtnRSTlMAJFuCqc/n+gxco+QCRqX1BmfZAVnh4CvGA3kXvjFH9E5LNvYb6AXI0EBkzqf4hsAw5WxPpvz9ugkmBNKSnmr+IsPqfTJ4tdWdXY3cmB7Mb5+yY7bx8w98N3OJlMqXem7Fu1YQ3rfaUKAha+0aB7h0OpU78O/fI4Rx90JMKgr7x+JiKRMN0b9tzREZOEgoSpvJDkPESUF73Qhm2z0grIX5kI/YiNQ0M4AtLHUl8mW5YBhaqxXrUTAd/c4AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAEVUlEQVRYw63Z/V+TVRQA8KO8TQY4HO++II6XTQOCdOoIFyaalikJaAQZYRgSGS3MNJCkMEUyeyFUCjPLykxTO39f905Hey735dxnnJ/u3XP23Ydnd8895wKgiWXL09IzMrMQMSszIz1t+TJwE54V2V4Uw5u9wmPH5OTmrUR5rMzLzSE7vvxVqItV+T6S4y8oRFMUFfjNUHGJ0eFRUmxwSsuySBD7NstKddDqNUSHx5rVamit1wJia2KtClpXbgUhlq+TQ+uptyjpZq2XQRX2EKMqFkMbAi4gxMAGEaqscgUhVlU6oeoaISEYCoU28s/c9MymWi1VU+2Q6sTr9ezFZ+OjhkbPc5u3aKg6x00KqyXErdtge71aCifdqkgT6iR8nv2MmtVUU2RB2oF6KfoCo1rU1I4E5NlpkPBFNtullnYmHqStaJJ287Q9aqr1CeTLNEpNPO8ltZTpi0t70SgV8bx9agn3xqV6s/Qyz3tFI/F02B81SyU88VWNFN3PEg6gWTrIZsWoiwMso40gvca2nENaqY2tuHaz1NEJcFgLYXspHEGz9DpEutAQR6DRLL3hD3WbIGyEHoMU7X7z6FtGB7EHeg3S29v6+jZj+Fhz6zva53Mv9Buk42zwLh+UDHhOHFNL/TBIlbDwPRhS/2IGAckSvs+GJ5WUjYQfsPHuJZGG2fjDJZEy2LhUVTxAzEKq4o+EIvkbYvRVgPz7YfGR/A39UG8hjbDxKeXtaLaQ+IsfK6RmOG0hsR20+BOFdBrOWEhn4VNl/XgGRsfI0h7f0Q4VNDYKcE56ZUssFusQpPRxVMY5MD5Wk6SWz7LbVWmHWdp5soQZE5+XKZb4eb7UviBLOOmHU9JtLxjfgy/QJb5rd34pyboQl/rK6VI3X+WLl1R555NipYsuRS+y6eJNpOtp/XQpQJZwik0vizmBS4miLo0unWXT7WJO2kKd6fGSpcuSOtGb1GVXkKVpNs0XUr5KLsivEKVCnvy1M+OKo0e4Ok6TeJm00ZkwftXZuHxDkr5lve93Qvf2vdhMDROkmk6IzAgtzLAIgecHk5S1b7bv2nXh8nXJ6cgNaeWK1+bm5n7kg2DZT73z4tXoDZDETbSPn2UQzN6yhm7NSiWYCltC4SlQxC+WUp0KgqHbVtDtIaUEv45ZQGO/gSbuWEh3dBBUB8lQsForwe/zRGj+DzDEDFGaMUEQMTcWPGoiRgmmawlQ7bQZAviTIJ2kQJDTYoRaiIejd01HUYG7NAhUPd9CnKBC4J/UQpOEA9ZEDHRooL8G6BDAPY10zwYC/1Yl9LfF38ajUtHPYKzSDgK4r5Du20Kqs402ewgeyDrkwQcuJPhHIhW4gQAeLoIeuoPg0WMBevzIpQT/CtJxtxBAngPKcw/BREMS1DCRguQoZStSgZJLzIOpQf+XsmJhah+5T6XcVKFEv9OTOgSeEQaNWP7bTh6hKEZDSwHxUvbm0kAwemiUkPUfHv0S1FJEDvcAAAAASUVORK5CYII='
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