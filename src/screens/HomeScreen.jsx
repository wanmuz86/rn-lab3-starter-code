import { View, Text, Pressable, StyleSheet } from "react-native";

import React from 'react'

// navigation is passed from the props
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        {/* Home Title */}
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.subtitle}>Home tab inside Tabs, inside Drawer.</Text>

    {/* A button of type Pressable to open the navigation drawer using openDrawer method of navigation */}
      <Pressable style={styles.button} onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttonText}>☰ Open Menu</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 14, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 16, opacity: 0.8, lineHeight: 22 },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#111",
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "600" },
});

