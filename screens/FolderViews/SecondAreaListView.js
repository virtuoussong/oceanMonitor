import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';
import FolderCell from '../../components/FolderCell';
import HeaderCell from '../DocDetail/components/AreaHeaderCell'


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

export default SecondAreaListView = (props) => {
    const toggleDrawer = () => {
        props.toggleDrawer()
    }

    const folderTap = (id) => {
        props.onPress()
    }

    const headerPressed =()=> {
        props.viewAreaDetail()
    }

    return <View style={styles.container}>
        <FlatList 
            ListHeaderComponent={<HeaderCell onPress={headerPressed}/>}
            showsVerticalScrollIndicator={false}
            data={dataSet}
            renderItem={({item}) => 
                <FolderCell 
                    folderName={item.name} 
                    onPress={() => folderTap(item.id)}
                />
            }
            keyExtractor={(i)=> i.id}
            numColumns={3}
        />
        <DrawerButton 
            toggleDrawer={toggleDrawer}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
    },
    flatListWrapper : {
        // backgroundColor: 'red',
        flex: 1,
        // width: 2000,
        // height: 2000
    },
    // leftButton: {
    //     width: 50,
    //     height: 50,
    //     position: "absolute",
    //     left: 30,
    //     top: 30,
    //     backgroundColor: "red"
    // },
    itemStyle : {
        // flexGrow: 1,
        // width: (Dimensions.get('window').width/3)-0,
        // height: (Dimensions.get('window').width/3)-0, 
        
        // flex: 1,
        // flexDirection:'column', 
        // margin: 10,
        // backgroundColor: "blue"
    }
})