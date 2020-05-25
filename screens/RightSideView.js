import React, { useState, useEffect, useCallback } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import 'react-native-gesture-handler';

import * as areaActions from '../Redux/actions/area'
import { useSelector, useDispatch } from "react-redux";

import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

import RightSideFlatListView from '../screens/RightSideFlatListView';

const Stack = createStackNavigator();

function RightsideViewFunction({ props }) {
    const [isLoading, setIsLoading] = useState(false);

    const areaList = useSelector(state => state.areaListRoot.areaList)
    const dispatch = useDispatch();
    const loadAreas = useCallback( async()=>{
      setError(null)
      try {
        await dispatch(areaActions.fetchArea())
      } catch (err) {
        setError(err)
      }
    }, [dispatch, setIsLoading])


    let listView = props => (
        <RightSideFlatListView 
            list={areaList}
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
        <NavigationContainer independent={true} >
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
            <RightsideViewFunction list={props.list}/>
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