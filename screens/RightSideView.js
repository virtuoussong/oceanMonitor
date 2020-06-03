import React, { useState, useEffect, useCallback } from "react";
import { createStackNavigator, HeaderBackButton, headerLeft } from '@react-navigation/stack';
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

// import RightSideFlatListView from '../screens/RightSideFlatListView';
import RightSideArea1 from '../screens/RightsideView/RightSideArea1';
import RightSideArea2 from '../screens/RightsideView/RightSideArea2';
import RightSideArea3 from '../screens/RightsideView/RightSideArea3';
import RightSideArea4 from '../screens/RightsideView/RightSideArea4';

const Stack = createStackNavigator();

function RightsideViewFunction({ props }) {
    // const [isLoading, setIsLoading] = useState(false);

    // const areaList = useSelector(state => state.areaListRoot.areaList)
    // const dispatch = useDispatch();
    // const loadAreas = useCallback( async()=>{
    //   setError(null)
    //   try {
    //     await dispatch(areaActions.fetchArea())
    //   } catch (err) {
    //     setError(err)
    //   }
    // }, [dispatch, setIsLoading])


    let listView = props => (
        // <RightSideFlatListView 
        //     list={areaList}
        //     onPress={() => props.navigation.navigate("리스트페이지2")}
        // />
        <RightSideArea1 
            // list={areaList}
            {...props}
            // onPress={(id) => props.navigation.navigate("리스트페이지2", {
            //     id: id
            // })}
        />
    );

    let listView2 = (props) => (
        // <RightSideFlatListView 
        //     onPress={() => props.navigation.navigate("리스트페이지3")}
        // />
        
        <RightSideArea2 
            // list={areaList}
            {...props}
            id={props.id}
            onPress={() => props.navigation.navigate("리스트페이지3")}
            
        />
    )

   

    let listView3 = props => (
        // <RightSideFlatListView 
        //     onPress={() => props.navigation.navigate("리스트페이지3")}
        // />
        <RightSideArea3 
        // list={areaList}
        onPress={() => props.navigation.navigate("리스트페이지4")}/>
    )

    let listView4 = props => (
        // <RightSideFlatListView 
        //     onPress={() => props.navigation.navigate("리스트페이지3")}
        // />
        <RightSideArea4 
        // list={areaList}
        onPress={() => props.navigation.navigate("리스트페이지4")}/>
    )

    const headerBack = (navigation) => {
        console.log("header back pressed from 2", navigation)
        navigation.goBack()
    }

    return (
        <NavigationContainer independent={true} >
             <Stack.Navigator initialRouteName="리스트페이지" >
                <Stack.Screen name="리스트페이지" component={listView} />
                <Stack.Screen 
                    name="리스트페이지2" 
                    component={listView2} 
                    // options={{
                    //     headerBackTitleVisible: false,
                    //     headerLeft: ({ navigation }) => (
                    //         <HeaderBackButton onPress={(navigation)=>headerBack(navigation)}/>
                    //     )
                    // }}
                    options={
                        RightSideArea2.navigationOptions
                    }
                />
                <Stack.Screen name="리스트페이지3" component={listView3} options={{headerBackTitleVisible: false}}/>
                <Stack.Screen name="리스트페이지4" component={listView4} options={{headerBackTitleVisible: false}}/>

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
            <RightsideViewFunction 
                backPressed={props.backPressed()}
            // list={props.list}
            />
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