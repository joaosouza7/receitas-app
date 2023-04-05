import { Text, StyleSheet } from "react-native";

import { View } from "moti";

export function Logo() {
    return (
        <View
            style={styles.logoArea}
            from={{
                    opacity: 0,
                    translateX: -50,
                }}
                animate={{
                    opacity: 1,
                    translateX: 0
                }}
                transition={{
                    type: "timing",
                    duration: 750
                }}
         >
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 10,
        paddingLeft: 16,
        paddingRight: 22,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 10
    },
    logo: {
        fontSize: 20,
        fontWeight: 700,
        color: "#FFF"
    }
})