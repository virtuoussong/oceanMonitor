import React, { useState, useEffect, useCallback } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    ActivityIndicator,
    TextInput, TouchableOpacity, Animated, Image, Easing 
} from "react-native";

import RightSideCell from '../../components/RightSideFlatListCell';
import { useSelector, useDispatch } from "react-redux";
import * as areaActions from '../../Redux/actions/area';
import * as areaActions2 from '../../Redux/actions/area2';
import * as polygonNavAction from '../../Redux/actions/coordinateNav';

export default RightSideArea1 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    let dispatch = useDispatch()

    const areaList = useSelector(state => state.areaListRoot.areaList)

    // const parentIDFromReducer = useSelector(state => state.area2ListRoot.parentID)
    useEffect(()=>{
        // if (parentIDFromReducer != null) {
        //     let index = areaList.findIndex(item => item.id == parentIDFromReducer)
        //     let areaName = areaList[index].name
        //     console.log("index from Rightsideview", areaName)

        //     let data = {
        //         id : parentIDFromReducer,
        //         name : areaName
        //     }
        //     listTapped(data)
        // }
        
    }, [dispatch, areaList])


    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지2", {
            parentID: item.id,
            parentName: item.name,
            coordinates: item.coordinates,
        })

        console.log("list 1 tapped", item)

        dispatch(areaActions2.fetchFilteredList(item.id))
        
        if (polygonNav.level != 2) {
            dispatch(polygonNavAction.updateCoordinate(2, item))
        }
    }

    const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
    const loadPolyNav = useCallback(async()=>{
        try {
            // await dispatch(polygonNavAction.fetchCoordinate())
        } catch (err) {
            setError(err)
        }
    }, [dispatch])

    useEffect(()=>{
        loadPolyNav().then(()=>{
            if (polygonNav.level == 2) {

                let pushData = {
                  id: polygonNav.coordinates2.id,
                  name: polygonNav.coordinates2.name,
                  coordinates: polygonNav.coordinates2.coordinates
                }            
                console.log("push RightSideArea1 data!!!!", pushData)
                listTapped(pushData)
            }
        })
        
    }, [dispatch, polygonNav])

    if (isLoading) {
        return <View style={styles.centered}>
            <ActivityIndicator size={'large'} color={"red"} />
        </View>
    }
    
    //   if (!isLoading && areaList === null) {
    //     return <View style={styles.centered}>
    //         <Text>No Products Found. Maybe Start Adding Some Shit</Text>
    //     </View>
    //   }

    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={areaList}
                renderItem={(item) => (
                    <RightSideCell
                        onPress={(id) => listTapped(item.item)}  
                        name={item.item.name}
                    />
                )}
                keyExtractor={item => `${item.id}listKey`}
            />
        </SafeAreaView>
    )
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