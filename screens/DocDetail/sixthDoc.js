import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import TitleInputView from '../DocDetail/components/TitleInput';


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

export default SixthDoc = (props) => {
    return <View style={styles.container}>
                <TitleInputView/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        backgroundColor: 'white',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    }
})