import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Image, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { Ingredients } from "../../components/ingredients";
import { Instructions } from "../../components/instructions";

export function Detail() {

    const route = useRoute();
    const navigation = useNavigation();

    const item = route.params?.data;

    useLayoutEffect(() => {

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={ () => console.log("Testando!") }>
                    <Ionicons 
                        name="heart"
                        size={28}
                        color="#FF4141"
                    />
                </Pressable>
            )
        })

    }, [navigation, route.params?.data])

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
                <View style={styles.playIcon}>
                    <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
                </View>

                <Image 
                    source={{ uri: item.cover }}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.ingredientsText}>Ingredientes ({item.total_ingredients})</Text>
                </View>

                <Pressable>
                    <Feather name="share-2" size={24} color="#121212" />
                </Pressable>
            </View>

            {item.ingredients.map( (item) => (
                <Ingredients key={item.id} data={item} />
            ) )}

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de preparo</Text>
                <Feather 
                    name="arrow-down"
                    size={24}
                    color="#FFF"
                />
            </View>

            {item.instructions.map( (item, index) => (
                <Instructions key={item.id} data={item} index={index} />
            ) )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F9FF",
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    cover: {
        width: "100%",
        height: 230,
        borderRadius: 5,
    },
    playIcon: {
        position: "absolute",
        zIndex: 99,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    headerDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14
    },
    title: {
        fontSize: 18,
        marginTop: 14,
        fontWeight: 700,
        marginBottom: 4,
        color: "#000"
    },
    ingredientsText: {
        marginBottom: 14,
        fontSize: 16
    },
    instructionsArea: {
        backgroundColor: "#4cbe6c",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 5,
        marginBottom: 14
    },
    instructionsText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 500,
        marginRight: 8
    }
})