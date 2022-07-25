import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneScreen from "../../Screens/PhoneScreen";
import OtpScreen from "../../Screens/OtpScreen";
import ProfileScreen from "../../Screens/ProfileScreen";


const Stack = createNativeStackNavigator();

export const AppNavigation = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator>


                <Stack.Screen
                    name="PhoneScreen"
                    component={PhoneScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="OtpScreen"
                    component={OtpScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{ headerShown: false }} />

            </Stack.Navigator>

        </NavigationContainer>

    );
}




export default AppNavigation;