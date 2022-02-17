import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../Components/SplashScreen/SplashScreen";
import Description from "../Components/Description/Description";
import Dashbord from "../Components/Dashbord/Dashbord";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Dashbord" component={Dashbord} />
    </Stack.Navigator>
  </NavigationContainer>
);
