import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';
import FolderCell from '../../components/FolderCell';


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

export default DocumentListView = (props) => {
    const toggleDrawer = () => {
        props.toggleDrawer()
        console.log(dataSet)
    }

    const folderTap = (id) => {
        // 구역 2단계
        // window.location.href = '구역 2단계';
        props.onPress()
    }

    return <View style={styles.container}>
        <FlatList 
            // style={styles.flatListWrapper}

            // contentContainerStyle={{alignSelf: 'flex-start'}}
            // numColumns={dataSet.length / 3}
            showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            data={dataSet}
            renderItem={({item}) => 
                // <View style={styles.itemStyle}>
                //     <TouchableOpacity style={{flex:1}} onPress={()=>folderTap(item.id)}>
                //         <Text > 
                //             {item.name} 
                //         </Text>
                //     </TouchableOpacity>
                // </View>
                <FolderCell 
                    // style={styles.itemStyle}
                    folderName={item.name} 
                    onPress={() => folderTap(item.id)}
                />
            }
            keyExtractor={(i)=> i.id}
            numColumns={3}
        />
        <DrawerButton 
            style={styles.leftButton} 
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
    leftButton: {
        position: 'absolute',
        top: 6,
        left: 10
    },
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