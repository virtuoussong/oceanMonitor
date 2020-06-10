import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    ActivityIndicator,
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

import { HeaderBackButton } from 'react-navigation-stack'
import RightSideCell from '../../components/RightSideFlatListCell';
import { useSelector, useDispatch } from "react-redux";
import * as areaAction4 from '../../Redux/actions/area4';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';

export default RightSideArea3 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const areaList = useSelector(state => state.area3ListRoot)

    useEffect(()=>{
        // setLocations(DATA)
    }, [dispatch, areaList])

    let passedID = props.route.params.parentID
    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지4", {
            parentID: item.id,
            parentName: item.name,
            coordinates:item.coordinates
        })
        console.log("list3 tapped", item)

        dispatch(areaAction4.fetchFilteredList(item.id))
        
        if (polygonNav.level != 4) {
            dispatch(coordinateNavAction.updateCoordinate(4, item))
        }
    }
    const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
    useEffect(()=>{
        if (polygonNav.level == 4) {
            let pushData = {
                id: polygonNav.areaData.id,
                name: polygonNav.areaData.name,
                coordinates: polygonNav.areaData.coordinates
            }            
            console.log("push RightSideArea3 get pushData  data!!!!", pushData)

            listTapped(pushData)
        }
        
    }, [dispatch, polygonNav])

    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={areaList.filteredList}
                renderItem={(item) => (
                    <RightSideCell 
                        onPress={()=> listTapped(item.item)}  
                        name={item.item.name}
                    />
                )}
                keyExtractor={item => `${item.id}listKey`}
            />
        </SafeAreaView>
    )
}


RightSideArea3.navigationOptions = (navData, props) => {
    const areaTitle = navData.route.params.parentName;
    const areaID = navData.route.params.parentID;
    const coordinates = navData.route.params.coordinates
    let data = {
        id: areaID,
        name: areaTitle,
        coordinates : coordinates
    }
    const dispatch = useDispatch();

    const backPressed = () => {
        console.log("back pressed params from area3", data)
        dispatch(coordinateNavAction.updateCoordinate(2, data))
        navData.navigation.goBack()        
    }

    return {
        headerTitle: areaTitle,
        headerLeft: () => (<HeaderBackButton onPress={() => backPressed()} headerBackTitle={"hi"}/>),
        headerBackTitle: "hi",
        headerBackTitleVisible: false
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignSelf: "stretch",
        paddingHorizontal: 16,
        backgroundColor: 'white',
        
    },
    // title: {
    //     fontSize: 24,
    //     color: 'black',
    //     backgroundColor: 'white',
    //     paddingHorizontal: 16,
    //     paddingVertical: 8 
    // }
});


// let DATA =[
//     {id: 0, name: "여수바다1"}, 
//     {id: 1, name: "여수바다2"},
//     {id: 2, name: "여수바다3"},
//     {id: 3, name: "여수바다4"},
//     {id: 4, name: "여수바다5"},
//     {id: 5, name: "여수바다6"},
//     {id: 6, name: "여수바다7"}
// ]