import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainDrawer from "./MainDrawer";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    // Create a StackNavigator 
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        {/* The Main Screen will be from the MainDrawer file... 
        // In MainDrawer file, we will define the Drawer -> Main and Setting
        */}
      <Stack.Screen
        name="Main"
        component={MainDrawer}
        // hide the title , get the title from the Drawer menu
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
