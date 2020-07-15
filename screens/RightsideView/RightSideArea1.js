import React, { useState, useEffect, useCallback, useMemo } from "react";
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

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    let dispatch = useDispatch()

    const areaList = useSelector(state => state.areaListRoot.areaList)

    useEffect(()=>{
        
    }, [areaList])


    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지2", {
            parentID: item.id,
            parentName: item.name,
            coordinates: item.coordinates,
        })

        console.log("area 1 should tap", polygonNav.level)
        
        if (polygonNav.level == 1) {
            console.log("polygonNav.level != 2 list 1 tapped")
            dispatch(polygonNavAction.updateCoordinate(2, item)).then(()=>{
                dispatch(areaActions2.fetchFilteredList(item.id))
            })
        } 
    };

    const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
    // const loadPolyNav = useCallback(async()=>{
    //     try {
    //         // await dispatch(polygonNavAction.fetchCoordinate())
    //     } catch (err) {
    //         setError(err)
    //     }
    // }, [dispatch])

    useEffect(()=>{
        // loadPolyNav().then(()=>{
            if (polygonNav.level == 2) {

                let pushData = {
                  id: polygonNav.coordinates2.id,
                  name: polygonNav.coordinates2.name,
                  coordinates: polygonNav.coordinates2.coordinates
                } 
                
                props.navigation.navigate("리스트페이지2", {
                    parentID: pushData.id,
                    parentName: pushData.name,
                    coordinates: pushData.coordinates,
                })
                // listTapped(pushData)
                
            }
        // })
        
    }, [polygonNav])

    if (isLoading) {
        return <View style={styles.centered}>
            <ActivityIndicator size={'large'} color={"red"} />
        </View>
    }
    

    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={areaList}
                renderItem={(item) => (
                    <RightSideCell
                        showIcon={false}
                        // style={{flex: 1, backgroundColor: 'red'}}
                        onPress={() => listTapped(item.item)}  
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
        backgroundColor: 'white'
    }
});