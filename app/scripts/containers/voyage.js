import React from 'react';
import GoogleMapsLoader from 'google-maps';

export default class Voyage extends React.Component {

  componentDidMount() {
    GoogleMapsLoader.KEY = 'AIzaSyC2OigUrGT2Jhb0T7g5wzroASFt5eRhCG4';
    GoogleMapsLoader.load((google) => {
      const mapOptions = {
        center: {lat: 24.347, lng: 7.2},
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        mapTypeControl: false
      };

      const map = new google.maps.Map(document.getElementById('maps'), mapOptions);

      const mapData = new google.maps.KmlLayer({
        url: 'http://www.google.com/maps/d/kml?mid=1P_deVSzm6sY1TRBfFdKjFRnTOWo'
      });

      mapData.setMap(map);
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
