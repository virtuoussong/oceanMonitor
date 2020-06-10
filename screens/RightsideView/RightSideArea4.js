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

import { useSelector, useDispatch } from "react-redux";
import RightSideCell from '../../components/RightSideFlatListCell';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';
import * as areaAction4 from '../../Redux/actions/area4';
export default RightSideArea4 = (props) => {

    const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const areaList = useSelector(state => state.area4ListRoot)
    const dispatch = useDispatch();


    useEffect(()=>{
        // setLocations(DATA)
    }, [dispatch, areaList])

    let passedID = props.route.params.parentID
    const listTapped = (item) => {
       
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
                name: polygonNav.areaData.name
            }            
            listTapped(pushData)
        }
        
    }, [dispatch, polygonNav])


    return (
        <SafeAreaView style={styles.viewContainer}>
            <FlatList 
                data={areaList.filteredList}
                renderItem={(item) => (<RightSideCell  name={item.item.name}/>)}
                keyExtractor={item => `${item.id}listKey`}
            />
        </SafeAreaView>
    )
}

RightSideArea4.navigationOptions = (navData, props) => {
    const areaTitle = navData.route.params.parentName;
    // const coordinates = navData.route.params.coordinates;
    const dispatch = useDispatch();

    const backPressed = () => {
        // console.log("back pressed from area3")
        dispatch(coordinateNavAction.updateCoordinate(2))
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

