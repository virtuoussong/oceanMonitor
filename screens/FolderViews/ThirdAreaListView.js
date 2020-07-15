import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity} from 'react-native';
import DrawerButton from '../../components/DrawerNavButton';
import FolderCell from '../../components/FolderCell';
import { getAllArea3 } from '../../Redux/database/area3DB'
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

export default ThirdAreaListView = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        let passedID = props.route.params.id
        loadData(passedID)
    }, [])

    const loadData = async (id) => {
        await getAllArea3(id).then((i)=>{
            // console.log("filtered area2", i)
            let filteredArray = []
            i.rows._array.forEach(element => {
                let parsedItem = JSON.parse(element.data)
                parsedItem.id = element.id
                parsedItem.docID = element.docID
                filteredArray.push(parsedItem)
            });

            setData(filteredArray)
        })
    }


    // const toggleDrawer = () => {
    //     props.toggleDrawer()
    // }

    const folderTap = (id) => {
        props.navigation.navigate("구역 4단계", {
            id: id,
        })
    }

    const docTapped = (docId, id) => {
        console.log("docID", id)
        props.navigation.navigate("문서 페이지", {
            docID : docId,
            id: id,
            area: 3
        })
    }

    return <View style={styles.container}>
        <FlatList 
            showsVerticalScrollIndicator={false}

            data={data}
            renderItem={({item}) => 
                <FolderCell 
                    showIcon={true}
                    isDocShown={item.docID != null ? true : false }

                    folderName={item.name} 

                    onPress={() => folderTap(item.id)}
                    onDocTap={() => docTapped(item.docID, item.id)}
                />
            }
            keyExtractor={(i)=> i.id}
            numColumns={1}
        />
        {/* <DrawerButton 
            toggleDrawer={toggleDrawer}
        /> */}
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