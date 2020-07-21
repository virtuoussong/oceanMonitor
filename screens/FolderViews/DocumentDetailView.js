import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DrawerButton from '../../components/DrawerNavButton';
import { useNavigation } from '@react-navigation/native'
import BasicInfoDoc from '../DocDetail/components/DocDetail/BasicInfoDoc';
import FirstDoc from '../DocDetail/components/DocDetail/firstDoc';
import SecondtDoc from '../DocDetail/components/DocDetail/secondDoc';
import ThirdDoc from '../DocDetail/components/DocDetail/thirdDoc';
import FourthDoc from '../DocDetail/components/DocDetail/fourthDoc';

import { insertDocID4 } from '../../Redux/database/area4DB';
import { insertDocID } from '../../Redux/database/area3DB';
import { getLocationDoc, newLocationDoc, updateLocationDoc } from '../../Redux/database/locationDoc';

import { useDispatch } from "react-redux";
import * as areaAction3 from '../../Redux/actions/area3';
import * as areaAction4 from '../../Redux/actions/area4';

import {DocDetailModel} from '../../Models/DocDetailModel'
import TitleInputView from '../DocDetail/components/DocDetail/TitleInput';
let emptyDetailData = new DocDetailModel(null, null, null, null, null, null)
export default DocumentDetailView = (props) => {
    
    const [data, setData] = useState(emptyDetailData)

    const nav = useNavigation()
    useEffect(()=>{
        console.log("docID", props.docID)
        console.log("location id", props.id)
        console.log("location area", props.area)
        if (props.docID != null) {
            loadData(props.docID)
            return
        }

        if (props.route != undefined) {
            console.log("id", props.route.params.docID)
            if (props.route.params.docID != undefined || props.route.params.docID != null) {
                loadData(props.route.params.docID)
            }
            
            nav.setOptions({
                headerRight: () => <TouchableOpacity 
                        style={{marginRight: 16}} 
                        onPress={()=>saveDocFromNav()}>
                        <Text style={{fontSize: 20}}>저장</Text>
                    </TouchableOpacity>
            })
        }
       
        
    }, [])

    useEffect(()=>{
       
    }, [data])

    let dispatch = useDispatch();

    const loadData = async(id)=>{
        await getLocationDoc(id).then((i)=>{
            let fetchedData = i.rows._array[0]
            let parsedData = JSON.parse(fetchedData.data)
            setData(parsedData)
        })
    }

    const saveDocFromNav = async() => {
        let newData = new DocDetailModel(
            titleRef.current,
            firstDocRef.current,
            secondDocRef.current,
            thirdDocRef.current,
            fourthDocRef.current,
            fifthDocRef.current,
            sixthDocRef.current
        )

        let parsedData = JSON.stringify(newData)


        if (props.route.params.docID != null) {
            //update
            console.log("doc id from nav", props.docID)
            let docID = props.route.params.docID
            await updateLocationDoc(parsedData, docID).then(()=>{
                props.navigation.goBack(null)
            })
        } else {
            //insert
            console.log("id from nav", props.route.params.docID)
            await newLocationDoc(parsedData).then((i)=>{
                if (props.route.params.area == 3) {
                    insertDocID(i.insertId, props.route.params.id).then(()=>{
                        props.navigation.goBack(null)
                    })
                } else {
                    insertDocID4(i.insertId, props.route.params.id).then(()=>{
                        props.navigation.goBack(null)
                    })
                }
            })
        }
    }

    const saveDoc = async() => {
        let newData = new DocDetailModel(
            titleRef.current,
            firstDocRef.current,
            secondDocRef.current,
            thirdDocRef.current,
            fourthDocRef.current,
            fifthDocRef.current,
            sixthDocRef.current
        )

        let parsedData = JSON.stringify(newData)

        // console.log("pased detail", parsedData)

        if (props.docID != null) {
            //update
            console.log("doc id from nav", props.docID)
            await updateLocationDoc(parsedData, props.docID).then(()=>{
                props.close()
            })
        } else {
            //insert
            console.log("doc id from nav", props.id)
            await newLocationDoc(parsedData).then((i)=>{
                if (props.area == 3) {
                    insertDocID(i.insertId, props.id).then(()=>{
                        props.close()
                        props.reload()
                    })
                } else {
                    insertDocID4(i.insertId, props.id).then(()=>{
                        props.close()
                        props.reload()
                    })
                }
                
            })
        }
    }


    let titleRef = React.useRef(null)
    let firstDocRef = React.useRef(null)
    let secondDocRef = React.useRef(null)
    let thirdDocRef = React.useRef(null)
    let fourthDocRef = React.useRef(null)
    let fifthDocRef = React.useRef(null)
    let sixthDocRef = React.useRef(null)

    return <View style={styles.container}>

            {props.isBarShown && <View style={{width: '100%', height: 55, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 'auto', marginTop: 24, marginLeft: 20}} onPress={()=>props.close()}>
                    <Text style={{fontSize: 20}}>취소</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 'auto', marginTop: 24, marginRight: 20}} onPress={()=>saveDoc()}>
                    {props.docID ? <Text style={{fontSize: 20}}>수정</Text> : <Text style={{fontSize: 20}}>저장</Text>}
                </TouchableOpacity>
            </View>}

            <TitleInputView refData={titleRef} data={data.title}/>

            <KeyboardAwareScrollView 
                style={{ flex: 1}} 
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                extraScrollHeight={70}
                keyboardShouldPersistTaps={'always'} 
                // style={styles.keyboardAwareView}
                // behavior={'padding'} keyboardVerticalOffset={40} 
                // style={[styles.scrollView]}
            >
                <ScrollView 
                    style={[styles.scrollView, {backgroundColor: 'white'}]}
                    contentContainerStyle={{
                        width:Dimensions.get('window').width * 6,
                    }}
                    horizontal={true}
                    snapToAlignment={"center"}
                    pagingEnabled={true}
                >
                    <BasicInfoDoc refData={firstDocRef} data={data.first} isBarShown={props.isBarShown}/>
                    <FirstDoc refData={secondDocRef} data={data.second} />
                    <SecondtDoc refData={thirdDocRef} data={data.third} />
                    <SecondtDoc refData={fourthDocRef} data={data.forth} isLower={true}/>
                    <ThirdDoc refData={fifthDocRef} data={data.fifth} />
                    <FourthDoc refData={sixthDocRef} data={data.sixth} />
                    
                </ScrollView>
            </KeyboardAwareScrollView>
            
    </View>
}

// DocumentDetailView.navigationOptions = (navData, props) => {
//     const areaTitle = navData.route.params.parentName;
//     const dispatch = useDispatch();

//     const save = () => {
        
//     }

//     return {
//         headerTitle: areaTitle,
//         headerRight: () => (<Button title={"저장"} onPress={()=>save()}/>),
//         headerBackTitle: "hi",
//         headerBackTitleVisible: false
//     }
// }

const styles = StyleSheet.create({
    // keyboardAwareView: {
    //     flex: 1,
    //     width: Dimensions.get('window').width + 40,
    //     height: Dimensions.get('window').height
    // },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    scrollView : {
        // flex: 1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height - 120,
        backgroundColor: 'white',
        marginHorizontal: 0,
        // width: 2000,
        // height: 2000
    },
    
})