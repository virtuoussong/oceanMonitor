import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

let DATA =[
    {id: 0, name: "여수바다1"}, 
    {id: 1, name: "여수바다2"},
    {id: 2, name: "여수바다3"},
    {id: 3, name: "여수바다4"},
    {id: 4, name: "여수바다5"},
    {id: 5, name: "여수바다6"},
    {id: 6, name: "여수바다7"}
]
export default RightSideView = (props) => {
    const [locations, setLocations] = useState([])

    useEffect(()=>{
        setLocations(DATA)
    }, [locations])

    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={locations}
                renderItem={(item) => (
                <Text style={styles.title}>{`${item.item.name}`}</Text>
                // console.log("data item is",item)
                )}
                keyExtractor={item => `${item.id}listKey`}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignSelf: "stretch",
        paddingHorizontal: 16,
        backgroundColor: 'white',
        
    },
    title: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8 
    }
});