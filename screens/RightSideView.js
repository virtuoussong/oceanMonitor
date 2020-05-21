import React, { useState, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

import RightSideFlatListView from '../screens/RightSideFlatListView';

// let DATA =[
//     {id: 0, name: "여수바다1"}, 
//     {id: 1, name: "여수바다2"},
//     {id: 2, name: "여수바다3"},
//     {id: 3, name: "여수바다4"},
//     {id: 4, name: "여수바다5"},
//     {id: 5, name: "여수바다6"},
//     {id: 6, name: "여수바다7"}
// ]


const Stack = createStackNavigator();

function RightsideViewFunction({ props }) {

    let listView = props => (
        <RightSideFlatListView 
            onPress={() => props.navigation.navigate("리스트페이지2")}
        />
    );

    let listView2 = props => (
        <RightSideFlatListView 
            onPress={() => props.navigation.navigate("리스트페이지3")}
        />
    )

    let listView3 = props => (
        <RightSideFlatListView 
            onPress={() => props.navigation.navigate("리스트페이지3")}
        />
    )

    return (
        <NavigationContainer independent={true}>
             <Stack.Navigator initialRouteName="리스트페이지" >
                <Stack.Screen name="리스트페이지" component={listView} />
                <Stack.Screen name="리스트페이지2" component={listView2} options={{headerBackTitleVisible: false}}/>
                <Stack.Screen name="리스트페이지3" component={listView3} options={{headerBackTitleVisible: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
       
    ) ; 
}

export default RightSideView = (props) => {
    // const [locations, setLocations] = useState([])

    // useEffect(()=>{
    //     setLocations(DATA)
    // }, [locations])

    // const Stack = createStackNavigator();

   
    // let listView = () => (
    //     <RightSideFlatListView 
    //         onPress={() => navigation.navigate("리스트페이지")}
    //         viewAreaDetail={() => navigation.navigate("리스트페이지")}
    //     />
    // )

    return (
            <RightsideViewFunction/>
        // <Stack.Navigator>
        //     <Stack.Screen 
        //         name="리스트페이지" 
        //         component={listView}
        //     />
        // </Stack.Navigator>
        // <SafeAreaView style={styles.viewContainer}>
        //     <FlatList 
        //         data={locations}
        //         renderItem={(item) => (
        //         <Text style={styles.title}>{`${item.item.name}`}</Text>
        //         // console.log("data item is",item)
        //         )}
        //         keyExtractor={item => `${item.id}listKey`}
        //     />
        // </SafeAreaView>
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