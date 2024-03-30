import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "@screens/HomeScreen";
import ToDoAddScreen from "@screens/ToDoAddScreen";



export default function Navigate() {
    const RootStack = createStackNavigator();

    return (
    <NavigationContainer>
        <RootStack.Navigator mode="modal">
            <RootStack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ headerShown: false}} />
            <RootStack.Screen 
            name="ToDoAddScreen" 
            component={ToDoAddScreen}
            options={{ headerShown: false}} />
        </RootStack.Navigator>
    </NavigationContainer>
    );
}