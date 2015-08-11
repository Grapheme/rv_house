window.ContactMap = {
  center: {
    x: 55.754816,
    y: 37.620135
  },
  style: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],
  init: function() {
    var self = ContactMap;
    var myLatlng = new google.maps.LatLng(self.center.x, self.center.y);
    var mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: self.style,
      scrollwheel: false, disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(document.getElementById("contacts-map"),
        mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAB2CAYAAADImXEZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYmQ1MGMxMC01NGQwLWQ3NDQtYmFiNS03MjY2YWZiY2JjNGIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwMzE2QkMzODQ3MTFFNTkwNUREQjBEOTg3MEU2MTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwMzE2QkIzODQ3MTFFNTkwNUREQjBEOTg3MEU2MTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTkyYzgzZmUtNTlmOS0yMTRjLTljNzgtYjAwMWNjYzFlNTk4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDczZThiMWEtMzc5OC0xMWU1LWEwYTQtZWRlMmFhNzNkNjgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jc2g7gAAED9JREFUeNrsXQmUFNUVfdWz4CCIEFEUxXFQCbiQQcVjEuMWzVETg1uOGhMTQ8TdYw6JSdzQHHE5Rk2MMRpX0HgSxTWiEhNc4waRxTiAOoIKCrIIjODMdHfl3dQr51N2dVf/qu6pqv73nHd6prvr1+v6t957//33f1m2bZOBQRhkzCUwMCQyMCQyMCQyMKB6cxPRHiy7sYxh2ZZlR5atWLZk6cNSx5Jl2ciylmUFy2KWpSyzWBawtNXyRbRqcHS2DcthLN9i2ZtlRARtzmV5ieVJln+ydBgSpRPfYTmZ5XCW/hU8z8csj7JMZXnWkCj5aGCZwPJTlj174fwvsvye5W+GRMnED1gujMhdhcVzLJNZnjIkSgb2Zfkty9diqNsDLBNZlpghfnxxGcvLMSUQcBzLfJbTjCWKH5olkP16gnT+C8upLJ2GRL2PQ1juZxmYQN3fYDma5W3jzno3eH46oQQCdmd5leWrhkS9Awzdp6TAFQ+UVMChxp1VF+NZ/pzC0fJBLM8YElUex1N6k3eYo9uLZZ4hUeXQyvIfSjdWkpMgXW1IFD22kFHM4IjbzbO8xzJHLMAbch7M0mPWvoulkWUAy1CWnSUgxjTKV1iGVSC2fClJwXaSSDQj4uATM+2Pi2uc1dLSAiKh7KNeXuuEPHjNCZlyInA7ufb29h34dR+W77EcydIvQv2QdZ9oSBQdkOG9JaK2YF3uYfkDywImD0iymVgYEGIkOTVFKBnpr5BoPctylvdZ3pShOSzWZ0wmfP5llrPJqRQYEJGuyLz/25AoPNCZyyJwGbAe/2C5RCwPLM4u5JSGHC4uqp9YH8z+WwXasKWdTrFk/2WZzvIEy1tMJnyGGiVMvxxG4Yv+YB2b5byGRCHwCMtRIdtYxXI5y41MHhKr8RNyssUg6eYh2v5ULNRDLLfDujGZ8P45QtgvhdR9kpDSkEgT+0VgzhEon8XyHBOoLznzVWeygE19ItQV1gns+SPLHUykDfx6AIhLTglumMAfZbsrDIn08ArL2BDHI275IctCJhBGU5eyfFNGepXCOnKmYi5jIs2T4fqUkL/jNnIK6wyJysT+5BRzhRkmI8htZwIhPkFR2F5V1H82y4VMpKfE6t0jllUXQyU2jB3iPHd2cYhjF8iIDgQax6/XVZlAJOe7Ts7fLvosCNHe+cYSlYfhpF8esVxioGncgQdJTLJbgMB7pQz1h0istFpGYFg+1DfEb8EI7hy2SDP59ViWmySY10lNbEMxrD+KqyUar3kc1obdLQTalV+vDkAgEksFi3EKy2vyXjc5VZIXScd/rKkTzn+16DNN9Nuo0Q5yT8cYdxYcJ2geh/Vfk7nDkOu5ipzkYRC8Ja5mNvXMWQ2SuGyADLNPYpmpqRf0uEr0ukzOo4OTDYmCAcm6Zo3j4I5u4I7C6OgMcqYhgqK/crc3yt8NMrSGazxCRly/Iv1SDehzBusHK/Q7TcuGkeWWhkTBLna5sMUN/ZWcKYszFTKUcx0s+mKmGjERMtr9JOVwHznzaOWiUfSCfg+IvrZGG4cYEpXGARrHIDCeIvNgqHjcJWKdkFdyqwew7v49zXag1+mi51TRu1wcbEhU2q2M0TgOQ2isg99e4imrAtepTrF6uiMkS/SDnphve0ejjX0NiUqPZMqdAf+M5Xm+uzvEFW5XAb0whbFe/t5OM2ZzgTjrSNYXc24viP7lYBSFn49LNYl21zgGWdzpEgiPk9eosVxkJxkhhZmwVfWcTuVnoZsoHkvDY0sinVhmITlTHKgw3LMCrgwVjzdLQHyFjNTCwBI9h4neCzXa2NmQyB/baxyDmuuNEktFuWUM3M2/yEk0onQEZR7YniYfYey3kfRqxneMU6fFbac0nfrp+UqsEMXvcS3ZveRUP6JNlKoeJB3+lMRE3yX96ZB66smkz9c4fps4dVrcLJHOStZ2eW2JOB6aLR28UgJrAFls5IhQUoIk5Csh4qJmj/6Vvk41QyKdO3uFYsWijIcGKG5tjfyNjkfCECUdd7H8UpNIlmJNdDLXTYZE0brX9SEIGMStNXgsHMj6Y5atyZkCQSVjZ4gbZp2mJTMk8oFO0Notr3VV1BMZ7OHyN1Z+LA1B0u4qXaeaIZHOHe2a9mwEVqcci9moHKtTq50L4Zq6DIn8sU7TKrixiy6yyh0e5C6H9VglBMJKVZ0s+aee2EvnWEOiAtCZkHQ78KMQZn6tvK4OaA1Rf7SYnKVMEzQsWV70BbbV0PeTpAeylYROITqyt8/JULlb07V8g5w5LMxJ7SDv2UUCeUycIk/0G3KmQnTiOHdor5OlX25I5A+dXVVb5XWeuCUdEqGI/kQZ9WzhiVkKxSPD5Dy6FiFLPdvHjNY4fmmcOi1u7kxnHgk7cyDnMjdEpzbJkH1ggFEerNWBLItYvs9yK/XkkcpxR3NF71YNfRcbEvlD50EryFSjkO1Dch7YUo3hL1zeSUKeiUKkoCOmvOj5oejdojGqe9eQyB+INcqtGoQFOULijGlVHP7CAh7X3t6OGAkJx6DP8egSPbtF763LPO+7xp2VvsvmaMR1+3BnIk6ZQfqlq+Vic+opDsN2M38PeBz0m6HsbVRuXLqATLKxJF7QOAYlJFiThcnS24sExVGijjadfrAD3iS3i57HkV7py6y4dVgcSaSz/h4jqhP57kadzp3k7ARSaaxXrB4s0v4BjoFed4qeJ5DexhKvGRIFu0g626igZPQs7iDMil9LetlvKmBZbB8rA9f5cEtLS5NYwVJ7KEGfa0U/JCh31dAJ8dTLhkTBRi8zNI7DujDMru/BHYUdOO4PqUeHYnE+85ABKzVulLgIGy0g6VgqP3W/6IXt/LBHkk4VJlzZakOiYHhM87hmcp5xhmkIrFadGUIHxCvuTrGD5D0kCeeKfqhMxELGKwKMsGaKPtBrEunXSD8dx86K664guEsxt9RX04JcSc6afBTE30bB1+SrgNv5QCzMDqIT5tWWyHtB65zhnsfLhle/FjLp7jKLNWevGhIFB7YGPl7zWBDwPLTBREIVIh6huXcv/Aa4n3OZQFjVgW2KsQZ/iGZbIPQwiuEmoHHe5OqeEMeio65nGScdiED2GapeIhLnQfJxgpx/nOgzJESbD1FMd5GNsyWqE4uyVYg2MLVwLssDbJFQMnIBOROtgyuo98cSK13DBFoq+SBYwm1DtosHAr4Yx46KsyXKhbRGJB2Hea0LuEM/lJHU6RJXrI9Y3/XSLto/n8+3TEh7awQEWhxXAsXdEgGotVkUQTuYp3pEgtq32SoNkdzOqXKOfpo3VF4CeRSp3cHyIJPnIxl9IbhHzVEURfVIIVxiSKQPZLD3j6gtBKdIRN7KROqUofmB5EyE7iduDrXT7vM9Mh7CuM/16BK3hXhnusRbK5hAGLVhq+Cfk96Uhh8w0/+uIZE+vh0ib+QHLEpEsvAxJhOqBDeT2Guk5H92FEINEEsCS7ZWiIMhPjbzRNkK5sDwbA/UBWGJNXbR3yNiXbGU+5A4d1BSHhCDUtKdIm7Tlrsbz/t4QixeOcVlA8VCYhe1w0Q/qwK//agK3EQ1SSIM0f9Uwfbh2tynB71OToXl+0IqWKG+1PO8M8RQ2IwBa/+RhOxTQb3eo5ht3pBkEtWLK9mSagvnSXog1kjK06gRzF5TYwTC2rJEPCw5SY80v56iz+3EGZgi2WhIFC1QjjG5RgjUKakIMiSKHnh8wic1QKIbqPxlSIZEAYEk30UpJxAs7pVJUjiTwIt8E1VvRUdvAA+1WZskhZP0SHMVKK14KIUEggsbQjHbOiaNlgh4mGJY4RcBfpE0AiXZEgGYo5qXIgJhUeLIJCqeSfBFxyTqlBSRaEJSFU+yJQJQPI9Z+KaEE+hRcmqPEolMwi8+MthnJfw3YErntCT/gKSTCMCy6VkJ1n8ixWzns1pzZy6iKqPtjbhuz6Rf/DRYIgA1zpMSqPcJabj4aSERgKc8tyVI38vJKYJLPNLizlygPvqNBOj5JvU8ZchYopgBBfSXJkDPY9N00dNGItdNvBZj/X5GTnY6NUibO3OBAnos7bFiphe2hjk0bRc7jZYIwEqNU2KmE8o7jknjxU4riYCpFH4tf5Q4mlJaI55mEpFYozgsP76Ywu3aZmKiXsZI6t18zOPkLAVPLdJuiQAkIH/US+denLbhfK2SCLibnNrsaqJbRmKdab+4teDOVDxPzo5j1QC2q3miFi5qhmoL6NhlVTjP2bVCoFokEYbYB1Nln/1xTS+4TkOiKgPbxhxZobbvJWefxppCrcVEKpBDuivC9qpaJ21Zkc7ouI1pkSFDtQuM2KJakv1slASyCjDEEiifWx4CWCGEArRhLFERYAuXc0Mcj53V9pUhfVFS2HKxFZJYPhbBaxWKdWLUHVh2e4ZEDh4kZ26rXLyzcuXK1sGDB3eAIB5yFCKKVYAclo9LsX28RkY+s4p0fl45l5+rsgMSyS5FNEOiHmDFyF5lfH/1kiVL9m5ubv6ggMVQ3UCmSIfUy+cZD8HsIhYq4/meShKvkOezvA8p8p7vFSKNLwkNiXqAjT0xRRJk9/tse3v7fsOHD29TCKB2Mv5vkL/rFILklQ7JCIkaqOcx6jna9PmuVoGOdNvJezrXVo73tuG+lythWfIlPi9IJEMiBV1dXbs3NjbOL/W9tra2o0eNGvWiQoB6T6e5z4etV0iVUzoyJ++r3/m/CuQsZixkdfKe4/MeUuUkLssqx7hWznuMn/u0S7i+gm6u3lDn8+AXF7ttw4YNxzY1NU3zjaJff33imDFjYIHU3fcbPJ3iWqCMx0pklY62aNOd+13rUafENGrnWgoJvNaGPNZJJZBdZEhf6H27QOxW1NXVvCWSYDijWJD6VatWXTBo0KCLvd+dM2fOza2trVMV4tR7rI3t6VzVhbiWopt6MuZ1Sker7k51O64FyYrklOPV72Q91sYq8J28jzWxi1gbu1SAXdMkUvItrkXoI9alkYl0CxPpCPe7ixYtenLEiBE3KrFORgmcLU9Monas6m6yCiHsAp3kdU+28l2VRHYBN5f3fKa2q5KTfL5DAT4jY4kKuzA3pgGB8IwP7DCCpw41rVu37r7+/fu3LFu2bO7QoUOv8MQv3lFNroC7UcmiksH7ea4AIVQyqbFQzoc45ImT7AJxU95n5BZ4OF8IdZMmTap1N+YGwS6JNndJtGbNmoWjR4/ebuzYsdd1dHRYno7OemIclxxditvKelwNXjuVz7uU73eKdBX5jvq/Kl49sh7S5RSy5X3SANqJy5q1RAqJ6sWFuVbIJVGD/K+OoGyfUVLOYxXyPu5G7dxsEetSKN9TaERml8jtBIFfIB0YZnS26cipS+n4PvJ/nWc0o5Kl2xP4+pHA9pAk7yFOrkSisOQwuwRByslQGxKVSR41HiFlBNUp18ZSRlDeIXZW+T9bwALZPplk8vluUHLYZVqPiruaWnZn3gyz5cnveKcsyEM2uwRRimV91byPFdId9f61NCT6PMnmVxZR7A7PB7z7g7qVRMLERF+0DmpHWxEGo6m9Ww2JSluQmiNFufifAAMA2xhR1l18pzUAAAAASUVORK5CYII='
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