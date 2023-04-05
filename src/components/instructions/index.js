import { View, Text, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{index+1} - </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        marginBottom: 14
    },
    name: {
        fontWeight: 700,
        fontSize: 18
    },
    text: {
        lineHeight: 20
    }
})