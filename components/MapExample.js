import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";

import { Map, TileLayer } from "react-leaflet";

import React from "react";
import { View, StyleSheet } from "react-native";
// import { Map, TileLayer } from "react-leaflet";

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  );
}

const MapExample = () => {

    const s = "pk.eyJ1IjoicG9saWdvbm9zYXBwIiwiYSI6ImNrcGE4ejdwMTBmb2YycHA5ZnVieDF2b2wifQ.UPvIippcuulahfvjZ3LAHg";
    const x = 100;
    const y = 100;
    const z = 100;

  return (
    <View style={styles.container}>
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Map>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapExample;
