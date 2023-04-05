import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { FoodList } from "../../components/foodlist";

import api from "../../services/api";

export function Search() {

    const route = useRoute();

    const [receipes, setReceipes] = useState([]);

    const searchName = route.params?.name;

    useEffect(() => {

        async function fecthReceipes() {
            const response = await api.get(`/foods?name_like=${searchName}`);
            setReceipes(response.data); 
        }

        fecthReceipes();

    }, [searchName])

    return (
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={receipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <FoodList data={item} /> }
                ListEmptyComponent={ () => <Text style={styles.text}>Não encontramos o que está buscando!</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f9f9",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    text: {
        fontSize: 16
    }
}) 