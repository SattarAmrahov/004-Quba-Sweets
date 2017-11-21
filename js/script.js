$(document).ready(function(){
    $(".navbar-nav .nav-item").click(function(){
        $(".navbar-nav .nav-item").removeClass("active");
        $(this).addClass("active");
    });
    
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash - 70;
      });
    } // End if
  });
    
    
    
    
    
    
    $(window).scroll(function () {
        var window_width = $( window ).width();
        if ( window_width > 975) {

            var scrollTop = $(window).scrollTop();
            if (scrollTop < 100) {
                maxHeight = 150;
            } else if (scrollTop > 400) {
                maxHeight = 75;
            } else {
                maxHeight = 150 - 75 * ((scrollTop - 200)) / 200;
            }
            $('nav').css({
                'max-height': maxHeight + "px"
            });
        } 
    });


    
    $('.cd-gallery .popup-image').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below

      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
        
        
    });

    
    
});
    
    
    
    
function initMap() {
    var uluru = {lat: 40.4192291, lng: 49.8185043};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#EC407A'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#EC407A'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#880E4F'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#880E4F'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#F48FB1'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });
    
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'Quba Şirniyyatı!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    });
//    marker = new google.maps.Marker({
//        map: map,
//        draggable: true,
//        animation: google.maps.Animation.DROP,
//        position: {lat: 59.327, lng: 18.067}
//      });
      marker.addListener('click', toggleBounce);
  }


function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}