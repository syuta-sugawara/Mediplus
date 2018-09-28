import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

export default class Map extends Component {
  static navigationOptions = {
    header: null,
  };

  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker
        key={i}
        title={place.name}
        coordinate={place.coords}
      />
    ));
  }
  render() {
    const { region } = this.props;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation
          showsMyLocationButton>
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
