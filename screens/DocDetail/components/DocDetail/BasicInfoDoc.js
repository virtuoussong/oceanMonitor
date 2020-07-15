import React, { useState, useEffect } from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Modal} from 'react-native';
// import DrawerButton from '../../components/DrawerNavButton';
import TitleInputView from '../DocDetail/TitleInput';
import AreaDoc from '../../../../Models/AreaDoc';
// import area from '../../Redux/reducers/area';
import Camera from '../../../Camera';
import * as ImagePicker from 'expo-image-picker';
import CalendarPicker from '../../../../components/Calendar';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
let areaDataDoc2 = new AreaDoc(
    "", 
    "", 
    [], 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "",
    ""
)

export default BasicInfoDoc = (props) => {

    const [areaData, editAreaData] = useState(areaDataDoc2)
    const [isModalOn, setModal] = useState(false);
    const [isCalendarOn, setCalendarOn] = useState(false)

    useEffect(()=>{
        if (props.data) {
            editAreaData(props.data)
        }
    }, [props.data])

    useEffect(()=>{
        console.log(props)
        props.refData.current = areaData
    }, [areaData])

    const pictureTapped = async () => {
        console.log("picture tapped")
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        
        if (!result.cancelled) {
            editAreaData({
                ...areaData,
                imageLink: result.uri
            })
        }
    }

    const cameraTapped = () => {
        console.log("camera tapped")
        setModal(!isModalOn)
    }

    const toggleCamera = () => {
        setModal(!isModalOn)
    }

    const savePhoto=(i)=> {
        editAreaData({
            ...areaData,
            imageLink: i
        })
    }

    const toggleCalendar = () =>{
        setCalendarOn(!isCalendarOn)
    }

    const handleDatePicked =(i)=> {
        console.log(i)
        editAreaData({...areaData, date: i})
    }

    return <View style={styles.container}>
        <Modal visible={isModalOn}>
            <Camera toggleCamera={()=>toggleCamera()} save={(i)=>savePhoto(i)}/>
        </Modal>
        <Modal visible={isCalendarOn} transparent={true} animationType="slide">
            <CalendarPicker close={()=>toggleCalendar()} setDate={(i)=>handleDatePicked(i)}/>
        </Modal>

        {/* <DateTimePickerModal
            isVisible={isCalendarOn}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        /> */}
        {/* <TitleInputView/> */}
        <View style={styles.divisionWrapper}>
            {/* 섹션 1 */}
            <View style={[{flex: 1}, styles.rightBorderLine]}>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"조사\n일시"}</Text>
                    </View>
                    <TouchableOpacity style={[{flex: 2}, styles.centerView]} onPress={toggleCalendar}>
                        <Text>{areaData.date}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"조사\n시간"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.hour} onChange={(i)=>editAreaData({...areaData, hour: i.nativeEvent.text})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"고조\n저조"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.tide} onChange={(i)=>editAreaData({...areaData, tide: i.nativeEvent.text})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"천기"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.sky} onChange={(i)=>editAreaData({...areaData, sky: i.nativeEvent.text})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"파고\n(m)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.wave} onChange={(i)=>editAreaData({...areaData, wave: i.nativeEvent.text})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"풍속\n(m/s)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.wind} onChange={(i)=>editAreaData({...areaData, wind: i.nativeEvent.text })}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"기온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.temp} onChange={(i)=>editAreaData({...areaData, temp: i.nativeEvent.text})} />
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                    <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                        <Text>{"수온\n(℃)"}</Text>
                    </View>
                    <View style={[{flex: 2}, styles.centerView]}>
                        <TextInput value={areaData.waterTemp} onChange={(i)=>editAreaData({...areaData, waterTemp: i.nativeEvent.text})}/>
                    </View>
                </View>
                <View style={[styles.flexRow, styles.borderBottom, {flex: 2}]}>
                    <View style={[styles.borderRight, {flex: 1}, styles.centerView, styles.headerYellow]}><Text>{"해\n안\n선"}</Text></View>
                    <View style={[{flex: 5}]}>
                        <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                            <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                                <Text>{"길\n이\n(m)"}</Text>
                            </View>
                            <View style={[{flex: 4}, styles.centerView]}>
                                <TextInput value={areaData.beachLength} onChange={(i)=>editAreaData({...areaData, beachLength: i.nativeEvent.text})}/>
                            </View>
                        </View>

                        <View style={[styles.flexRow, styles.borderBottom, {flex: 1}]}>
                            <View style={[{flex: 1}, styles.borderRight, styles.centerView, styles.headerYellow]}>
                                <Text>{"폭\n(m)"}</Text>
                            </View>
                            <View style={[{flex: 4}, styles.centerView]}>
                                <TextInput value={areaData.beachWidth} onChange={(i)=>editAreaData({...areaData, beachWidth: i.nativeEvent.text})}/>
                            </View>
                        </View>
                    </View>
                </View>
                
                
            </View>

            {/* 섹션 2 */}
            <View style={[{flex: 5.2}, styles.flexRow, styles.centerView]}>
                {areaData.imageLink ? 
                    <TouchableOpacity style={{flex: 1}} onPress={()=>pictureTapped()}>
                        <Image style={{flex: 1}} source={{uri: areaData.imageLink}}/>  
                    </TouchableOpacity> :
                    <React.Fragment>
                        <View style={[{flex: 1}, styles.centerView]}>
                            <TouchableOpacity onPress={()=>cameraTapped()}>
                                <Image style={[, {width: 100, height: 100}]} source={require("../../../../assets/cameraIcon.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[{flex:1}, styles.centerView]}>
                            <TouchableOpacity onPress={()=>pictureTapped()}>
                                <Image style={[{width: 100, height: 100}]} source={require("../../../../assets/pictureIcon.png")}/>
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
                }
                
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    headerYellow: {
        backgroundColor: '#FFFFCC'
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: 'black'
    },
    flexRow: {
        flexDirection: 'row',
    },
    thirdSectionColor: {
        backgroundColor: "#E6E0EC"
    },
    secondSectionColor: {
        backgroundColor: "#DBEEF4"
    },
    firstSectionColor: {
        backgroundColor: "#FDEADA"
    },
    imageInput: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputCell: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    cellText: {
        fontSize: 18
    },
    midSizeCell: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    sectionTop: {
        flexDirection: 'row',
        width: '100%',
        height: 80
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    rightBorderLine: {
        borderRightWidth: 1,
        borderRightColor: 'black',
    },
    divisionSection: {
        flex: 1,
    },
    divisionWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex:1,
    
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRightWidth: 0,
        backgroundColor: 'white'
    }, 
    
})
