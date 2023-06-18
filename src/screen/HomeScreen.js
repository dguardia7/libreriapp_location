import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({navigation}) => {

    return (
        <View style={ styles.mainView }>
            <Image
                style={ {
                    width: 100,
                    height: 100,
                } }
                source={ {
                    uri: 'https://cdn-icons-png.flaticon.com/512/2784/2784389.png',
                } }
            />
            <Text style={ {color: 'orange', fontSize: 20, fontWeight: 'bold', margin: 10} }>
                Bienvendios a la libreriApp
            </Text>
            <Button
                title="Ver catálogo"
                onPress={ () => {
                    navigation.navigate("Catalog")
                } }
            />
            <Button
                title="Ver batería"
                onPress={ () => {
                    navigation.navigate("Battery")
                } }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HomeScreen;