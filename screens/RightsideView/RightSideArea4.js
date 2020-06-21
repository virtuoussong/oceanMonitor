import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    ActivityIndicator,
    TextInput, TouchableOpacity, Animated, Image, Easing,
    Modal 
} from "react-native";
import { HeaderBackButton } from 'react-navigation-stack'

import { useSelector, useDispatch } from "react-redux";
import RightSideCell from '../../components/RightSideFlatListCell';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';
import * as areaAction4 from '../../Redux/actions/area4';
import RegionDetail from '../DocDetail/components/RegionDetail/RegionDetailView';

export default RightSideArea4 = (props) => {

    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const areaList = useSelector(state => state.area4ListRoot);
    const [isDocOn, setDoc] = useState(false);

    const dispatch = useDispatch();


    useEffect(()=>{
        // setLocations(DATA)
    }, [dispatch, areaList]);

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
                id: polygonNav.coordinates4.id,
                name: polygonNav.coordinates4.name
            }            
            listTapped(pushData)
        }
        
    }, [dispatch, polygonNav])

    const showDoc = (id) => {
        setDoc(!isDocOn)
    }

    return (
        <SafeAreaView style={styles.viewContainer}>
            <Modal visible={isDocOn} animationType="slide">
                <View style={{width: '100%', height: 50}}>
                    <TouchableOpacity style={{height: '100%' ,marginLeft: 'auto', marginRight: 20, justifyContent: 'center'}} onPress={()=>showDoc()}>
                        <Text>닫기</Text>
                    </TouchableOpacity>    
                </View>
                <RegionDetail hasCloseButton={true} close={()=>showDoc()}/>
            </Modal>

            <FlatList 
                data={areaList.filteredList}
                renderItem={(item) => (<RightSideCell  
                    name={item.item.name}
                    isDocShown={true}
                    docTapped={()=>showDoc()}
                />)}
                keyExtractor={item => `${item.id}listKey`}
            />
        </SafeAreaView>
    )
}

RightSideArea4.navigationOptions = (navData, props) => {
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
        // console.log("back pressed from area3")
        // dispatch(coordinateNavAction.updateCoordinate(3, data))
        dispatch(coordinateNavAction.navBack(3))
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

