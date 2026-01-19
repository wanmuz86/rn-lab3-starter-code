// THe drawer will have two menus
// The first menus is Home -> MainTabs.   
// Second menus is Settings -> Settings Screen


import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabs from "./MainTabs";
import SettingsScreen from "../screens/SettingsScreen";

// Create the Drawer
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Drawer.Screen
        name="Tabs"
        component={MainTabs} // Reference / Link to Tabs Declaation (two tabs / Home / Profile)
        options={{ title: "Main" }}
      />
      <Drawer.Screen
        name="Settings" // My page name
        component={SettingsScreen} // Reference to the Settings Screens
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );

}