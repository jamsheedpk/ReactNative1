import React, { Component } from 'react'
import {
    MapView,
   StyleSheet
} from 'react-native';
//import MapView from 'react-native-maps';

export default MapViews= (props) => {
   return (
    //   <MapView
    //      style = {styles.map}
    //      showsUserLocation = {false}
    //      followUserLocation = {false}
    //      zoomEnabled = {true}
    //   />
    <MapView
        style={styles.map}
          provider={null}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
   )
}

const styles = StyleSheet.create ({
   map: {
      height: 400,
      marginTop: 80
   }
})