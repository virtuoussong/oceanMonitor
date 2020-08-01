import React, { useState, useEffect } from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, TextInput, findNodeHandle} from 'react-native';
import TitleInputView from './TitleInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import { TextInput } from 'react-native-gesture-handler';

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

import {FifthPage} from '../../../../Models/fifthPage.js'

let fifthPageData = new FifthPage("", "");

export default FourthdDoc = (props) => {

    const [data, dataSet] = useState(fifthPageData);
    const [height, setHeight] = useState(0);
    const [keyBoardHeight, setKeyboardHeight] = useState(0);
    useEffect(()=>{
        if (props.data) {
            dataSet(props.data)
        }
    }, [props.data])

    useEffect(()=>{
        props.refData.current = data
    }, [data])

    const inputFocus = (refName) => {
        setTimeout(()=> {
            
        }, 50)
    }

    useEffect(() => {
        scrollKeyboard()
        console.log("height", height)
    }, [height])

    const scrollKeyboard = () => {
        if (height > 150) {
            if (height < 550) {
                scrollRef.current.scrollToPosition(0, height - 140, true)
            }
        }

    }

    const setHeightForTextInput = (event) => {
        if (event.nativeEvent.contentSize.height < 550) {
            setHeight(event.nativeEvent.contentSize.height)
        } 
    }

    // let scrollViewRef = React.createRef()
    let majorRef = React.createRef()
    let scrollRef = React.createRef()

    return  <View style={[styles.container, styles.borderRight]}>
        <KeyboardAwareScrollView style={{flex: 1, width: '100%'}} contentContainerStyle={{flexGrow: 1}} ref={scrollRef} 
            onKeyboardWillShow={(frames) => setKeyboardHeight(frames.endCoordinates.height)}
            onKeyboardWillHide={(frames) => setKeyboardHeight(frames.endCoordinates.height)}
        >
            
            {/* <TitleInputView/> */}
            <View style={[styles.secondSection, styles.borderBottom, styles.firstSectionColor]}>
                <Text style={styles.secondTitle}>방제작업 설계</Text>
            </View>
                <View style={[styles.thirdSection]}>
                    <View style={[styles.largeCell, styles.borderRight]}>
                        <View style={[styles.celltitle, styles.borderBottom, styles.firstSectionColor]}>
                            <Text style={styles.cellTitleText}>주요 시방서</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <TextInput 
                                // style={{width: '100%',minHeight: '30%' ,maxHeight: '100%',textAlignVertical: 'top', padding: 12}}
                                value={data.major}
                                multiline={true}
                                onChange={(i)=> dataSet({
                                    ...data,
                                    major: i.nativeEvent.text
                                })}

                                onContentSizeChange={(event) => setHeightForTextInput(event)}

                                style={[{
                                    minHeight: 150,
                                    height: height,
                                    maxHeight: '100%',
                                    padding: 10,
                                    textAlignVertical: 'top',
                                }]}
                                ref={majorRef}
                                onFocus={()=>inputFocus('major')}
                            />
                        </View>
                    </View>
                    <View style={styles.smallCell}>
                        <View style={[styles.celltitle, styles.borderBottom, styles.firstSectionColor]}>
                            <Text style={styles.cellTitleText}>고려 변수</Text>
                        </View>
                        <View style={{flex: 1}}>
                        <TextInput 
                                onContentSizeChange={(event) => setHeightForTextInput(event)}

                                style={[{
                                    minHeight: 150,
                                    height: height,
                                    maxHeight: '100%',
                                    padding: 10,
                                    textAlignVertical: 'top',
                                }]}

                                value={data.variance}
                                multiline={true}
                                onChange={(i)=>dataSet({
                                    ...data,
                                    variance: i.nativeEvent.text
                                })}
                            />
                        </View>
                    </View>
                </View>

        </KeyboardAwareScrollView>
                
        </View>    
}

const styles = StyleSheet.create({
    cellTitleText: {
        fontSize: 16
    },
    celltitle: {
        // flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderRight: {
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    largeCell: {
        flex: 3,
        height: '100%'
    },
    smallCell: {
        flex: 1.3,
        height: '100%'
    },
    thirdSection: {
        flexDirection: 'row',
        flex: 1
    },
    secondTitle: {
        fontSize: 18
    },
    secondSection: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstSectionColor: {
        backgroundColor: "#FFFFCC"
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderStyle: 'solid'
    },
    container: {
        flex:1,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        backgroundColor: 'white',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRightWidth: 0
    },

})