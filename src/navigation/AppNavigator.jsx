import React from "react";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< Updated upstream
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
=======
<<<<<<< Updated upstream
import AuthNavigator from "./AuthNavigator";
>>>>>>> Stashed changes
import MainTabs from "./MainTabs";
=======
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import MainTabs from "./MainTabs"; // you already have this
>>>>>>> Stashed changes

<<<<<<< Updated upstream
const Stack = createNativeStackNavigator();
=======
export default function AppNavigator() {
<<<<<<< Updated upstream
  const userLoggedIn = false; // temporary
>>>>>>> Stashed changes

export default function AppNavigator() {
  return (
<<<<<<< Updated upstream
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />

      {/* Main App */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
=======
    <NavigationContainer>
      {userLoggedIn ? <MainTabs /> : <AuthNavigator />}
=======
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        {/* Main app after login */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
>>>>>>> Stashed changes
    </NavigationContainer>
>>>>>>> Stashed changes
  );
}