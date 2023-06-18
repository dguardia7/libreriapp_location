import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';

const DetalleScreen = ({navigation, route}) => {
    const [batteryLevel, setBatteryLevel] = useState(null);

    useEffect(() => {
        getBatteryLevel();
    }, []);

    const getBatteryLevel = async () => {
        setBatteryLevel(await Battery.getBatteryLevelAsync())
    };

    return (
        <View style={ styles.mainView }>
            <Text style={ {fontSize: 16, paddingBottom: 10} }>Batería: { batteryLevel }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
});

export default DetalleScreen;