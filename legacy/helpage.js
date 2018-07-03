import React from 'react';
import GoogleMapsLoader from 'google-maps';

export default class Voyage extends React.Component {

  componentDidMount() {
    GoogleMapsLoader.KEY = 'AIzaSyC2OigUrGT2Jhb0T7g5wzroASFt5eRhCG4';
    GoogleMapsLoader.load((google) => {
      var mapOptions = {
        center: new google.maps.LatLng(24.346596615611777, 7.2),
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        mapTypeId: 'helpagemap',
        mapTypeControl: false
      };

      const map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 4,
          center: {lat: -25.363, lng: 131.044}
        });

      var helpAgeMapStyles = [
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {
          "featureType": "administrative",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {
          "featureType": "landscape",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {
          "featureType": "road",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }, {}
      ];

      var styledMapOptions = {
        name: 'HelpAge'
      };

      var helpAgeMapType = new google.maps.StyledMapType(helpAgeMapStyles, styledMapOptions);

      map.mapTypes.set('helpagemap', helpAgeMapType);

      console.info(map);
      console.log('Google maps load complete')
    })
  }

  render() {

    return (
      <div style={{
        height: '600px'
      }} id="maps">
        Map goes in here
      </div>
    );
  }

}
