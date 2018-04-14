$('#button').on('click', () => {
    $('#button').toggleClass('is-active');
    $('.content__sidebar').toggleClass('content__sidebar--active');
});

var map;
function initMap() {
  var uluru = { lat: 52.521818, lng: 13.405952 }; 
  map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 14,
    scrollwheel: false,
    styles: [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
  });
  
  let icons = {
    position: {
      icon: {
        url: '',
        size: new google.maps.Size(60, 60),
        scaledsize: new google.maps.Size(60, 60)
      }
    },
    logo: {
      icon: {
        url: '',
        size: new google.maps.Size(90, 90),
        scaledsize: new google.maps.Size(90, 90)
      }
    }
  };
  
  let features = [
    {
      position: new google.maps.LatLng(49.587415, 34.556482),
      type: 'position',
      contentString: 'First',
      content: 'First market'
    },
    {
      position: new google.maps.LatLng(49.586921, 34.551794),
      type: 'position',
      contentString: 'Second',
      content: 'Second market'
    },
    {
      position: new google.maps.LatLng(49.589001, 34.554401),
      type: 'logo',
      contentString: 'Third',
      content: 'Third market'
    }
  ];
  
  var infowindow = new google.maps.InfoWindow();
  
  features.forEach(feature => {
    let  marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
      title: feature.contentString
    });
    
    marker.addListener('click', function() {
      infowindow.setContent(feature.content);
      infowindow.open(map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        marker.setAnimation(null)
      }, 1400);
      
    } );
  });
  
}

google.maps.event.addDomListener(window, 'load', initMap);



   
