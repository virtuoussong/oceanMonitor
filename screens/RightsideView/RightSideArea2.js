import React, { useState, useEffect, useCallback } from "react";
import { 
    StyleSheet,  
    SafeAreaView,
    FlatList,
    View,
    ActivityIndicator, 
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    Text
} from "react-native";
import { HeaderBackButton } from 'react-navigation-stack'
import RightSideCell from '../../components/RightSideFlatListCell';
import RegionDetail from '../DocDetail/components/RegionDetail/RegionDetailView';
import { useSelector, useDispatch } from "react-redux";

import * as areaActions2 from '../../Redux/actions/area2';
import * as areaAction3 from '../../Redux/actions/area3';

import * as coordinateNavAction from '../../Redux/actions/coordinateNav';
import { SwipeListView } from 'react-native-swipe-list-view'

export default RightSideArea2 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isDocOn, setDoc] = useState(false)
    const [locationId, setlocationId] = useState()
    const [docID, setDocID] = useState();
    // useEffect(()=>{
    //     // setLocations(DATA)
    // }, [locations])

    let passedID = props.route.params.parentID
    // console.log("passed parent ID", passedID)


    const dispatch = useDispatch();
    const areaList = useSelector(state => state.area2ListRoot.filteredList)

    // const loadAreas = useCallback(async()=>{
    //     setError(null)
    //     // console.log("passed parent ID", passedID)
    //     try {
    //     //   await dispatch(areaActions.fetchArea2())
    //       await dispatch(areaActions.fetchFilteredList(passedID))

    //     } catch (err) {
    //       setError(err)
    //     }
    // }, [])
    
    useEffect(()=>{
        console.log("area2 list 2", areaList)
    }, [areaList])


    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지3", {
            parentID: item.id,
            parentName: item.name,
            coordinates: item.coordinates
        })

        if (polygonNav.level == 2) {
            dispatch(coordinateNavAction.updateCoordinate(3, item)).then(()=>{
                dispatch(areaAction3.fetchFilteredList(item.id))
            })
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
            // console.log("polygonNav level 2", polygonNav)            
            props.navigation.navigate("리스트페이지3", {
                parentID: pushData.id,
                parentName: pushData.name,
                coordinates: pushData.coordinates,
            })
        }        
    }, [polygonNav])

    const reload = useCallback(()=>{
        let parentId = props.route.params.parentID
        dispatch(areaActions2.fetchFilteredList(parentId))
    })

    const showDoc = (item) => {
        console.log(item)
        if (item) {
            setlocationId(item.id)
            setDocID(item.docID)
        }
        toggleModal()
    }

    const toggleModal=()=>{
        setDoc(!isDocOn)
    }

    const deleteItem = (data) => {
        dispatch(areaActions2.deleteArea2(data.item))
    }

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
        
    };

    if (isLoading && areaList === null) {
    return <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={"red"} />
    </View>
    }

    return (
        <SafeAreaView style={styles.viewContainer}>

            <Modal visible={isDocOn} animationType="slide">
                <RegionDetail 
                    id={locationId} 
                    docID={docID} 
                    hasCloseButton={true} 
                    close={()=>toggleModal()} 
                    save={()=>showDoc()}
                    reload={()=>reload()}
                />
            </Modal>

            <SwipeListView 
                data={areaList}
                renderItem={(item) => (
                    <RightSideCell 
                        // style={{height: 80, backgroundColor : 'red'}}
                        showIcon={true}
                        onPress={() => listTapped(item.item)}  
                        name={item.item.name}
                        isDocShown={item.item.docID != null ? true : false}
                        docTapped={()=>showDoc(item.item)}
                    />
                )}
                renderHiddenItem={ (data, rowMap) => (
                    <TouchableHighlight onPress={()=>deleteItem(data)} style={{marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', width: 75, height: 50}}>
                        <Text style={{color:'white', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>삭제</Text>
                    </TouchableHighlight>
                )}
                leftOpenValue={0}
                rightOpenValue={-70}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
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
        headerLeft: () => (<HeaderBackButton onPress={()=>backPressed()} headerBackTitle={"뒤로"}/>),
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

