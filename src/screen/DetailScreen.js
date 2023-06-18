import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DetalleScreen = ({ navigation, route }) => {
  const book = route.params.book

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (location) {
    return (
      <View style={styles.mainView}>
        <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>ISBN:</Text>
        <Text style={{ fontSize: 16, paddingBottom: 10 }}>{book.isbn}</Text>
        <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>Páginas:</Text>
        <Text style={{ fontSize: 16, paddingBottom: 10 }}>{book.pages}</Text>
        <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>Lenguaje:</Text>
        <Text style={{ fontSize: 16, paddingBottom: 10 }}>{book.language}</Text>

        <MapView style={styles.map}>
          <Marker
            key={location.timestamp}
            coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
            title="Tu ubicacion"
            description={book.isbn}
          />
          <Marker
            key={book.id}
            coordinate={{ latitude: book.location.coordinates[0], longitude: book.location.coordinates[1] }}
            title={book.name}
            description={book.isbn}
          />
        </MapView>
      </View>
    )
  }
  else {
    return (
      <View style={styles.mainView}>
        <Text style={{ fontSize: 16, paddingBottom: 10 }}>Waiting...</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  map: {
    width: '100%',
    height: '40%',
  },
});

export default DetalleScreen;