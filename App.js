import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screen/HomeScreen";
import DetailScreen from "./src/screen/DetailScreen";
import CatalogScreen from "./src/screen/CatalogScreen";
import BatteryScreen from "./src/screen/BatteryScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={
                    {
                        headerTintColor: 'white',
                        headerStyle: {backgroundColor: 'orange'}
                    }
                }>
                <Stack.Screen
                    name="Home"
                    component={ HomeScreen }
                    options={ {
                        title: 'Inicio',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }
                    } }
                />
                <Stack.Screen
                    name="Catalog"
                    component={ CatalogScreen }
                    options={ {
                        title: 'Nuestro catálogo',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }
                    } }
                />
                <Stack.Screen
                    name="Detail"
                    component={ DetailScreen }
                    options={ ({route}) => ({title: route.params.name}) }
                />
                <Stack.Screen
                    name="Battery"
                    component={ BatteryScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
