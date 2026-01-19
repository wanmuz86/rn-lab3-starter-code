import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react'

export default function SettingsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>⚙️ Settings</Text>
            <Text style={styles.subtitle}>This screen is inside the Drawer.</Text>



            {/* It will open the Main Tab, as defined in name property of MainDrawer.jsx */}
            <Pressable style={styles.button} onPress={() => navigation.navigate("Tabs")}>
                <Text style={styles.buttonText}>Back to Main Tabs</Text>
            </Pressable>

            {/* A button created as a Pressable , to close the drawer */}

            <Pressable style={[styles.button, styles.secondary]} onPress={() => navigation.closeDrawer()}>
                <Text style={styles.buttonText}>Close Menu</Text>
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
    secondary: { borderColor: "#444", opacity: 0.9 },
    buttonText: { fontSize: 16, fontWeight: "600" },
}
)