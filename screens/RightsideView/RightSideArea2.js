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
import { HeaderBackButton } from 'react-navigation-stack'
import RightSideCell from '../../components/RightSideFlatListCell';

import { useSelector, useDispatch } from "react-redux";
import * as areaActions from '../../Redux/actions/area2';
import * as areaAction3 from '../../Redux/actions/area3';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';

export default RightSideArea2 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // useEffect(()=>{
    //     // setLocations(DATA)
    // }, [locations])

    let passedID = props.route.params.parentID
    // console.log("passed parent ID", passedID)


    const dispatch = useDispatch();
    const areaList = useSelector(state => state.area2ListRoot)

    // const loadAreas = useCallback(async()=>{
    //     setError(null)
    //     // console.log("passed parent ID", passedID)
    //     try {
    //     //   await dispatch(areaActions.fetchArea2())
    //     //   await dispatch(areaActions.fetchFilteredList(passedID))

    //     } catch (err) {
    //       setError(err)
    //     }
    // }, [dispatch, setIsLoading])
    
    useEffect(()=>{
        // setIsLoading(true);
        // loadAreas().then(()=>{
        //     setIsLoading(false)
        // })
    }, [dispatch, areaList])


    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지3", {
            parentID: item.id,
            parentName: item.name,
            coordinates: item.coordinates
        })
        console.log("list2 tapped", item)

        dispatch(areaAction3.fetchFilteredList(item.id))
        
        if (polygonNav.level != 3) {
            dispatch(coordinateNavAction.updateCoordinate(3, item))
        }
    }

    const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
    useEffect(()=>{
        if (polygonNav.level == 3) {
            let pushData = {
                id: polygonNav.coordinates3.id,
                name: polygonNav.coordinates3.name,
                coordinates: polygonNav.coordinates3.coordinates
            }
            console.log("polygonNav level 2", polygonNav)            
            listTapped(pushData)
        }        
    }, [dispatch, polygonNav])


    if (isLoading && areaList === null) {
    return <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={"red"} />
    </View>
    }
    
    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={areaList.filteredList}
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

RightSideArea2.navigationOptions = (navData, props) => {
    const areaTitle = navData.route.params.parentName;
    const dispatch = useDispatch();

    const backPressed = () => {
        console.log("back pressed from area2")
        let data = {
            id: 0,
            name: "no name",
            coordinates: []
        }
        // dispatch(coordinateNavAction.updateCoordinate(1, data))
        dispatch(coordinateNavAction.navBack(1))
        navData.navigation.goBack()        
    }

    return {
        headerTitle: areaTitle,
        headerLeft: () => (<HeaderBackButton onPress={()=>backPressed()} headerBackTitle={"hi"}/>),
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
});

