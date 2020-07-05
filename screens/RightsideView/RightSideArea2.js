import React, { useState, useEffect, useCallback } from "react";
import { 
    StyleSheet,  
    SafeAreaView,
    FlatList,
    View,
    ActivityIndicator, 
    Modal,
    TouchableOpacity,
    Text
} from "react-native";
import { HeaderBackButton } from 'react-navigation-stack'
import RightSideCell from '../../components/RightSideFlatListCell';
import RegionDetail from '../DocDetail/components/RegionDetail/RegionDetailView';
import { useSelector, useDispatch } from "react-redux";
import * as areaActions from '../../Redux/actions/area2';
import * as areaAction3 from '../../Redux/actions/area3';
import * as coordinateNavAction from '../../Redux/actions/coordinateNav';

export default RightSideArea2 = (props) => {

    // const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isDocOn, setDoc] = useState(false)
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
    }, [areaList])


    const listTapped = (item) => {
        props.navigation.navigate("리스트페이지3", {
            parentID: item.id,
            parentName: item.name,
            coordinates: item.coordinates
        })
        // console.log("list2 tapped", item)

        
        
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


    if (isLoading && areaList === null) {
    return <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={"red"} />
    </View>
    }

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
                data={areaList}
                renderItem={(item) => (
                    <RightSideCell 
                        onPress={(id) => listTapped(item.item)}  
                        name={item.item.name}
                        isDocShown={item.item.docID ? false : true}
                        docTapped={()=>showDoc()}
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

