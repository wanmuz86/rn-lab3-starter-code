// We will declare two tabs
// 1st Home  -> HomeScreen
// 2nd Profile -> ProfileScreen
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>

  )
}