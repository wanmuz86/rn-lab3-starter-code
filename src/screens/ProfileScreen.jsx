import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react'

export default function ProfileScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>👤 Profile</Text>
            <Text style={styles.subtitle}>Profile tab inside Tabs, inside Drawer.</Text>

            <Pressable style={styles.button} onPress={() => navigation.openDrawer()}>
                <Text style={styles.buttonText}>☰ Open Menu</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create(
    {
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
    }

)