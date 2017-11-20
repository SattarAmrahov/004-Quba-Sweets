$(document).ready(function(){
    $(".navbar-nav .nav-item").click(function(){
        $(".navbar-nav .nav-item").removeClass("active");
        $(this).addClass("active");
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