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

    const loadAreas = useCallback(async()=>{
        setError(null)
        // console.log("passed parent ID", passedID)
        try {
        //   await dispatch(areaActions.fetchArea2())
        //   await dispatch(areaActions.fetchFilteredList(passedID))

        } catch (err) {
          setError(err)
        }
    }, [dispatch, setIsLoading])
    
    useEffect(()=>{
        setIsLoading(true);
        loadAreas().then(()=>{
            setIsLoading(false)
        })
    }, [dispatch, areaList])

    if (isLoading && areaList === null) {
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
                data={areaList.filteredList}
                renderItem={(item) => (
                    <RightSideCell onPress={props.onPress}  name={item.item.name}/>
                // <Text style={styles.title}>{`${item.item.name}`}</Text>
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
        dispatch(coordinateNavAction.updateCoordinate(1))
        navData.navigation.goBack()
        // dispatch(areaActions.backToLevel1("1-1"))
        
    }

    return {
        headerTitle: areaTitle,
        headerLeft: () => (<HeaderBackButton onPress={backPressed} headerBackTitle={"hi"}/>),
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


let DATA =[
    {id: 0, name: "여수바다1"}, 
    {id: 1, name: "여수바다2"},
    {id: 2, name: "여수바다3"},
    {id: 3, name: "여수바다4"},
    {id: 4, name: "여수바다5"},
    {id: 5, name: "여수바다6"},
    {id: 6, name: "여수바다7"}
]