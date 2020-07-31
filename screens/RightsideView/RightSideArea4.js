import React, { useState, useEffect, useCallback } from "react";
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,
    FlatList,
    View, 
    ActivityIndicator,
    TextInput, TouchableOpacity, Animated, Image, Easing,
    Modal, TouchableHighlight 
} from "react-native";
import { HeaderBackButton } from 'react-navigation-stack'

import { useSelector, useDispatch } from "react-redux";
import RightSideCell from '../../components/RightSideFlatListCell';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';
import * as areaAction4 from '../../Redux/actions/area4';
import RegionDetail from '../FolderViews/DocumentDetailView';
import { SwipeListView } from 'react-native-swipe-list-view'

export default RightSideArea4 = (props) => {

    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const areaList = useSelector(state => state.area4ListRoot.filteredList);
    const [isDocOn, setDoc] = useState(false);
    const [docID, setDocID] = useState()
    const [id, setID] = useState()

    const dispatch = useDispatch();


    useEffect(()=>{
        // setLocations(DATA)
    }, [dispatch, areaList]);

    let passedID = props.route.params.parentID
    // const listTapped = (item) => {
       
        
        
    //     if (polygonNav.level == 3) {
    //         dispatch(coordinateNavAction.updateCoordinate(4, item)).then(()=>{
    //             dispatch(areaAction4.fetchFilteredList(item.id))
    //         })
    //     }
    // }
    // const polygonNav = useSelector(state => state.focusedPolygonRoot.focusedPolygon)
    // useEffect(()=>{
    //     if (polygonNav.level == 4) {
    //         let pushData = {
    //             id: polygonNav.coordinates4.id,
    //             name: polygonNav.coordinates4.name
    //         }            
    //         listTapped(pushData)
    //     }
        
    // }, [dispatch, polygonNav])

    const reload = useCallback(() =>{
        console.log("reload")
        let passedID = props.route.params.parentID
        // setParentID(passedID)
        console.log("passed parent id", passedID)
        dispatch(areaAction4.fetchFilteredList(passedID))
    }, [])

    const showDoc = (docId, id) => {
        setID(id)
        setDocID(docId)
        toggleModal()
    }

    const deleteItem = (data) => {
        dispatch(areaAction4.deleteArea4(data.item))
    }

    const toggleModal = () => {
        setDoc(!isDocOn)
    }

    return (
        <SafeAreaView style={styles.viewContainer}>
            <Modal visible={isDocOn} animationType="slide">
                <RegionDetail 
                    isBarShown={true}  
                    docID={docID} 
                    id={id} 
                    hasCloseButton={true} 
                    close={()=>toggleModal()} 
                    area={4} 
                    reload={()=>reload()}
                />
            </Modal>

            <SwipeListView 
                data={areaList}
                renderItem={(item) => (<RightSideCell  
                    showIcon={true}
                    name={item.item.name}
                    isDocShown={item.item.docID ? true : false}
                    docTapped={()=>showDoc(item.item.docID, item.item.id)}
                />)}
                renderHiddenItem={ (data, rowMap) => (
                    <TouchableHighlight onPress={()=>deleteItem(data)} style={{marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', width: 75, height: 50}}>
                        <Text style={{color:'white', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>삭제</Text>
                    </TouchableHighlight>
                )}
                leftOpenValue={0}
                rightOpenValue={-70}
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

