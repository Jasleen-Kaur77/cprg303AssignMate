import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainTabs from "./MainTabs";

export default function AppNavigator() {
  const userLoggedIn = false; // temporary

  return (
    <NavigationContainer>
      {userLoggedIn ? <MainTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
