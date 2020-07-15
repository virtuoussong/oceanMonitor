import React, { useState, useEffect, useMemo, useCallback } from "react";
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
import RightSideCell from '../../components/RightSideFlatListCell';
import { useSelector, useDispatch } from "react-redux";
import * as areaAction3 from '../../Redux/actions/area3';
import * as areaAction4 from '../../Redux/actions/area4';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';
import RegionDetail from '../FolderViews/DocumentDetailView';
export default RightSideArea3 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isDocOn, setDoc] = useState(false);
    const [docID, setDocID] = useState();
    const [parentID, setParentID] = useState();
    const [id, setID] = useState();
    const dispatch = useDispatch();
    const areaList = useSelector(state => state.area3ListRoot.filteredList)

    useEffect(()=>{
        // setLocations(DATA)
        // console.log("area3", areaList)
    }, [areaList])

    const reload = useCallback(() =>{
        let passedID = props.route.params.parentID
        setParentID(passedID)
        dispatch(areaAction3.fetchFilteredList(passedID))
    }, [])

    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지4", {
            parentID: item.id,
            parentName: item.name,
            coordinates:item.coordinates
        })

        if (polygonNav.level == 3) {
            dispatch(coordinateNavAction.updateCoordinate(4, item)).then(()=>{
                dispatch(areaAction4.fetchFilteredList(item.id))
            })
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

            props.navigation.navigate("리스트페이지4", {
                parentID: pushData.id,
                parentName: pushData.name,
                coordinates: pushData.coordinates
            })
        }
        
    }, [polygonNav])

    const showDoc = (docId, id) => {
        setID(id)
        setDocID(docId)
        toggleModal()
    }

    const toggleModal = () => {
        setDoc(!isDocOn)
    }

    return (
        <SafeAreaView style={styles.viewContainer}>
            <Modal visible={isDocOn && isDocOn} animationType="slide">
                <RegionDetail  
                    isBarShown={true}  
                    docID={docID} id={id}  
                    hasCloseButton={true} 
                    close={()=>toggleModal()} 
                    area={3}
                    reload={()=>reload()}
                />
            </Modal>

            <FlatList 
                data={areaList}
                renderItem={(item) => (
                    <RightSideCell 
                        showIcon={true}
                        onPress={()=> listTapped(item.item)}  
                        name={item.item.name}
                        isDocShown={item.item.docID ? true : false}
                        docTapped={()=>showDoc(item.item.docID, item.item.id)}
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
        // dispatch(coordinateNavAction.updateCoordinate(2, data))
        dispatch(coordinateNavAction.navBack(2))
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