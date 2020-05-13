import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';

import FirstDoc from '../DocDetail/firstDoc';
import SecondtDoc from '../DocDetail/secondDoc';
import ThirdDoc from '../DocDetail/thirdDoc';
import FourthDoc from '../DocDetail//fourthDoc';
import FifthDoc from '../DocDetail/fifthDoc';
import SixthDoc from '../DocDetail/sixthDoc';

let dataSet = [
    {id: 1, name: "구역 1"},
    {id: 2, name: "구역 2"},
    {id: 3, name: "구역 3"},
    {id: 4, name: "구역 4"},
    {id: 5, name: "구역 5"},
    {id: 6, name: "구역 6"},
    {id: 7, name: "구역 7"},
    {id: 8, name: "구역 8"},
    {id: 9, name: "구역 1"},
    {id: 10, name: "구역 2"},
    {id: 11, name: "구역 3"},
    {id: 12, name: "구역 4"},
    {id: 13, name: "구역 5"},
    {id: 14, name: "구역 6"},
    {id: 15, name: "구역 7"},
    {id: 16, name: "구역 8"},
]

export default DocumentDetailView = (props) => {
    const toggleDrawer = () => {
        props.toggleDrawer()
        console.log(dataSet)
    }

    return <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                contentContainerStyle={{
                    width:Dimensions.get('window').width * 6,
                }}
                horizontal={true}
                snapToAlignment={"center"}
                pagingEnabled={true}
                
            >
                <FirstDoc/>
                <SecondtDoc/>
                <ThirdDoc/>
                <FourthDoc/>
                <FifthDoc/>
                <SixthDoc/>
            </ScrollView>

        {/* <DrawerButton toggleDrawer={toggleDrawer}/> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    scrollView : {
        // flex: 1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
        backgroundColor: 'white',
        marginHorizontal: 20,
        // width: 2000,
        // height: 2000
    },
    
})